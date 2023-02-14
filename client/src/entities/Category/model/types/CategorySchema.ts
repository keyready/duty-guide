import { Category } from './Category';

export interface CategorySchema {
    data?: Category;
    isLoading: boolean;
    error?: string;
}
