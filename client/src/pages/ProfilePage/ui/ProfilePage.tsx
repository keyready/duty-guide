import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useEffect, useMemo, useState,
} from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import { Card } from 'react-bootstrap';
import { Color } from 'react-bootstrap/types';
import { refreshUserData } from 'pages/LoginPage';
import classes from './ProfilePage.module.scss';
import Avatar from '../assets/images/avatar.svg';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const user = useSelector(getAuthUser);

    const [correctlySolved, setCorrectlySolved] = useState<number>(0);
    const [
        correctlySolvedColors, setCorrectlySolvedColors,
    ] = useState<{ bg: string, color: Color }>({ color: 'white', bg: '' });

    const { id } = useParams();

    useEffect(() => {
        if (id) dispatch(refreshUserData(Number(id)));

        if (user?.correctlySolved && user?.solvedTasksAmount) {
            setCorrectlySolved(user.correctlySolved / user.solvedTasksAmount * 100);
        }

        if (correctlySolved <= 65) setCorrectlySolvedColors({ bg: 'danger', color: 'white' });
        else if (correctlySolved > 65 && correctlySolved <= 80) {
            setCorrectlySolvedColors({ bg: 'warning', color: 'white' });
        } else setCorrectlySolvedColors({ bg: 'success', color: 'white' });
    }, [correctlySolved, user?.correctlySolved, user?.solvedTasksAmount]);

    return (
        <ContentWrapper
            title={`Страница пользователя #${id}`}
        >
            <div
                className={classNames(classes.ProfilePage, {}, [className])}
            >
                <Avatar
                    className={classes.avatar}
                />
                <div
                    className={classes.container}
                >
                    <Card
                        className={classes.infoHeader}
                        text="white"
                        bg="secondary"
                    >
                        <Card.Body>Информация</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Фамилия</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>{user?.lastname}</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Имя</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>{user?.firstname}</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Отчество</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>{user?.middlename}</Card.Body>
                    </Card>
                    <Card
                        className={classes.statisticsHeader}
                        text="white"
                        bg="secondary"
                    >
                        <Card.Body>Статистика</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Всего решенных задач</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>{user?.solvedTasksAmount}</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Из них решенные верно</Card.Body>
                    </Card>
                    <Card
                        bg={correctlySolvedColors.bg}
                        text={correctlySolvedColors.color}
                    >
                        {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                        <Card.Body>
                            {`${user?.correctlySolved} (${correctlySolved.toFixed(2)}%)`}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>Место в общем рейтинге</Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>2</Card.Body>
                    </Card>
                </div>
            </div>
        </ContentWrapper>
    );
});

export default ProfilePage;
