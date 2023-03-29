import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQrCodeDTO } from './dtos/create-qrcode.dto';
import { QrCode } from './interfaces/qrcode.interface';
import { QrCodeService } from './qr-code.service';

@Controller()
export class QrCodeController {
  constructor(private readonly qrcodeService: QrCodeService) {}

  @Post('/generate')
  @UsePipes(ValidationPipe)
  async generateQrCode(
    @Body() createQrCodeDTO: CreateQrCodeDTO,
  ): Promise<QrCode> {
    return await this.qrcodeService.generateQrCode(createQrCodeDTO);
  }

  @Get('/:path')
  async getQrCodeByName(@Param('path') path: string): Promise<QrCode> {
    return await this.qrcodeService.getQrCodeByPath(path);
  }
}
