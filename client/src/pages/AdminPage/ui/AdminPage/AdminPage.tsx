import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useEffect } from 'react';
import { HDisclosure } from 'shared/UI/HDisclosure/HDisclosure';
import { CreateUser } from 'pages/AdminPage/ui/CreateUser/CreateUser';
import { DeleteItem } from 'pages/AdminPage/ui/DeleteItem/DeleteItem';
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

    useEffect(() => {
        document.title = 'Админка';
    });

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
                    {
                        title: 'Добавить курсанта',
                        content: <CreateUser />,
                    },
                    {
                        title: 'Удалить что-нибудь',
                        content: <DeleteItem />,
                    },
                ]}
            />
        </div>
    );
});

export default AdminPage;
