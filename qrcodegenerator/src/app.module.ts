import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QrCodeModule } from './qr-code/qr-code.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@db:27017/qrcode-generator?authSource=admin',
    ),
    QrCodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
