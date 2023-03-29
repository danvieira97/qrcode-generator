import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQrCodeDTO } from './dtos/create-qrcode.dto';
import { QrCode } from './interfaces/qrcode.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QrCodeService {
  constructor(
    @InjectModel('QrCode') private readonly qrcodeModel: Model<QrCode>,
  ) {}

  async generateQrCode(createQrCodeDTO: CreateQrCodeDTO): Promise<QrCode> {
    const { name, urlGithub, urlLinkedin } = createQrCodeDTO;

    const findQrCode = await this.qrcodeModel.find({
      name: name,
      urlGithub: urlGithub,
      urlLinkedin: urlLinkedin,
    });

    if (findQrCode.length > 0) {
      throw new BadRequestException(`QR Code alredy registered `);
    }

    const path = name.split(' ').join('').toLowerCase();

    createQrCodeDTO.path = path;
    const createQrCode = new this.qrcodeModel(createQrCodeDTO);
    return await createQrCode.save();
  }

  async getQrCodeByPath(path: string): Promise<any> {
    const findQrCode = await this.qrcodeModel.find({ path: path });
    if (!findQrCode) {
      throw new NotFoundException(
        `Not found QR Code with this name path: ${path}`,
      );
    }
    return findQrCode;
  }
}
