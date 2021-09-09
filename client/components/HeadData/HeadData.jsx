import Head from 'next/head';

export default function HeadData() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="type" property="og:type" content="website"/>
      <meta name="title" property="og:title" content="Chatter"/>
      <meta
        name="description"
        property="og:description"
        content="Join Chatter and broaden your mental landscape. Sign up, Log in and join the conversation."
      />
      <meta
        name="image"
        property="og:image"
        content="https://res.cloudinary.com/ditt6ekpx/image/upload/v1631194529/meta_images/chatter_meta_image_ilaoho.jpg"
      />
      <meta name="url" property="og:url" content="https://chatter-social.netlify.app/"/>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/chatter_logo_apple_touch.png" />
      <title>Chatter</title>
    </Head>
  );
}
