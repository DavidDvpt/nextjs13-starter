// import { getTransaction } from '@/lib/prisma/utils/transaction';
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const transactions = await getTransaction(params.id);
//     return NextResponse.json({ data: transactions }, { status: 200 });
//   } catch (error) {
//     return NextResponse.error().status;
//   }
// }

export {};
