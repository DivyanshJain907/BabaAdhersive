import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET(request: NextRequest) {
  const checks: Record<string, any> = {};

  // Check environment variables
  checks.env = {
    MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Missing',
    ADMIN_SECRET: process.env.ADMIN_SECRET ? 'Set' : 'Missing',
    RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Set' : 'Missing',
  };

  // Check MongoDB connection
  try {
    const mongooseState = mongoose.connection.readyState;
    checks.mongodb = {
      status: mongooseState === 1 ? 'Connected' : 'Not Connected',
      readyState: mongooseState, // 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
    };

    // Try to connect if not already connected
    if (mongooseState !== 1) {
      const testTimeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      );

      await Promise.race([
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test'),
        testTimeout,
      ]);

      checks.mongodb = { status: 'Connected', readyState: 1 };
    }
  } catch (error: any) {
    checks.mongodb = {
      status: 'Connection Failed',
      error: error.message,
    };
  }

  return NextResponse.json(checks);
}
