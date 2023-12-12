import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { CategoriesController } from './categories/categories.controller';
import { TaskService } from './tasks/task.service';
import { CategoryService } from './categories/category.service';
import { TaskRepository } from './tasks/task.repository';
import { CategoryRepository } from './categories/category.repository';

@Module({
  controllers: [TasksController, CategoriesController],
  providers: [TaskService, CategoryService, TaskRepository, CategoryRepository],
})
export class AppModule {}
