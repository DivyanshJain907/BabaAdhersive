import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Gallery } from '@/models/Gallery';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    let gallery = await Gallery.findOne({});

    // If no gallery exists, create a default one
    if (!gallery) {
      gallery = await Gallery.create({
        title: 'Gallery',
        images: [],
        description: 'Baba Adhesive Gallery',
      });
    }

    return NextResponse.json(gallery);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();
    const body = await request.json();

    let gallery = await Gallery.findOne({});

    if (!gallery) {
      gallery = await Gallery.create(body);
    } else {
      gallery = await Gallery.findByIdAndUpdate(gallery._id, body, { new: true });
    }

    return NextResponse.json(gallery);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
