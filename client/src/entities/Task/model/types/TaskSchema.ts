import { Task } from './task';

export interface TaskSchema {
    data: Task[];
    isLoading: boolean;
    error?: string;
}
