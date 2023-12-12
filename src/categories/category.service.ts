import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  getAllCategories(): Category[] {
    return this.categoryRepository.getAllCategories();
  }

  createCategory(name: string): Category {
    const category = new Category('', name);
    return this.categoryRepository.createCategory(category);
  }
}
