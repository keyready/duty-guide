import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { TheoryDetails } from 'entities/Theory/ui/TheoryDetails/TheoryDetails';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import classes from './TheoryPage.module.scss';

interface TheoryPageProps {
    className?: string;
}

const TheoryPage = memo((props: TheoryPageProps) => {
    const {
        className,
    } = props;

    useEffect(() => {
        document.title = 'Теория';
    });

    return (
        <div className={classNames(classes.TheoryPage, {}, [className])}>
            <ContentWrapper title="Теоретические положения">
                <TheoryDetails />
            </ContentWrapper>
        </div>
    );
});

export default TheoryPage;
