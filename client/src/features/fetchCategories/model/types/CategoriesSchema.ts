export interface Category {
    id?: number;
    name: string;
}

export interface CategoriesSchema {
    data: Category[];
    isLoading?: boolean;
    error?: string;
}
