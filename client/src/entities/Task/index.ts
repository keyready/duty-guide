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
    getTasksAmount,
} from './model/selectors/TaskSelector';
export { createTask } from './model/services/createTask/createTask';
export { fetchTasksAmount } from './model/services/fetchTasksAmount/fetchTasksAmount';
