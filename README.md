# Prayer App

**For live demo link, click [here](https://vergeldevprayerapp.herokuapp.com/login)**

The Prayer App allows users to create and share personalized prayer entries with friends, track requests, set reminders, and receive notifications when prayers are answered. It's a simple and intuitive tool for deepening your prayer life and connecting with others in your faith community.

_This app is still in the early development stage._

### Install dependencies

```
# Backend dependencies
npm install


# Frontend dependencies
cd frontend
npm install
```

## Available Scripts

In the root project directory, you can run:

### `npm run backend`

Runs the server in the development mode with Nodemon.
Open [http://localhost:5000](http://localhost:5000) or use postman to access RESTful API.

### `npm run frontend`

Runs the frontend in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run both`

Runs both the backend and frontend at the same time.

## Production

```
#change the NODE_ENV in the dotenv to production
#generate the build from the frontend
cd frontend
npm run build

#then run the server in production
cd ..
npm start
```
