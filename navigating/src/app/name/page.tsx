
'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
  const router = useRouter();
    return (
      <div>
            My name is Marfowa Kianat.
            <br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address
            </button>
      
      </div>
    )
  }
