import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersForLogin } from 'pages/LoginPage';
import { getAllUsers, getAllUsersIsLoading } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import { Card, Table } from 'react-bootstrap';
import { Loader } from 'shared/UI/Loader/Loader';
import classes from './LeaderboardPage.module.scss';

interface LeaderboardPageProps {
    className?: string;
}

const LeaderboardPage = memo((props: LeaderboardPageProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const allUsers = useSelector(getAllUsers);
    const isLoading = useSelector(getAllUsersIsLoading);

    useEffect(() => {
        dispatch(fetchUsersForLogin({
            lastname: '',
            order: {
                order: 'DESC',
                sortBy: 'solvedTasksAmount',
            },
        }));
    }, [dispatch]);

    return (
        <ContentWrapper
            title="Таблица лидеров"
        >
            <div
                className={classes.table}
            >
                <Card
                    className={classes.cell}
                    text="white"
                    bg="secondary"
                >
                    #
                </Card>
                <Card
                    className={classes.cell}
                    text="white"
                    bg="secondary"
                >
                    ФИО
                </Card>
                <Card
                    className={classes.cell}
                    text="white"
                    bg="secondary"
                >
                    Общее количество задач
                </Card>
                <Card
                    className={classes.cell}
                    text="white"
                    bg="secondary"
                >
                    Количество верно решенных задач
                </Card>
                {allUsers?.map((user) => (
                    <>
                        <Card
                            className={classes.cell}
                        >
                            {user.id}
                        </Card>
                        <Card
                            className={classes.cell}
                            bg={user.correctlySolved / user.solvedTasksAmount >= 0.8
                                ? 'success' : ''}
                            text={user.correctlySolved / user.solvedTasksAmount >= 0.8
                                ? 'white' : 'dark'}
                        >
                            {`${user.lastname} ${user.firstname} ${user.middlename}`}
                        </Card>
                        <Card
                            className={classes.cell}
                        >
                            {user.solvedTasksAmount}
                        </Card>
                        <Card
                            className={classes.cell}
                        >
                            {user.correctlySolved}
                        </Card>
                    </>
                ))}
            </div>
        </ContentWrapper>
    );
});

export default LeaderboardPage;
