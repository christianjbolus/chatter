# Chatter <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Chatter** is a micro bloggin application that allows users to share concise thoughts and ideas with other users. Users have the abity to reply to one another's Chats in order to increase engagement._


<br>

## MVP

_**Chatter's** MVP is an application that allows users to register an account, login and logout. A logged in user will then have the ability to view all Chats, view the details of a particular Chat and all of its associated replys, create new Chats, edit or delete Chats that they created, reply to other user's Chats and edit or delete those replys._

<br>

### Goals

- _Create an intuitive and enjoyable UX_
- _Construct a clean and easy to navigate UI._
- _Demonstrate an understanding of full-stack web application architecture._

<br>

### Libraries and Dependencies


|     Library      | Description                                               |
| :--------------: | :-------------------------------------------------------- |
|      React       | A component based JS library for building user interfaces |
|   React Router   | A collection of navigational React components             |
|      Axios       | A promise based HTTP client                               |


<br>

### Client (Front End)

#### Wireframes

![Mobile Landing](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955527/GA%20Project%204/Landing_anklyq.png)

- Mobile Landing

![Mobile Register](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955528/GA%20Project%204/Sign_Up_oraerj.png)

- Mobile Register

![Mobile Login](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955528/GA%20Project%204/Sign_In_tzdqau.png)

- Mobile Login

![Mobile Index](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955527/GA%20Project%204/Index_yhrmag.png)

- Mobile Index

![Mobile Show](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955527/GA%20Project%204/Show_dr78vi.png)

- Mobile Show

![Mobile Create](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955527/GA%20Project%204/Create_x4n1oh.png)

- Mobile Create

![Mobile Edit](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626955527/GA%20Project%204/Edit_f0cq4z.png)

- Mobile Edit

#### Component Tree

[Chatter Component Tree](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626954815/GA%20Project%204/chatter_component_hierarchy_brel2n.png)

#### Component Architecture


``` structure

src
|__ assets/
      |__ css
      |__ images
|__ components/
      |__ Navbar.jsx
      |__ ChatCard.jsx
      |__ ChatButton.jsx
      |__ Engagement.jsx
      |__ FormButtonjsx
      |__ FormInput.jsx
|__ containers/
      |__ ChatContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Register.jsx
      |__ Login.jsx
      |__ Chats.jsx
      |__ ChatCreate.jsx
      |__ ChatDetail.jsx
      |__ ChatEdit.jsx
      |__ ReplyCreate.jsx
      |__ ReplyEdit.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ chats.js
      |__ replys.js

```

#### Time Estimates


| Task                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create rails app and models           |    H     |     6 hrs      |     TBD       |     TBD     |
| Test controller functionality         |    H     |     1 hr       |     TDB       |     TBD     |
| Create React app and folder structure |    H     |     1 hr       |     TDB       |     TBD     |
| Add api calls from client to server   |    H     |     1 hr       |     TDB       |     TBD     |
| Create layout and container           |    H     |     1 hr       |     TDB       |     TBD     |
| Create screens                        |    H     |     16 hrs     |     TDB       |     TBD     |
| Create sub components                 |    H     |     8 hrs      |     TDB       |     TBD     |
| Initial styling                       |    H     |     8 hrs      |     TDB       |     TBD     |
| Final styling                         |    H     |     8 hrs      |     TDB       |     TBD     |
| TOTAL                                 |          |     50 hrs     |     TBD       |     TBD     |



<br>

### Server (Back End)

#### ERD Model


[Chatter ERD](https://res.cloudinary.com/ditt6ekpx/image/upload/v1626958292/GA%20Project%204/chatter_erd_vnkuwo.png)
<br>

***

## Post-MVP
- A user can like another user's Chat
- A user has the ability to follow another user
- A user has the can view and edit their profile
- A user can repost another user's Chat
- A user has the ability to include an image in their Chat
- Implement file uploading for profile and Chat images

***

## Code Showcase



## Code Issues & Resolutions


