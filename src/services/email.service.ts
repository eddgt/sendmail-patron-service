export default class EmailService {
  sendEmail(from: string, to: string, body: string): void {
    console.log(`From: ${from}, Sending Email to: ${to} with \n body: ${body}`);
  }
}
