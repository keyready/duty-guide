export interface Category {
    id: number;
    title: string;
}

export interface CategoriesSchema {
    data: Category[];
    isLoading?: boolean;
    error?: string;
}
