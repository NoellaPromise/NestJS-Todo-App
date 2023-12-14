import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  // Param,
  // Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAllCategories(): Category[] {
    return this.categoryService.getAllCategories();
  }

  // @Get(':id')
  // getCategoryById(@Param('id') id: string): Category {
  //   return this.categoryService.getCategoryById(id);
  // }

  @Post()
  createCategory(
    @Body(ValidationPipe) createCategoryDto: CreateCategoryDto,
  ): Category {
    return this.categoryService.createCategory(createCategoryDto.name);
  }
  // @Delete(':id')
  // deleteCategoty(@Param('id') id: string): void {
  //   this.categoryService.deleteCategory(id);
  // }
}
