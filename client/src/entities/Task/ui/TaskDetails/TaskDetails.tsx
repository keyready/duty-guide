import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { TaskCard } from '../TaskCard/TaskCard';
import classes from './TaskDetails.module.scss';
import { Task } from '../../model/types/Task';

interface TaskDetailsProps {
    className?: string;
    setAnswers: (answersNumber: number) => void;
    answers: number;
    endOfTest: boolean;
    setEndOfTest: (value: boolean) => void;
    totalQuestions: number;
    test: Task[];
}

export const TaskDetails = memo((props: TaskDetailsProps) => {
    const {
        className,
        setAnswers,
        answers,
        endOfTest,
        setEndOfTest,
        totalQuestions,
        test,
    } = props;

    const [task, setTask] = useState<Task>(test[0]);
    const [
        currentTask,
        setCurrentTask,
    ] = useState<number>(1);

    const renderAnswer = useCallback(() => {
        setCurrentTask(currentTask + 1);

        if (currentTask === totalQuestions) {
            setEndOfTest(true);
            return;
        }

        setTask(test[currentTask]);
    }, [currentTask, setEndOfTest, test, totalQuestions]);

    return (
        <div className={classNames(classes.TaskDetails, {}, [className])}>
            {!endOfTest && (
                <div>
                    <h3>{`Вопрос ${currentTask} из ${totalQuestions}`}</h3>
                    <ProgressBar
                        variant="success"
                        animated
                        label={`${(currentTask / totalQuestions * 100).toFixed(2)}%`}
                        now={(currentTask / totalQuestions * 100)}
                    />
                </div>
            )}
            {test.length
                ? (
                    <TaskCard
                        totalQuestions={totalQuestions}
                        task={task}
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
