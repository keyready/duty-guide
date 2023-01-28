export {
    TheorySchema,
} from './model/types/TheorySchema';

export {
    Theory,
} from './model/types/Theory';

export {
    TheoryActions,
    TheoryReducer,
} from './model/slices/TheorySlice';

export {
    getTheoryData,
    getTheoryError,
    getTheoryIsLoading,
} from './model/selectors/TheorySelector';

export { fetchTheory } from './model/services/fetchTheory/fetchTheory';
export { createTheory } from './model/services/createTheory/createTheory';
