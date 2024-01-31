import dotenv from 'dotenv';
dotenv.config();
export const dbUrl = process.env.DATABASEURL
export const port= process.env.PORT || 4000
export const jwtSecret = process.env.JWT_SECRET

