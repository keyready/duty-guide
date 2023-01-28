import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { TaskDetails } from 'entities/Task';

interface TestingPageProps {
    className?: string;
}

const TestingPage = memo((props: TestingPageProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <ContentWrapper title="Тестирование">
                <TaskDetails />
            </ContentWrapper>
        </div>
    );
});

export default TestingPage;
