import { Task } from './task';

export interface TaskSchema {
    data: Task[];
    tasksAmount: number;
    tasksAmountIsLoading: boolean;
    isLoading: boolean;
    error?: string;
}
