import { Category } from 'features/fetchCategories';

export interface FileName {
    name: string;
    hashName: string;
}

export interface Theory {
    id: number;
    title: string;
    content: string;
    categories: number[];
    filesNames: FileName[];
}
