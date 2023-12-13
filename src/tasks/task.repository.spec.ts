import { Test, TestingModule } from '@nestjs/testing';
import { TaskRepository } from './task.repository';

describe('TaskRepository', () => {
  let repository: TaskRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskRepository],
    }).compile();

    repository = module.get<TaskRepository>(TaskRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
