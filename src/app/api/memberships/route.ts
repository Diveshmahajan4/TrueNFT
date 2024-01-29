import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';

export async function GET() {
  try {
    const memberships = await prismadb.membership.findMany();
    // console.log(memberships);
    return Response.json(memberships);
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal Server Error' });
  }
}