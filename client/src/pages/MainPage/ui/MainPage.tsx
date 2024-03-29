/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategories, getCategoriesData, getCategoriesIsLoading } from 'features/fetchCategories';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import { fetchTasksAmount, getTasksAmount } from 'entities/Task';
import classes from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const {
        className,
    } = props;

    useEffect(() => {
        document.title = 'Главная';
    });

    const authData = useSelector(getAuthUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector(getCategoriesData);
    const tasksAmount = useSelector(getTasksAmount);
    const isLoading = useSelector((getCategoriesIsLoading));

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTasksAmount());
    }, [dispatch]);

    const onBeginTest = () => {
        if (authData) navigate('/testing');
        else navigate('/login');
    };

    return (
        <div className={classNames(classes.MainPage, {}, [className])}>
            <ContentWrapper title="Проверка знаний обязанностей личным составом заступающего суточного наряда">
                <div className={classes.content_text_wrapper}>
                    <p className={classes.content_text}>
                        Данный тест представляет из себя набор несложных вопросов разбитых по категориям:
                    </p>

                    {!isLoading
                        ? (
                            <ul>
                                {categories?.map((category) => (
                                    <li key={category.id}>{category.title}</li>
                                ))}
                            </ul>
                        )
                        : <li>Загрузка категорий...</li>}
                    <p className={classes.content_text}>{`В нашей базе данных сейчас ${tasksAmount} заданий. Вам предстоит ответить на все вопросы.`}</p>
                    {/* <p className={classes.content_text}> */}
                    {/*    В тесте могут встретиться как и вопросы с выбором ответа, так и вопросы в которых необходимо */}
                    {/*    записать ответ. */}
                    {/* </p> */}
                    <p className={classes.content_text}>Удачи!</p>
                </div>

                <Button
                    onClick={onBeginTest}
                    theme={ButtonTheme.BLUE}
                    className={classes.button}
                >
                    Начать тест
                </Button>
            </ContentWrapper>
        </div>
    );
});

export default MainPage;
