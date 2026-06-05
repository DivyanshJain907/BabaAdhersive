import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import dbConnect from '@/lib/mongodb';
import { Contact } from '@/models/Contact';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function GET(request: NextRequest) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();

    // Send email using Resend if API key is configured
    if (resend) {
      try {
        await resend.emails.send({
          from: 'noreply@babaadhesive.in',
          to: process.env.CONTACT_EMAIL || 'suneja053@gmail.com',
          subject: `New Contact Message from ${body.name}`,
          html: `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${body.message}</p>
          `,
        });
      } catch (emailError: any) {
        console.error('Email sending failed:', emailError.message);
        // Continue anyway - email is optional
      }
    }

    // Save to database
    const contact = new Contact(body);
    await contact.save();

    return NextResponse.json(contact, { status: 201 });
  } catch (error: any) {
    console.error('Contacts API Error:', error.message);
    return NextResponse.json(
      { error: error.message, type: error.name },
      { status: 400 }
    );
  }
}
