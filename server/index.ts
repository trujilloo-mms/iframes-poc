import express, { Request, Response } from "express";
import next from "next";
import {
    expressMmsSsoServiceTest,
} from '@mms/login-lib/express';

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

// fifa middleware
const ssoMiddleware_ = expressMmsSsoServiceTest({
    clientId: 'id',
    secret: 'id',
    clientSecret: 'id',
});

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(ssoMiddleware_);

    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();