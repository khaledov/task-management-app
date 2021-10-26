import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import{TaskStatus} from '@task-manager/database';

export class TaskStatusValidation implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(!Object.values(TaskStatus).includes(value.toUpperCase().trim()))
            throw new BadRequestException(`${value} is not a valid status`);
        return value;
    }

}