import express, { Request, Response } from "express";
import MessagingController from "./controllers/messaging.controller";
import EmailService from "./services/email.service";
import MessagingService from "./services/messaging.service";

const app = express();
const PORT = 3006;

const emailService = new EmailService();
const messagingService = new MessagingService(emailService);
const messagingController = new MessagingController(messagingService);

app.use(express.json());
app.post("/message", (req: Request, res: Response) =>
  messagingController.sendMessage(req, res)
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
