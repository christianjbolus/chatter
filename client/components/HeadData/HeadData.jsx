import Head from 'next/head';

export default function HeadData() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="type" property="og:type" content="website" />
      <meta name="title" property="og:title" content="Chatter" />
      <meta
        name="description"
        property="og:description"
        content="Chatter is a full-stack micro blogging application with user auth that allows users to post 280 character “Chats.”  A user can edit their Chats and respond to another user’s Chats. Includes form validation on register/login forms. Built with a Ruby on Rails/PostgreSQL backend and a React/Next.js frontend."
      />
      <meta
        name="image"
        property="og:image"
        content="https://res.cloudinary.com/ditt6ekpx/image/upload/v1631194529/meta_images/chatter_meta_image_ilaoho.jpg"
      />
      <meta
        name="url"
        property="og:url"
        content="https://chatter-social.netlify.app/"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/chatter_logo_apple_touch.png" />
      <title>Chatter</title>
    </Head>
  );
}
