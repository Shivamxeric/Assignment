import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


export const sendSMS = async (phone, message) => {
    console.log("TWILIO_ACCOUNT_SID:", process.env.TWILIO_ACCOUNT_SID);
console.log("TWILIO_AUTH_TOKEN:", process.env.TWILIO_AUTH_TOKEN);
console.log("TWILIO_PHONE_NUMBER:", process.env.TWILIO_PHONE_NUMBER);
console.log("Phone:", phone);
console.log("Message:", message);

  try {
    const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;  // Ensure '+' is added
    
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: formattedPhone, // Use formatted phone number
    });
    console.log("SMS sent successfully!");
  } catch (error) {
    console.error("Twilio Error:", error.message);
  }
};
