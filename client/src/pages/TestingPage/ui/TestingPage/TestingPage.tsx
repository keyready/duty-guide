import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { ContentWrapper } from 'widgets/ContentWrapper/ContentWrapper';
import { TaskDetails } from 'entities/Task';

interface TestingPageProps {
    className?: string;
}

const TestingPage = memo((props: TestingPageProps) => {
    const {
        className,
    } = props;

    const [answers, setAnswers] = useState<number>(0);
    const [endOfTest, setEndOfTest] = useState<boolean>(false);

    return (
        <div className={classNames('', {}, [className])}>
            <ContentWrapper title="Тестирование">
                <TaskDetails
                    answers={answers}
                    setAnswers={setAnswers}
                    endOfTest={endOfTest}
                    setEndOfTest={setEndOfTest}
                />
            </ContentWrapper>
        </div>
    );
});

export default TestingPage;
