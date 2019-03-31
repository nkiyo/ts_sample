import * as http from "http";

export class ServerAPI {
  public initServer(): void {
    const server = http.createServer(
      (req: http.IncomingMessage, res: http.ServerResponse) =>
        this.requestHandler(req, res)
    );
    server.listen("5000");
  }

  private requestHandler(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): void {
    res.end("Hello Node.js x TypeScript from ServerAPI");
  }
}
