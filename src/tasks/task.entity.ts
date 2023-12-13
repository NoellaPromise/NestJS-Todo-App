export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class Task {
  constructor(
    public id: string,
    public title: string,
    public status: TaskStatus = TaskStatus.OPEN,
    public description: string,
    public categoryId: string,
  ) {}
}
