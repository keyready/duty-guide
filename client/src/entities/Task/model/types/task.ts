export type Categories =
    'Боевая готовность'
    | 'Противодействие терроризму'
    | 'Пожарная безопасность'
    | 'Знание устава'

export interface Task {
    id: number;
    title: string;
    description: string;
    type: 'text' | 'test';
    theoryId: number;
    categories: Categories[]
    rightAnswer: string;
    answers?: string[];
    totalAnswersAmount: number;
    rightAnswers: number
}
