import { Injectable } from '@nestjs/common'
import * as fs from 'fs'

@Injectable()
export class MediasService {
  uploadImage(file: Express.Multer.File) {
    return this.base64_encode(file.path)
  }

  base64_encode(path: string) {
    return fs.readFileSync(path, 'base64')
  }

  deleteImage(uri: string) {
    fs.unlink(uri, (err) => {
      if (err) throw err
    })
  }
}
