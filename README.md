# Meet

Meet is a self-hosted video conferencing service that you can deploy on your own server.

Meet is currently under development.

## Motivation

The motivation behind this project is to create a self-hosted video conferencing service that is easy to deploy and use. The goal is to make it as easy as possible for anyone to deploy their own video conferencing service on their own server.

It is going to be built with Node.js, WebRTC, Socket.IO, and React.

## Planned Features

- [ ] User authentication
- [ ] User authorization
- [ ] Video Streaming
- [ ] Audio Streaming
- [ ] Meeting recording
- [ ] Meeting playback
- [ ] Chat
- [ ] Screen sharing
- [ ] File sharing
- [ ] User roles
- [ ] User profile
- [ ] User settings
- [ ] User notifications
- [ ] User blocking
- [ ] Room creation
- [ ] Room deletion
## Monorepo

This project is structured as a monorepo, meaning that it contains multiple packages. The two packages in this repo are `server` and `client`. The `server` package contains the server-side code, which includes the GraphQL API and the Solidity contracts. The `client` package contains the client-side code, which includes the React app.

## Prerequisites

To run this project, you need to have the following installed on your machine:

- Node.js (v18)
- MongoDB (running locally or on MongoDB Atlas)
- Redis (running locally or on Redis Labs)
- Yarn (mandatory)

## Project Structure

The project is structured as a monorepo, meaning that it contains multiple packages. 
The two packages in this repo are `phoenix` and `centauri`.
The `phoenix` package contains the server-side code, which includes the GraphQL API. 
The `centauri` package contains the client-side code, which is the NextJS app.

- `phoenix` - Server-side code
- `centauri` - Client-side code

## Installation

To install the project and its dependencies, run the following commands:

```
npm install
```

or

```
yarn install
```

or

```
pnpm install
```

## Start Server (phoenix)

To start the server, run the following commands:


```
cd phoenix
yarn start
```

The server will start running at http://localhost:4000.

## Start Client (centauri)

To start the client, run the following commands:

```
cd centauri
yarn start
```

The client will start running at http://localhost:3000.

## Tech Stack

- React
- Next.js
- Apollo Client
- NodeJS
- GraphQL
- TypeScript
- MongoDB
- Redis
- WebRTC
- Socket.IO
- Chakra UI
