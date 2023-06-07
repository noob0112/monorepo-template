import { startApiServer } from "./entry-points/api/server";

async function start() {
  return Promise.all([startApiServer()]);
}

start()
  .then((startResponses) => {
    console.log(`The app has started successfully ${startResponses}`);
  })
  .catch((error) => {
    throw new Error("startup-failure");
  });
