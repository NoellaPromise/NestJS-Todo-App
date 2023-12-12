import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  getAllTasks(): Task[] {
    return this.taskRepository.getAllTasks();
  }

  getTaskById(id: string): Task {
    return this.taskRepository.getTaskById(id);
  }

  createTask(title: string, description: string, categoryId: string): Task {
    const task = new Task('', title, TaskStatus.OPEN, description, categoryId);
    return this.taskRepository.createTask(task);
  }

  deleteTask(id: string): void {
    this.taskRepository.deleteTask(id);
  }
}
