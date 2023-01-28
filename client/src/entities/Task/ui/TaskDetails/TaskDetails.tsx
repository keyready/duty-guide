import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'shared/UI/Loader/Loader';
import { TaskCard } from '../TaskCard/TaskCard';
import { fetchTaskById } from '../../model/services/fetchTaskById/fetchTaskById';
import { getTasksData, getTasksError, getTasksIsLoading } from '../../model/selectors/TaskSelector';
import classes from './TaskDetails.module.scss';

interface TaskDetailsProps {
    className?: string;
}

export const TaskDetails = memo((props: TaskDetailsProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const tasks = useSelector(getTasksData);
    const isLoading = useSelector(getTasksIsLoading);
    const error = useSelector(getTasksError);

    useEffect(() => {
        dispatch(fetchTaskById());
        console.log('Запрос на задания');
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className={classNames(classes.TaskDetails, {}, [className])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(classes.TaskDetails, {}, [className])}>
            {tasks?.map((task) => (
                <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    type={task.type}
                    theoryId={task.theoryId}
                    categories={task.categories}
                    rightAnswer={task.rightAnswer}
                    totalAnswersAmount={task.totalAnswersAmount}
                    rightAnswers={task.rightAnswers}
                    answers={task.answers}
                />
            ))}
        </div>
    );
});
