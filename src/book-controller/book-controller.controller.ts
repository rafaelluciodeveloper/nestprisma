import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from '@prisma/client';
import { BookServiceService } from 'src/book-service/book-service.service';

@Controller('book-controller')
export class BookControllerController {
  constructor(private readonly bookService: BookServiceService) {}

  @Get('books/:id')
  async getBookById(@Param('id') id: string): Promise<Book> {
    return this.bookService.getBook({ id: Number(id) });
  }

  @Post('books')
  async createBook(
    @Body() bookData: { title: string; author: string; publishYear: number },
  ): Promise<Book> {
    const { title, author } = bookData;
    const publishYear = Number(bookData.publishYear);
    return this.bookService.createBook({
      title,
      author,
      publishYear,
    });
  }

  @Put('books/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() bookData: { title: string; author: string; publishYear: number },
  ): Promise<Book> {
    const { title, author } = bookData;
    const publishYear = Number(bookData.publishYear);

    return this.bookService.updateBook({
      where: { id: Number(id) },
      data: {
        title,
        author,
        publishYear,
      },
    });
  }

  @Delete('books/:id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.deleteBook({
      id: Number(id),
    });
  }
}
