# amazon-lite-clone

## To make it work

First you'll need to create firebase account and grab firebaseConfig file where you will also get your API Key and put it inside firebase.js file.

## For authentication
 From firebase Homepage go to AUTHENTICATION and inside Sign-in Method ENABLE Email/Password

## To make Payment Work
Go to stripe.com, Create an account there. Then after login copy the publishable API keys and paste it inside App.js file line number 15 inside loadStripe(PUBLISHABLE API KEY)

Then copy the Secret Key too and paste it inisde folder functions/index.js on the line require('stripe')(SECRET KEY)

Then it' ready to go.

## Installation

Go to command and and choose the project directory and install all:

### npm install
### npm install firebase
### npm install react-currency-format
### npm install @stripe/stripe-js @stripe/react-stripe-js

## Inside functions folder

### npm install express
### npm install cors
### npm install stripe

