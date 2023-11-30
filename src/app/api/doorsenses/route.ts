import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export async function GET(request: Request) {
  const token = cookies().get('token');

  try {
    const res = await fetch(
      `${DEV_API_ENDPOINT}doorsenses/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token?.value}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await res.json();

    console.log(data);

    if(data.message === '401 Unauthorized'){
      return NextResponse.rewrite(new URL('/', request.url))
    }

    return NextResponse.json(
      { data },
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
