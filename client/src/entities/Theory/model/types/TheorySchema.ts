import { Theory } from './Theory';

export interface TheorySchema {
    data?: Theory[];
    isLoading: boolean;
    error?: string;
}
