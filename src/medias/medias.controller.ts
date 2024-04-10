import { Controller, Post, UseInterceptors, UploadedFile, Delete, Param } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { MulterConfigService } from 'common/configs/multer.config'
import { MediasService } from './medias.service'

@Controller('medias')
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('image', new MulterConfigService('images').createMulterOptions()))
  async uploadImageFile(@UploadedFile() file: Express.Multer.File) {
    const base64 = this.mediasService.uploadImage(file)

    return {
      message: 'Upload image successfully',
      data: {
        base64: base64
      }
    }
  }

  @Delete('image/:uri')
  deleteImage(@Param('uri') uri: string) {
    return this.mediasService.deleteImage(uri)
  }
}
