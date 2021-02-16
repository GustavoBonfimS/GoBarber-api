import dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
  default: {
    from: process.env.EMAIL_DEFAULT_FROM,
  },
};
