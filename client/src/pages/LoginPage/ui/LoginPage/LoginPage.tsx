import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'shared/UI/Loader/Loader';
import { Button, Modal } from 'react-bootstrap';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { UserCardForLogin } from '../UserCardForLogin/UserCardForLogin';
import { fetchUsersForLogin } from '../../model/services/fetchUsersForLogin';
import {
    getAllUsers,
    getAllUsersError,
    getAllUsersIsLoading,
} from '../../model/selectors/usersForLoginSelector';
import classes from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

const LoginPage = memo((props: LoginPageProps) => {
    const {
        className,
    } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const allUsers = useSelector(getAllUsers);
    const error = useSelector(getAllUsersError);
    const isLoading = useSelector(getAllUsersIsLoading);

    const [show, setShow] = useState(false);
    const [queryString, setQueryString] = useState<string>('');

    const handleClose = () => setShow(false);

    useEffect(() => {
        dispatch(fetchUsersForLogin(''));
        document.title = 'Авторизация';
        setShow(true);
    }, [dispatch]);

    const fetchData = useCallback((value: string) => {
        dispatch(fetchUsersForLogin(value));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 700);

    const onChangeSearch = useCallback((value) => {
        setQueryString(value);
        debouncedFetchData(value);
    }, [debouncedFetchData]);

    return (
        <ContentWrapper
            title="Авторизация"
        >
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>Дисклеймер</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Версия приложения: 1.0.3. В данной версии существует уязвимость, из-за которой можно узнать пароль
                    от администратора. Если кто-то захочет "повеселиться" - помните, что все действия записываются с
                    точной датой и временем. Последствия будут.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Понятно.
                    </Button>
                </Modal.Footer>
            </Modal>

            {isLoading && <Loader />}
            {error && <h2>{error}</h2>}

            <Input
                className={classes.input}
                size={InputSize.SMALL}
                value={queryString}
                onChange={onChangeSearch}
                placeholder="Начните вводить ФАМИЛИЮ"
            />
            {allUsers?.length
                ? allUsers?.map((user) => (
                    <UserCardForLogin user={user} key={user.id} />
                ))
                : 'Пользователей не найдено'}
        </ContentWrapper>
    );
});

export default LoginPage;
