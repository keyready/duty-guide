import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    FormEvent, memo, useCallback, useEffect, useState,
} from 'react';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { TextArea } from 'shared/UI/TextArea/TextArea';
import { HSelect } from 'shared/UI/HSelect/HSelect';
import { InputFile } from 'shared/UI/InputFile/InputFile';
import { Button } from 'shared/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCategories,
    getCategoriesData,
    getCategoriesIsLoading,
} from 'features/fetchCategories';
import { createTheory } from 'entities/Theory';
import classes from './CreateTheory.module.scss';

interface CreateTheoryProps {
    className?: string;
}

export const CreateTheory = memo((props: CreateTheoryProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const getCategories = useSelector(getCategoriesData);
    const isCategoriesLoading = useSelector(getCategoriesIsLoading);

    const [theoryText, setTheoryText] = useState<string>('');
    const [theoryTitle, setTheoryTitle] = useState<string>('');

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [filteredIds, setFilteredIds] = useState<number[]>([]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const content = getCategories.map((category) => (
        <div key={category.id}>{category.title}</div>
    ));
    const returnCategories = useCallback(() => {
        const categoriesForSelector: any[] = [];

        getCategories.forEach((category, index) => {
            categoriesForSelector.push({
                value: category.title,
                content: content[index],
            });
        });

        return categoriesForSelector;
    }, [content, getCategories]);

    const filterAwardsNames = (selectedAwardsNames: string[]) => {
        setSelectedItems(selectedAwardsNames);
        const intersection = getCategories.filter(
            (category) => selectedAwardsNames.includes(category.title),
        );

        const arr: number[] = [];
        intersection.map(
            (item) => (item.id ? arr.push(item.id) : 0),
        );

        setFilteredIds(arr);
    };

    const onSubmitCreatingTheory = ((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('categories', filteredIds.join(','));

        dispatch(createTheory(formData));
    });

    return (
        <div className={classNames(classes.CreateTheory, {}, [className])}>
            <form
                className={classes.createTheoryWrapper}
                onSubmit={onSubmitCreatingTheory}
                encType="multipart/form-data"
            >
                <Input
                    size={InputSize.SMALL}
                    placeholder="Введите название теории"
                    name="title"
                    value={theoryTitle}
                    onChange={setTheoryTitle}
                />
                <TextArea
                    placeholder="Введите текст теории"
                    value={theoryText}
                    onChange={setTheoryText}
                    name="content"
                    rows={15}
                />
                <HSelect
                    isLoading={isCategoriesLoading}
                    items={returnCategories()}
                    onChange={filterAwardsNames}
                    selectedItems={selectedItems}
                    optionsClassname={classes.optionsClassname}
                    placeholder="Выберите категорию(-ии)"
                />
                <InputFile
                    message="Прикрепите документ/-ы"
                    accept=".png,.jpg,.jpeg,.docx,.doc,.mp4"
                    name="files"
                    multiple
                />
                <Button
                    type="submit"
                >
                    Добавить
                </Button>
            </form>
        </div>
    );
});
