import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export const config = { matcher: '/welcome' };

export async function middleware() {
    await kv.set('key', 'value');
    let data = await kv.get('key');
    console.log(data); // 'value'

  return NextResponse.json(data);
}