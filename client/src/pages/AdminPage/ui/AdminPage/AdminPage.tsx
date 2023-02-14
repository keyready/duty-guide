import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { HDisclosure } from 'shared/UI/HDisclosure/HDisclosure';
import { CreateTheory } from '../CreateTheory/CreateTheory';
import { CreateTask } from '../CreateTask/CreateTask';
import { CreateCategory } from '../CreateCategory/CreateCategory';
import classes from './AdminPage.module.scss';

interface AdminPageProps {
    className?: string;
}

const AdminPage = memo((props: AdminPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(classes.AdminPage, {}, [className])}>
            <HDisclosure
                content={[
                    {
                        title: 'Добавить теорию',
                        content: <CreateTheory />,
                    },
                    {
                        title: 'Добавить вопрос',
                        content: <CreateTask />,
                    },
                    {
                        title: 'Добавить категорию',
                        content: <CreateCategory />,
                    },
                ]}
            />
        </div>
    );
});

export default AdminPage;
