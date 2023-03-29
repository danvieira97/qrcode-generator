import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QrCodeSchema } from './interfaces/qrcode.schema';
import { QrCodeController } from './qr-code.controller';
import { QrCodeService } from './qr-code.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'QrCode', schema: QrCodeSchema }]),
  ],
  controllers: [QrCodeController],
  providers: [QrCodeService],
})
export class QrCodeModule {}
