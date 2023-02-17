import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
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
import { current } from '@reduxjs/toolkit';

interface TaskDetailsProps {
    className?: string;
    setAnswers: (answersNumber: number) => void;
    answers: number;
    endOfTest: boolean;
    setEndOfTest: (value: boolean) => void
}

export const TaskDetails = memo((props: TaskDetailsProps) => {
    const {
        className,
        setAnswers,
        answers,
        endOfTest,
        setEndOfTest,
    } = props;

    const tasks = useSelector(getTasksData);
    const isLoading = useSelector(getTasksIsLoading);
    const error = useSelector(getTasksError);
    const dispatch = useDispatch();

    const [task, setTask] = useState<Task>(tasks[0]);
    const [
        currentTask,
        setCurrentTask,
    ] = useState<number>(1);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const renderAnswer = () => {
        if (currentTask >= tasks.length || currentTask >= 10) {
            setEndOfTest(true);
        }
        setCurrentTask(currentTask + 1);
        setTask(tasks[currentTask]);
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
                        task={task || tasks[0]}
                        onNextButtonClick={renderAnswer}
                        answers={answers}
                        setAnswers={setAnswers}
                        isEnd={endOfTest}
                    />
                )
                : ''}
        </div>
    );
});
