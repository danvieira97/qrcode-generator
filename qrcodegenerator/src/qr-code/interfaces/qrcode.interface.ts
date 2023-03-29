import { Document } from 'mongoose';

export interface QrCode extends Document {
  name: string;
  urlGithub: string;
  urlLinkedin: string;
  path: string;
}
