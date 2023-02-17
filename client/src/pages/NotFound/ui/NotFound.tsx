import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';

interface NotFoundProps {
    className?: string;
}

const NotFound = memo((props: NotFoundProps) => {
    const {
        className,
    } = props;

    useEffect(() => {
        document.title = '404 | Страница не найдена';
    });

    return (
        <div className={classNames('', {}, [className])}>
            <h1>Страница не существует</h1>
        </div>
    );
});

export default NotFound;
