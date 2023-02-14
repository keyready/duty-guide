import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    FormEvent, memo, useCallback, useEffect, useState,
} from 'react';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { TextArea } from 'shared/UI/TextArea/TextArea';
import { Button } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from 'entities/Task';
import {
    fetchCategories,
    getCategoriesData,
    getCategoriesIsLoading,
} from 'features/fetchCategories';
import { HSelect } from 'shared/UI/HSelect/HSelect';
import classes from './CreateTask.module.scss';

interface CreateTaskProps {
    className?: string;
}

interface Questions {
    question_1?: string;
    question_2?: string;
    question_3?: string;
    question_4?: string;
}

export const CreateTask = memo((props: CreateTaskProps) => {
    const {
        className,
    } = props;
    const dispatch = useDispatch();
    const getCategories = useSelector(getCategoriesData);
    const isCategoriesLoading = useSelector(getCategoriesIsLoading);

    const [taskTitle, setTaskTitle] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');
    const [questions, setQuestions] = useState<Questions>({});
    const [rightAnswer, setRightAnswer] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [filteredIds, setFilteredIds] = useState<number[]>([]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const content = getCategories.map((category) => (
        <div>{category.name}</div>
    ));
    const returnCategories = useCallback(() => {
        const categoriesForSelector: any[] = [];

        getCategories.forEach((category, index) => {
            categoriesForSelector.push({
                value: category.name,
                content: content[index],
            });
        });

        return categoriesForSelector;
    }, [content, getCategories]);

    const filterCategoriesNames = (selectedAwardsNames: string[]) => {
        setSelectedItems(selectedAwardsNames);
        const intersection = getCategories.filter(
            (category) => selectedAwardsNames.includes(category.name),
        );

        const arr: number[] = [];
        intersection.map(
            (item) => (item.id ? arr.push(item.id) : 0),
        );

        setFilteredIds(arr);
    };

    const onCreateTaskSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newTask = {
            description: taskDescription,
            questions,
            title: taskTitle,
            categories: filteredIds,
            rightAnswer,
        };

        dispatch(createTask(newTask));
    }, [dispatch, filteredIds, questions, rightAnswer, taskDescription, taskTitle]);

    return (
        <div className={classNames('', {}, [className])}>
            <form
                className={classes.CreateTask}
                onSubmit={onCreateTaskSubmit}
            >
                <Input
                    placeholder="Название задачи"
                    size={InputSize.SMALL}
                    onChange={setTaskTitle}
                    value={taskTitle}
                />

                <TextArea
                    onChange={setTaskDescription}
                    value={taskDescription}
                    placeholder="Описание задачи"
                />

                <div className={classes.answersWrapper}>
                    <Input
                        size={InputSize.SMALL}
                        onChange={(
                            value: string,
                        ) => setQuestions({ ...questions, question_1: value })}
                        value={questions.question_1}
                        placeholder="Вариант ответа 1"
                    />
                    <Input
                        size={InputSize.SMALL}
                        onChange={(
                            value: string,
                        ) => setQuestions({ ...questions, question_2: value })}
                        value={questions.question_2}
                        placeholder="Вариант ответа 2"
                    />
                    <Input
                        size={InputSize.SMALL}
                        onChange={(
                            value: string,
                        ) => setQuestions({ ...questions, question_3: value })}
                        value={questions.question_3}
                        placeholder="Вариант ответа 3"
                    />
                    <Input
                        size={InputSize.SMALL}
                        onChange={(
                            value: string,
                        ) => setQuestions({ ...questions, question_4: value })}
                        value={questions.question_4}
                        placeholder="Вариант ответа 4"
                    />
                </div>

                <Input
                    size={InputSize.SMALL}
                    onChange={setRightAnswer}
                    value={rightAnswer}
                    placeholder="Правильный вариант"
                />

                <HSelect
                    isLoading={isCategoriesLoading}
                    items={returnCategories()}
                    onChange={filterCategoriesNames}
                    selectedItems={selectedItems}
                    optionsClassname={classes.optionsClassname}
                    placeholder="Выберите категорию(-ии)"
                />

                <Button type="submit">Добавить</Button>
            </form>
        </div>
    );
});
