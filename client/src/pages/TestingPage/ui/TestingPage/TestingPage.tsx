import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ChangeEvent, memo, useCallback, useEffect, useState,
} from 'react';
import Form from 'react-bootstrap/Form';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { fetchTasksAmount, getTasksAmount, TaskDetails } from 'entities/Task';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksAmountIsLoading } from 'entities/Task/model/selectors/TaskSelector';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import {
    fetchCategories,
    getCategoriesData,
    getCategoriesIsLoading,
} from 'features/fetchCategories';
import { HSelect } from 'shared/UI/HSelect/HSelect';
import { createTest } from 'pages/TestingPage/model/service/createTest';
import { Collapse } from 'react-bootstrap';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import {
    getTest,
    getTestError,
    getTestIsLoading,
} from '../../model/selectors/testSelector';
import classes from './TestingPage.module.scss';

interface TestingPageProps {
    className?: string;
}

const TestingPage = memo((props: TestingPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const categories = useSelector(getCategoriesData);
    const categoriesIsLoading = useSelector(getCategoriesIsLoading);
    const tasksAmount = useSelector(getTasksAmount);
    const tasksAmountIsLoading = useSelector(getTasksAmountIsLoading);
    const test = useSelector(getTest);
    const user = useSelector(getAuthUser);
    const isLoading = useSelector(getTestIsLoading);
    const testError = useSelector(getTestError);

    const [answers, setAnswers] = useState<number>(0);
    const [endOfTest, setEndOfTest] = useState<boolean>(false);
    const [pickedQuestions, setPickedQuestions] = useState<number>(5);
    const [startTest, setStartTest] = useState<boolean>(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [filteredIds, setFilteredIds] = useState<number[]>([]);
    const [notEnoughtQuestions, setNotEnoughtQuestions] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchTasksAmount());
        dispatch(fetchCategories());
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

    const content = categories.map((category) => (
        <div>{category.title}</div>
    ));
    const returnCategories = useCallback(() => {
        const categoriesForSelector: any[] = [];

        categories.forEach((category, index) => {
            categoriesForSelector.push({
                value: category.title,
                content: content[index],
            });
        });

        return categoriesForSelector;
    }, [content, categories]);
    const filterCategoriesNames = (selectedAwardsNames: string[]) => {
        setSelectedItems(selectedAwardsNames);
        const intersection = categories.filter(
            (category) => selectedAwardsNames.includes(category.title),
        );

        const arr: number[] = [];
        intersection.map(
            (item) => (item.id ? arr.push(item.id) : 0),
        );

        setFilteredIds(arr);
    };

    const fetchTest = useCallback(async () => {
        const dispatchResult = await dispatch(createTest({
            tasksAmount: pickedQuestions,
            categories: filteredIds,
        }));

        // @ts-ignore
        if (dispatchResult.payload === 'error') {
            setNotEnoughtQuestions(true);
            setTimeout(() => {
                setNotEnoughtQuestions(false);
            }, 2500);
        } else {
            setStartTest(true);
        }
    }, [dispatch, filteredIds, pickedQuestions]);

    return (
        <div className={classNames('', {}, [className])}>
            <ContentWrapper title="Тестирование">
                {!tasksAmountIsLoading && !startTest && (
                    <Form className={classes.testSetup}>
                        <Form.Label>
                            {`Выберите количество вопросов в тесте: ${pickedQuestions}`}
                        </Form.Label>
                        <Form.Range
                            min={5}
                            max={tasksAmount}
                            value={pickedQuestions}
                            onChange={tasksPickerHandler}
                        />

                        <Form.Label>
                            Выберите категории тестирования:
                        </Form.Label>
                        {categories.length && (
                            <HSelect
                                isLoading={categoriesIsLoading}
                                items={returnCategories()}
                                onChange={filterCategoriesNames}
                                selectedItems={selectedItems}
                                optionsClassname={classes.optionsClassname}
                                placeholder="Выберите категорию(-ии)"
                            />
                        )}
                        <Button
                            theme={ButtonTheme.BLUE}
                            onClick={fetchTest}
                        >
                            Сгенерировать тест!
                        </Button>
                    </Form>
                )}

                <Collapse
                    timeout={1000}
                    in={notEnoughtQuestions}
                >
                    <h4
                        style={{
                            color: 'crimson',
                            marginTop: 10,
                        }}
                    >
                        В базе данных недостаточно вопросов по выбранной теме.
                    </h4>
                </Collapse>

                {startTest && test
                    ? (
                        <TaskDetails
                            totalQuestions={pickedQuestions}
                            answers={answers}
                            setAnswers={setAnswers}
                            endOfTest={endOfTest}
                            setEndOfTest={setEndOfTest}
                            test={test.test}
                        />
                    )
                    : ''}

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
