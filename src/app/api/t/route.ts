// pages/api/test.js

import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest, res : NextResponse) {
    //@ts-ignore
    res.status(200).json({ message: "Hello from the test API" });
  }
  