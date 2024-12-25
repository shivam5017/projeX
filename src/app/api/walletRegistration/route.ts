import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
const walletRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/; 

export async function POST(req: Request) {
  const { walletAddress } = await req.json();

  const trimmedWallet = walletAddress.trim();

  if (!trimmedWallet) {
    return NextResponse.json(
      {
        error: "Wallet address is required",
        notification: "Wallet Address is Required",
      },
      { status: 400 }
    );
  }

  if (!walletRegex.test(trimmedWallet)) {
    return NextResponse.json(
      {
        error: "Invalid wallet address",
        notification: "Invalid Wallet Address",
      },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prisma.onBoardedUser.findUnique({
      where: { wallet: trimmedWallet },
    });

    const isNew = !existingUser;

    if (isNew) {
      await prisma.onBoardedUser.create({
        data: { wallet: trimmedWallet },
      });
    }

    const res = NextResponse.json(
      {
        message: "Wallet onboarded successfully",
        notification: "Wallet Connected!",
        isNew,
      },
      { status: 200 }
    );

    return res;
  } catch (error) {
    console.error("Error in wallet onboarding:", error);
    return NextResponse.json(
      {
        error: "Failed to onboard wallet",
        notification: "Something Went Wrong, Try Again Later!",
      },
      { status: 500 }
    );
  }
}


export async function GET(req: Request) {
  const walletAddress = req.headers.get("x-wallet-address");

  if (!walletAddress || !walletRegex.test(walletAddress)) {
    return NextResponse.json(
      {
        error: "Invalid wallet address",
        notification: "Invalid Wallet Address",
      },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.onBoardedUser.findUnique({
      where: { wallet: walletAddress },
    });

    if (user) {
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "User not found", notification: "Wallet not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch user data",
        notification: "Something Went Wrong, Try Again Later!",
      },
      { status: 500 }
    );
  }
}