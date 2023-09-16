# Family Finance

_Bootstrapped by [create-react-app](https://github.com/facebook/create-react-app)_

[FamilyFinance Webapp](http://familyfinance.xyz)

FamilyFinance is an open source personal finance management webapp made with Firebase and React.

![alt text](https://github.com/farminf/FamilyFinance/blob/dev/screenshots.png?raw=true "Family Finance")

## Your Installation

You can use FamilyFinance on your premises/host with your firebase account easiliy. You need to just add your firebase config to your environment variables as

```
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
```

## Live Demo

In the [FamilyFinance](http://familyfinance.xyz) you can find the demo session.

## Run for Development

```
> npm install
> npm run dev
```

## Run for Production

You can run the app in production either using server (static) or on nodejs server.

```
> npm run build
> npm install -g serve
> serve -p 80 -s build
```

or

```
> npm run build
> npm start
```
