import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { HDisclosure } from 'shared/UI/HDisclosure/HDisclosure';
import { Alert, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getTasksData, getTasksIsLoading } from 'entities/Task';
import {
    fetchCategories,
    getCategoriesData,
    getCategoriesIsLoading,
} from 'features/fetchCategories';
import { fetchTheory, getTheoryData, getTheoryIsLoading } from 'entities/Theory';
import { fetchTasks } from 'entities/Task/model/services/fetchTasks/fetchTasks';
import { deleteTheory } from 'entities/Theory/model/services/deleteTheory/deleteTheory';
import { deleteCategory } from 'entities/Category';
import classes from './DeleteItem.module.scss';

interface DeleteItemProps {
    className?: string;
}

export const DeleteItem = memo((props: DeleteItemProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const tasks = useSelector(getTasksData);
    const tasksIsLoading = useSelector(getTasksIsLoading);
    const categories = useSelector(getCategoriesData);
    const categoriesIsLoading = useSelector(getCategoriesIsLoading);
    const theory = useSelector(getTheoryData);
    const theoryIsLoading = useSelector(getTheoryIsLoading);

    const [show, setShow] = useState(false);
    const [deletingItem, setDeletingItem] = useState<{id: number, type: string}>({
        id: 0,
        type: '',
    });
    const handleClose = () => setShow(false);

    const deleteItemHandler = useCallback((id: number, type: string) => {
        setShow(true);
        setDeletingItem({ id, type });
    }, []);

    const deleteItem = useCallback(() => {
        switch (deletingItem.type) {
        case 'theory':
            dispatch(deleteTheory(deletingItem.id));
            dispatch(fetchTheory());
            break;
        case 'category':
            dispatch(deleteCategory(deletingItem.id));
            dispatch(fetchCategories());
            break;
        case 'task':
            dispatch(deleteTask(deletingItem.id));
            dispatch(fetchTasks());
            break;
        default:
            console.log('loh');
            break;
        }
        handleClose();
    }, [deletingItem.id, deletingItem.type, dispatch]);

    useEffect(() => {
        dispatch(fetchTheory());
        dispatch(fetchTasks());
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className={classNames(classes.DeleteItem, {}, [className])}>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Подтверждение удаления</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы собираетесь что-то удалить. Данное действие необратимо.</Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={deleteItem}
                        variant="danger"
                    >
                        Удалить.
                    </Button>
                    <Button
                        variant="success"
                        onClick={handleClose}
                    >
                        Пока оставить.
                    </Button>
                </Modal.Footer>
            </Modal>

            <Alert variant="danger">
                Удаляйте только на свой страх и риск
            </Alert>

            <HDisclosure
                content={[
                    {
                        content: (
                            <div className={classes.tasksList}>
                                {tasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className={classes.task}
                                    >
                                        <h4>{task.title}</h4>
                                        <p>{task.description}</p>
                                        <Button
                                            onClick={() => deleteItemHandler(task.id, 'task')}
                                            variant="danger"
                                        >
                                            Удалить
                                        </Button>
                                    </div>
                                ))}
                            </div>),
                        title: 'Удалить задание',
                    },
                    {
                        content: (
                            <div className={classes.theoryList}>
                                {theory?.map((theory) => (
                                    <div
                                        key={theory.id}
                                        className={classes.task}
                                    >
                                        <h4>{theory.title}</h4>
                                        <p>{theory.content}</p>
                                        <Button
                                            onClick={() => deleteItemHandler(theory.id, 'theory')}
                                            variant="danger"
                                        >
                                            Удалить
                                        </Button>
                                    </div>
                                ))}
                            </div>),
                        title: 'Удалить теорию',
                    },
                    {
                        content: (
                            <div className={classes.tasksList}>
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className={classes.task}
                                    >
                                        <h4>{category.title}</h4>
                                        <Button
                                            onClick={
                                                () => deleteItemHandler(category.id, 'category')
                                            }
                                            variant="danger"
                                        >
                                            Удалить
                                        </Button>
                                    </div>
                                ))}
                            </div>),
                        title: 'Удалить категорию',
                    },
                ]}
            />
        </div>
    );
});
