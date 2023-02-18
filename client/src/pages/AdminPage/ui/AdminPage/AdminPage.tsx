import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useEffect, useState } from 'react';
import { HDisclosure } from 'shared/UI/HDisclosure/HDisclosure';
import { CreateUser } from 'pages/AdminPage/ui/CreateUser/CreateUser';
import { DeleteItem } from 'pages/AdminPage/ui/DeleteItem/DeleteItem';
import { Button, Modal } from 'react-bootstrap';
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        document.title = 'Админка';
        setShow(true);
    }, []);

    return (
        <div className={classNames(classes.AdminPage, {}, [className])}>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Предупреждение</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Версия приложения 1.0.3, валидации полей нет, поэтому убедительная просьба:
                    во избежание падения сервера ЗАПОЛНЯТЬ ВСЕ ПОЛЯ, иначе все упадет, и придется
                    вызывать сантехников.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Понятно.
                    </Button>
                </Modal.Footer>
            </Modal>

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
