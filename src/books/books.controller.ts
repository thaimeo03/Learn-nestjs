import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common'
import { BooksService } from './books.service'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    this.booksService.create(createBookDto)

    return {
      message: 'Create book successfully'
    }
  }

  @Get()
  findAll() {
    return this.booksService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    this.booksService.update(id, updateBookDto)

    return {
      message: 'Update book successfully'
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.booksService.remove(id)

    return {
      message: 'Delete book successfully'
    }
  }
}
