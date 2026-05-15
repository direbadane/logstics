import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(request: Request) {
  const client = await pool.connect();
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Insert into database
    await client.query(
      `INSERT INTO contact_submissions (name, email, phone, service, message)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, phone || null, service || null, message]
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. Our team will get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
