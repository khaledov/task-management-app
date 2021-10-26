import { TaskStatus } from "@task-manager/database";

export class FilterTaskDto{
    keyword: string;
    status: TaskStatus;
}