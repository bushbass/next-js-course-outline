import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function Path({ title, main }) {
  const router = useRouter();
  return (
    <div>
      <h1>{title}</h1>
      <h1>below is whatever is in the url</h1>
      <h2>pathname - {router.pathname}</h2>
      <h2>asPath - {router.asPath}</h2>
      <h3>{main}</h3>
    </div>
  );
}
