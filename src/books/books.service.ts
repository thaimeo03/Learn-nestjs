import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { Repository } from 'typeorm'

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto)
  }

  findAll() {
    return this.bookRepository.find() // Select * from books
  }

  findOne(id: string) {
    return this.bookRepository.findOneBy({
      id: id
    })
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookRepository.update(id, updateBookDto) // update books set name = '...'
  }

  async remove(id: string) {
    const isExist = await this.bookRepository.findOneBy({ id: id })
    if (!isExist) {
      throw new NotFoundException('Book not found')
    }

    return this.bookRepository.delete(id)
  }
}
