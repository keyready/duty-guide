import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'shared/UI/Loader/Loader';
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

    const [queryString, setQueryString] = useState<string>('');

    useEffect(() => {
        dispatch(fetchUsersForLogin({
            lastname: '',
            order: {
                order: 'ASC',
                sortBy: 'lastname',
            },
        }));
        document.title = 'Авторизация';
    }, [dispatch]);

    const fetchData = useCallback((value: string) => {
        dispatch(fetchUsersForLogin({
            lastname: value,
            order: {
                order: 'ASC',
                sortBy: 'lastname',
            },
        }));
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
