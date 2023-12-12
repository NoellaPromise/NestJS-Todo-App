import JsonDB from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoryRepository {
  private db: JsonDB.JsonDB;

  constructor() {
    this.db = new JsonDB.JsonDB(new Config('myDatabase', true, false, '/'));
  }

  getAllCategories(): Category[] {
    try {
      return (this.db.getData('/categories') as unknown as Category[]) || [];
    } catch (error) {
      return [];
    }
  }

  createCategory(category: Category): Category {
    const categoryId = uuidv4();
    category.id = categoryId;
    this.db.push(`/categories/${categoryId}`, category);
    return category;
  }
}
