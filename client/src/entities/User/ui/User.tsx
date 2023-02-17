import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface UserProps {
    className?: string;
}

export const User = memo((props: UserProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            {t('User')}
        </div>
    );
});
