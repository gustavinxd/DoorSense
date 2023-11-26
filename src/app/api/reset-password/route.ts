import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function POST(request: Request) {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json'
    };

  const reqData = await request.json();

  try {

    const res = await fetch(`${LOCAL_ENDPOINT}login/forgot-password/`, {
      method: 'POST',
      body: JSON.stringify(reqData),
      headers: headersList
    });

    const data = await res.json();

    return NextResponse.json(
      { message: data.message, status: data.status },
      {
        status: 200
      }
    );

  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const ticket = cookies().get('ticket');
  const reqData = await request.json();

  try {

    const res = await fetch(`${DEV_API_ENDPOINT}login/reset-password/`, {
      method: 'PUT',
      body: JSON.stringify(reqData),
      headers: {
        Authorization: `Bearer ${ticket?.value}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    return NextResponse.json(
      { message: data.message, status: data.status },
      {
        status: 200
      }
    );

  } catch (error) {
    return NextResponse.json(
      { message: 'Deu ruim men', error },
      { status: 500 }
    );
  }
}