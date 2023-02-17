import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useCallback, useEffect, useState,
} from 'react';
import Form from 'react-bootstrap/Form';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { fetchTasksAmount, getTasksAmount, TaskDetails } from 'entities/Task';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksAmountIsLoading } from 'entities/Task/model/selectors/TaskSelector';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import classes from './TestingPage.module.scss';

interface TestingPageProps {
    className?: string;
}

const TestingPage = memo((props: TestingPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const [answers, setAnswers] = useState<number>(0);
    const [endOfTest, setEndOfTest] = useState<boolean>(false);
    const [pickedQuestions, setPickedQuestions] = useState<number>(5);
    const [startTest, setStartTest] = useState<boolean>(false);
    const tasksAmount = useSelector(getTasksAmount);
    const tasksAmountIsLoading = useSelector(getTasksAmountIsLoading);

    useEffect(() => {
        dispatch(fetchTasksAmount());
        document.title = 'Тестирование';
    }, [dispatch]);

    const tasksPickerHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPickedQuestions(Number(e.target.value));
    }, []);

    const restartTest = useCallback(() => {
        setStartTest(false);
        setEndOfTest(false);
        document.location.reload();
    }, []);

    return (
        <div className={classNames('', {}, [className])}>
            <ContentWrapper title="Тестирование">
                {!tasksAmountIsLoading && !startTest && (
                    <div className={classes.testSetup}>
                        <Form.Label>
                            {`Выберите количество вопросов в тесте: ${pickedQuestions}`}
                        </Form.Label>
                        <Form.Range
                            min={5}
                            max={tasksAmount}
                            value={pickedQuestions}
                            onChange={tasksPickerHandler}
                        />
                        <Button
                            theme={ButtonTheme.BLUE}
                            onClick={() => setStartTest(true)}
                        >
                            Сгенерировать тест!
                        </Button>
                    </div>
                )}

                {startTest && (
                    <TaskDetails
                        totalQuestions={pickedQuestions}
                        answers={answers}
                        setAnswers={setAnswers}
                        endOfTest={endOfTest}
                        setEndOfTest={setEndOfTest}
                    />
                )}

                {endOfTest && (
                    <Button
                        className={classes.reloadButton}
                        theme={ButtonTheme.BLUE}
                        onClick={restartTest}
                    >
                        Начать заново?
                    </Button>
                )}
            </ContentWrapper>
        </div>
    );
});

export default TestingPage;
