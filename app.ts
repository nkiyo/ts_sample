import { ServerAPI } from "./serverModule";

class Main {
  constructor() {
    const serverAPI = new ServerAPI();
    serverAPI.initServer();
  }
}

const main = new Main();
