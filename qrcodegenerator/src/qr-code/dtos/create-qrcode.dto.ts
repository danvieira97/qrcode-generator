import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateQrCodeDTO {
  @IsNotEmpty()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  readonly urlGithub: string;
  @IsUrl()
  @IsNotEmpty()
  readonly urlLinkedin: string;
  path: string;
}
