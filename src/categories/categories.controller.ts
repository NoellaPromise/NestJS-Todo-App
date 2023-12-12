import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories(): Category[] {
    return this.categoryService.getAllCategories();
  }

  @Post()
  createCategory(@Body() body: { name: string }): Category {
    return this.categoryService.createCategory(body.name);
  }
}
