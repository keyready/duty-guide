export interface Task {
    id: number;
    title: string;
    description: string;
    theoryId: number;
    categories: string[];
    answersVariants: string[],
    rightAnswer: number
}
