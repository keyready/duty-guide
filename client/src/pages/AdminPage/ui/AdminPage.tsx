import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    FormEvent, memo, useCallback, useEffect, useState,
} from 'react';
import {
    Category, fetchCategories, getCategoriesData, getCategoriesIsLoading,
} from 'features/fetchCategories';
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { TextArea } from 'shared/UI/TextArea/TextArea';
import { HSelect } from 'shared/UI/HSelect/HSelect';
import { BASE_URI } from 'mini-css-extract-plugin/types/utils';
import { Button } from 'shared/UI/Button/Button';
import { createTheory } from 'entities/Theory';
import { InputFile } from 'shared/UI/InputFile/InputFile';
import classes from './AdminPage.module.scss';

interface AdminPageProps {
    className?: string;
}

const AdminPage = memo((props: AdminPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useDispatch();
    const getCategories = useSelector(getCategoriesData);
    const isCategoriesLoading = useSelector(getCategoriesIsLoading);

    const [theoryText, setTheoryText] = useState<string>('');
    const [theoryTitle, setTheoryTitle] = useState<string>('');

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    // айдишники выбранных категорий
    const [filteredIds, setFilteredIds] = useState<number[]>([]);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const content = getCategories.map((category) => (
        <div>{category.title}</div>
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

        console.warn(formData);

        dispatch(createTheory(formData));
    });

    return (
        <div className={classNames(classes.AdminPage, {}, [className])}>
            <form
                className={classes.createTheoryWrapper}
                onSubmit={onSubmitCreatingTheory}
                encType="multipart/form-data"
            >
                <Input
                    size={InputSize.MEDIUM}
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

export default AdminPage;
