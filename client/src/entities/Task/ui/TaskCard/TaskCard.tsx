import { useEffect, useState } from 'react';
import { HRadio, HRadioType } from 'shared/UI/RadioGroup/RadioGroup';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { updateStatistics } from 'pages/TestingPage/model/service/updateStatistics';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUser } from 'pages/LoginPage/model/selectors/usersForLoginSelector';
import classes from './TaskCard.module.scss';
import { Task } from '../../model/types/Task';

interface TaskCardProps {
    task: Task;
    onNextButtonClick?: () => void;
    answers: number;
    setAnswers: (value: number) => void;
    isEnd: boolean;
    totalQuestions: number;
}

export const TaskCard = (props: TaskCardProps) => {
    const {
        task,
        onNextButtonClick,
        setAnswers,
        answers,
        isEnd,
        totalQuestions,
    } = props;

    const dispatch = useDispatch();
    const user = useSelector(getAuthUser);

    const [answersVariants, setAnswersVariant] = useState<string[]>([]);

    useEffect(() => {
        setAnswersVariant([
            task.question1,
            task.question2,
            task.question3,
            task.question4,
        ]);
    }, [task.question1, task.question2, task.question3, task.question4]);

    const radioItems: HRadioType[] = answersVariants.map((variant) => (
        {
            name: variant,
            content: variant,
        }
    ));
    const [selectedAnswer, setSelectedAnswer] = useState<HRadioType>(radioItems[0]);

    function checkAnswer() {
        if (String(selectedAnswer) === task.rightAnswer) {
            setAnswers?.(answers + 1);
        }

        onNextButtonClick?.();
    }

    if (isEnd) {
        const result = answers / totalQuestions * 100;
        if (user?.id) {
            dispatch(updateStatistics({
                id: user.id,
                newSolves: totalQuestions,
                newRightSolves: answers,
            }));
        }

        return (
            <div className={classes.TaskCard}>
                <h1 className={classes.resultHeader}>Тест завершен</h1>
                <h3 className={classNames(classes.results, {
                    [classes.bad]: result <= 50,
                    [classes.ok]: result > 50 && result <= 70,
                    [classes.perfect]: result >= 70,
                })}
                >
                    {`Ваш результат: ${answers} (${result.toFixed(2)}%)`}
                </h3>
                <h3>{result <= 50 ? 'К заступлению в наряд не готов.' : ''}</h3>
                <h3>{result > 50 && result <= 70 ? 'Возможны замечания на разводе.' : ''}</h3>
                <h3>{result >= 70 ? 'Наряд пройдет без замечаний.' : ''}</h3>
            </div>
        );
    }

    return (
        <div className={classes.TaskCard}>
            <h2 className={classes.title}>{task.title}</h2>
            {/* <div className={classes.categoriesWrapper}> */}
            {/*    {task.categories.map((category) => ( */}
            {/*        <AppLink */}
            {/*            to="/theory" */}
            {/*            className={classes.category} */}
            {/*        > */}
            {/*            {category} */}
            {/*        </AppLink> */}
            {/*    ))} */}
            {/* </div> */}
            <p className={classes.description}>{task.description}</p>
            <HRadio
                items={radioItems}
                selected={selectedAnswer}
                setSelected={setSelectedAnswer}
            />
            <Button
                className={classes.button}
                theme={ButtonTheme.BLUE}
                onClick={checkAnswer}
            >
                Далее
            </Button>
        </div>
    );
};
