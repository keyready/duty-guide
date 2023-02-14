import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { Loader } from 'shared/UI/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../model/services/fetchTasks/fetchTasks';
import { TaskCard } from '../TaskCard/TaskCard';
import classes from './TaskDetails.module.scss';
import {
    getTasksData,
    getTasksError,
    getTasksIsLoading,
} from '../../model/selectors/TaskSelector';
import { Task } from '../../model/types/Task';

interface TaskDetailsProps {
    className?: string;
}

export const TaskDetails = memo((props: TaskDetailsProps) => {
    const {
        className,
    } = props;

    const tasks = useSelector(getTasksData);
    const isLoading = useSelector(getTasksIsLoading);
    const error = useSelector(getTasksError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    const [task, setTask] = useState<Task>(tasks[0]);

    const renderAnswer = () => {
        setTask(tasks[Math.floor(Math.random() * tasks.length)]);
    };

    if (isLoading) {
        return (
            <div className={classNames(classes.TaskDetails, {}, [className])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(classes.TaskDetails, {}, [className])}>
            {tasks.length
                ? (
                    <TaskCard
                        task={task}
                        onNextButtonClick={renderAnswer}
                    />
                )
                : ''}
        </div>
    );
});
