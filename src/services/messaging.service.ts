import EmailService from "./email.service";

export default class MessagingService {
  constructor(private emailService: EmailService) {}

  sendMessage(from: string, to: string, body: string): void {
    if (!from || !to || !body) {
      throw new Error("Missing required parameter");
    }
    console.log(`\nDate: ${new Date()}`);
    console.log(`From: ${from}, Sending Message to: ${to}`);
    this.emailService.sendEmail(from, to, body);
  }
}
