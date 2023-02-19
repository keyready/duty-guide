import { Task } from 'entities/Task';

export interface Test {
    test: Task[],
    amount: number
}

export interface TestSchema {
    data: Test;
    isLoading: boolean;
    error: string;
}
