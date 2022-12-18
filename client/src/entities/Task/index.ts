export { Task } from './model/types/task';
export { TaskSchema } from './model/types/TaskSchema';
export {
    TaskActions,
    TaskReducer,
} from './model/slices/TaskSlice';

export { TaskDetails } from './ui/TaskDetails/TaskDetails';
export {
    getTasksData,
    getTasksError,
    getTasksIsLoading,
} from './model/selectors/TaskSelector';
