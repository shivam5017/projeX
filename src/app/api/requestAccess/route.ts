import { PrismaClient, Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Regular expression to validate email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  const { email } = await req.json();

  // Trim the email to remove leading and trailing spaces
  const trimmedEmail = email.trim();

  // Validate that the email is not empty after trimming
  if (!trimmedEmail) {
    return NextResponse.json(
      { error: 'Email is required', notification: 'Email is Required' },
      { status: 400 }
    );
  }

  // Validate email format using regex
  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json(
      { error: 'Invalid email format', notification: 'Invalid email format' },
      { status: 400 }
    );
  }

  try {
    // Check if the email already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email: trimmedEmail },
    });

    // If the email already exists, return an error
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already exists', notification: 'Email already exists' },
        { status: 400 }
      );
    }

    // Create a new user in the database with the trimmed email
    const newUser = await prisma.user.create({
      data: {
        email: trimmedEmail,
      },
    });

    return NextResponse.json(
      { message: 'User subscribed successfully', notification: 'Request Sent Successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Failed to subscribe user', notification: 'Something Went Wrong, Try Again later!' },
      { status: 500 }
    );
  }
}
