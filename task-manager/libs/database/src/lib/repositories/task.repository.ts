import { TaskStatus } from "@task-manager/database";
import { Repository } from "typeorm";
import { CreateTaskDto, FilterTaskDto } from "../dtos";
import { Task } from "../entities/task.entity";

export class TaskRepository extends Repository<Task>{
    
    async createTask(createTaskDto: CreateTaskDto):Promise<Task>{
        const task= new Task();
        Object.assign(task,{...createTaskDto});
        task.status= TaskStatus.OPEN;
        await task.save();
        return task;
    }

    async updateTaskStatus(id: number,status: TaskStatus):Promise<Task>{
        const task= await this.findOne(id); 
         task.status= status;
         return task;
    }

    async getTasks(filter: FilterTaskDto): Promise<Task[]>{
       const {keyword,status}= filter;
       const query= this.createQueryBuilder('task');
       if(status){
           query.andWhere('task.status= :status',{status});
       }

       if(keyword){
           query.andWhere('task.title LIKE :keyword OR task.description LIKE :keyword',{keyword: `%${keyword}%`});
       }

       const tasks= await query.getMany();
       return tasks;
    }
}