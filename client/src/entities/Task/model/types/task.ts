import { Category } from 'features/fetchCategories';

export interface Task {
    id: number;
    title: string;
    description: string;
    type: 'text' | 'test';
    theoryId: number;
    categories: Category[]
    rightAnswer: string;
    answers?: string[];
    totalAnswersAmount: number;
    rightAnswers: number
}
