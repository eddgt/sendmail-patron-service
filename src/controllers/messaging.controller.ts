import { Request, Response } from "express";
import MessagingService from "../services/messaging.service";

export default class MessagingController {
  private messagingService: MessagingService;

  constructor(messagingService: MessagingService) {
    this.messagingService = messagingService;
  }

  sendMessage(
    req: { body: { from: any; to: any; body: any } },
    res: {
      send: (arg0: { message: string }) => void;
      status: (arg0: number) => { send: (arg0: { error: any }) => void };
    }
  ) {
    try {
      const { from, to, body } = req.body;
      this.messagingService.sendMessage(from, to, body);
      res.send({
        message: "Message sent successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: "Missing required parameter" });
    }
  }
}
