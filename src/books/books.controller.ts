import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common'
import { BooksService } from './books.service'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    await this.booksService.create(createBookDto)

    return {
      message: 'Create book successfully'
    }
  }

  @Get()
  async findAll() {
    return this.booksService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.booksService.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    await this.booksService.update(id, updateBookDto)

    return {
      message: 'Update book successfully'
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.booksService.remove(id)

    return {
      message: 'Delete book successfully'
    }
  }
}
