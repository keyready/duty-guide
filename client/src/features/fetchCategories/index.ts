export {
    Category, CategoriesSchema,
} from './model/types/CategoriesSchema';
export {
    fetchCategoriesActions,
    fetchCategoriesReducer,
} from './model/slice/fetchCategoriesSlice';
export {
    getCategoriesData,
    getCategoriesIsLoading,
    getCategoriesError,
} from './model/selectors/fetchCategoriesSelectors';
export {
    fetchCategories,
} from './model/services/fetchCategories';
