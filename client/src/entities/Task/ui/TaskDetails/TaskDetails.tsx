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

interface TaskDetailsProps {
    className?: string;
    setAnswers: (answersNumber: number) => void;
    answers: number;
    endOfTest: boolean;
    setEndOfTest: (value: boolean) => void;
    totalQuestions: number;
}

export const TaskDetails = memo((props: TaskDetailsProps) => {
    const {
        className,
        setAnswers,
        answers,
        endOfTest,
        setEndOfTest,
        totalQuestions,
    } = props;

    const tasks = useSelector(getTasksData);
    const isLoading = useSelector(getTasksIsLoading);
    const error = useSelector(getTasksError);
    const dispatch = useDispatch();

    const [task, setTask] = useState<Task>(tasks[0]);
    const [existedTasks, setExistedTasks] = useState<number[]>([]);
    const [
        currentTask,
        setCurrentTask,
    ] = useState<number>(1);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const renderAnswer = useCallback(() => {
        if (currentTask >= totalQuestions) {
            setEndOfTest(true);
        }

        let randInd = Math.floor(Math.random() * tasks.length);
        while (existedTasks.includes(randInd)) {
            randInd = Math.floor(Math.random() * tasks.length);
        }
        setExistedTasks([...existedTasks, randInd]);
        setCurrentTask(currentTask + 1);
        setTask(tasks[randInd]);
    }, [currentTask, existedTasks, setEndOfTest, tasks, totalQuestions]);

    if (isLoading) {
        return (
            <div className={classNames(classes.TaskDetails, {}, [className])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(classes.TaskDetails, {}, [className])}>
            {!endOfTest && (
                <h3>{`Вопрос ${currentTask} из ${totalQuestions}`}</h3>
            )}
            {tasks.length
                ? (
                    <TaskCard
                        totalQuestions={totalQuestions}
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
