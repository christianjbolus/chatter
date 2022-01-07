<div align="center">

# Chatter
[![Netlify Status](https://api.netlify.com/api/v1/badges/83868fa1-7a53-4176-b818-982ab14164fb/deploy-status)](https://app.netlify.com/sites/chatter-social/deploys)
</div>

## Installation
```
git clone https://github.com/christianjbolus/chatter.git
cd chatter
bundle
rails db:create
rails db:migrate
rails s
cd client
yarn install
yarn dev
```

## Overview

**Chatter** is a micro bloggin application that allows users to share concise thoughts and ideas with other users. Users have the abity to reply to one another's Chats in order to increase engagement.


<br>

## MVP

**Chatter's** MVP is an application that allows users to register an account, login and logout. A logged in user will then have the ability to view all Chats, view the details of a particular Chat and all of its associated replys, create new Chats, edit or delete Chats that they created, reply to other user's Chats, edit or delete those replys and view and edit their profile.

<br>


### Libraries and Dependencies


|     Library      | Description                                               |
| :--------------: | :-------------------------------------------------------- |
|   Ruby on Rails  | A server-side MVC web application framework.              | 
|      Next.js     | A production grade React framework that supports Static Site Generation and Server Side Rendering. |
|      Axios       | A promise based HTTP client.                               |


<br>

### Client (Front End)

[Mockups](https://xd.adobe.com/view/21c79a94-411a-4454-92f5-8f120e7289e0-7494/)


<br>

### Server (Back End)

[ERD](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626958292/GA%20Project%204/chatter_erd_vnkuwo.png)
<br>

***

## Post-MVP
- A user can like another user's Chat
- A user has the ability to follow another user
- A user can repost another user's Chat
- A user has the ability to include an image in their Chat
- Implement file uploading for profile and Chat images

***

## Code Showcase
The following function takes the error object returned from the server and reformats it to more easily display validation messages to the user on the register form.
```
const formatErrors = errObj => {
  let errors = {};
  for (let key in errObj) {
    errors[key] = `${key[0].toUpperCase() + key.slice(1)} ${errObj[key][0]}`;
  }
  return errors;
};

INPUT => {
  email: ["can't be blank", "is invalid"],
  password: ["can't be blank", "is too short (minimum is 6 characters)"],
  username: ["can't be blank"]
}

OUTPUT => {
  email: "Email can't be blank",
  password: "Password can't be blank",
  username: "Username can't be blank"
}
```


