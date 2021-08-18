import Head from 'next/head';

export default function HeadData() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Join Chatter and broaden your mental landscape. Sign up, Log in and join the conversation."
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/chatter_logo_apple_touch.png" />
      <title>Chatter</title>
    </Head>
  );
}
