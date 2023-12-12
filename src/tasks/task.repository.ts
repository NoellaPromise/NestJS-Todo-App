import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { JsonDB, Config } from 'node-json-db';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskRepository {
  private db: JsonDB;

  constructor() {
    this.db = new JsonDB(new Config('myDatabase', true, false, '/'));
  }

  getAllTasks(): Task[] {
    try {
      return (this.db.getData('/tasks') as unknown as Task[]) || [];
    } catch (error) {
      return [];
    }
  }

  getTaskById(id: string): Task {
    try {
      return this.db.getData(`/tasks/${id}`) as unknown as Task;
    } catch (error) {
      return null;
    }
  }

  createTask(task: Task): Task {
    const taskId = uuidv4();
    task.id = taskId;
    this.db.push(`/tasks/${taskId}`, task);
    return task;
  }

  deleteTask(id: string): void {
    this.db.delete(`/tasks/${id}`);
  }
}
