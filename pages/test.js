import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function Test() {
  const router = useRouter();
  return (
    <div>
      {console.log(router)}
      <h1>{router.pathname}</h1>
    </div>
  );
}
