import { Injectable } from '@nestjs/common'
import * as fs from 'fs'

@Injectable()
export class MediasService {
  async uploadImage(file: Express.Multer.File) {
    return file.path
  }

  async deleteImage(uri: string) {
    fs.unlink(uri, (err) => {
      if (err) throw err
    })
  }
}
