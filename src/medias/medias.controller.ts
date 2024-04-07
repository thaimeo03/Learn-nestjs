import { Controller, Post, UseInterceptors, UploadedFile, Delete, Param } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { MulterConfigService } from 'common/configs/multer.config'
import { MediasService } from './medias.service'

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('image', new MulterConfigService('images').createMulterOptions()))
  uploadImageFile(@UploadedFile() file: Express.Multer.File) {
    return this.mediasService.uploadImage(file)
  }

  @Delete('image/:uri')
  deleteImage(@Param('uri') uri: string) {
    return this.mediasService.deleteImage(uri)
  }
}
