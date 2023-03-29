import * as mongoose from 'mongoose';

export const QrCodeSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    urlGithub: { type: String, unique: true },
    urlLinkedin: { type: String, unique: true },
    path: { type: String, unique: true },
  },
  { timestamps: true, collection: 'qrcode' },
);
