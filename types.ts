export interface User {
    role: string;
    name: string;
    surname: string;
    lastname: string;
    groupId: number;
    divisionId: number;
    solvedTasks: number;
    rightSolved: number;
    dutiesAmount: number;
}

type TaskType = 'text' | 'test'
type categoryType = 'duty' | 'runner' | 'fireProtection' | 'antiTerrorism'
export interface Task {
    type: TaskType;
    category: categoryType;
    title: string;
    description: string;
    answersOption: string[] | string;
    rightAnswer: string;
    solutionsNumber: number;
    rightSolutions: number;
}

export interface Theory {
    category: categoryType;
    title: string;
    description: string;
    imageUrl?: string;
}

export interface Group {
    name: string;
    commanderId;
}

export interface Division {
    name: string;
    groupId: number;
    commanderId: number;
}

export interface Result {
    userId: number;
    solvedTasksId: number[];
    rightAnswers: number;
}

export interface Duty {
    serviceDate: string;
    attendantId: number;
    orderliesId: number[];
    runnerId: number;
    resultId: number;
}