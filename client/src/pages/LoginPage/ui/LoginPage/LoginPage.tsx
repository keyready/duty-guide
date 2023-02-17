import { memo, useEffect } from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllUsers,
    getAllUsersError,
    getAllUsersIsLoading,
} from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import { fetchUsersForLogin } from 'pages/LoginPage/model/services/fetchUsersForLogin';
import { UserCardForLogin } from 'pages/LoginPage/ui/UserCardForLogin/UserCardForLogin';
import { Loader } from 'shared/UI/Loader/Loader';

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

    useEffect(() => {
        dispatch(fetchUsersForLogin());
    }, [dispatch]);

    return (
        <ContentWrapper
            title="Авторизация"
        >
            {isLoading && <Loader />}
            {error && <h2>{error}</h2>}
            {allUsers?.length
                ? allUsers?.map((user) => (
                    <UserCardForLogin user={user} key={user.id} />
                ))
                : ''}
        </ContentWrapper>
    );
});

export default LoginPage;
