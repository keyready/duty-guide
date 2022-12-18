import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import classes from './ContentWrapper.module.scss';

interface ContentWrapperProps {
    className?: string;
    title: string;
    children: ReactNode;
}

export const ContentWrapper = memo((props: ContentWrapperProps) => {
    const { t } = useTranslation();

    const {
        className,
        children,
        title,
    } = props;

    return (
        <div className={classNames(classes.ContentWrapper, {}, [className])}>
            <div className={classes.about_wrapper}>
                <h1 className={classes.aboutTitle}>{title}</h1>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    );
});
