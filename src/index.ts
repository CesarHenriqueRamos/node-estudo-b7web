import express, { Request, Response } from "express";

const server = express();

server.get("/", (request: Request, response: Response) => {});
server.listen(8080);
