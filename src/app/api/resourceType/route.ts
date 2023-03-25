import { getResourceTypes } from '@/lib/prisma/utils/resourceType';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const resources = await getResourceTypes();
    return NextResponse.json({ data: resources }, { status: 200 });
  } catch (error) {
    return NextResponse.error().status;
  }
}
