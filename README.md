# run on your environment

## run the api server
1. set your openai API Key as an environment variable called `key`
2. run `FileServer/main.mjs` using node

## run the mobile app
1. set variable `api` to your IP address followed by the port 2525 since the api server will be running at that port

   example: `const api = https://69.0.0.420:2525`
2. run `npm install` and then `npm start` to run using react native cli

For more information on how to set up react native with expo: https://reactnative.dev/docs/environment-setup
