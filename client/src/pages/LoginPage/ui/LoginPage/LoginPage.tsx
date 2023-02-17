import { memo, useEffect, useState } from 'react';
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
import { Button, Modal } from 'react-bootstrap';

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

    const handleClose = () => setShow(false);

    useEffect(() => {
        dispatch(fetchUsersForLogin());
        document.title = 'Авторизация';
        setShow(true);
    }, [dispatch]);

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
                    Версия приложения: 1.0.1. На данном этапе любой курсант может авторизовать под правами администратора. Если кто-то захочет "повеселиться" - помните, что все действия записываются с точной датой и временем. Последствия будут.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Понятно.
                    </Button>
                </Modal.Footer>
            </Modal>

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
