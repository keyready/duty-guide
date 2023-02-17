import { useEffect, useState } from 'react';
import { HRadio, HRadioType } from 'shared/UI/RadioGroup/RadioGroup';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Task } from '../../model/types/Task';
import classes from './TaskCard.module.scss';

interface TaskCardProps {
    task: Task;
    onNextButtonClick?: () => void;
    answers: number;
    setAnswers: (value: number) => void;
    isEnd: boolean;
}

export const TaskCard = (props: TaskCardProps) => {
    const {
        task,
        onNextButtonClick,
        setAnswers,
        answers,
        isEnd,
    } = props;

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
        return (
            <div className={classes.TaskCard}>
                <h1 className={classes.resultHeader}>Тест завершен</h1>
                <h3 className={classNames(classes.results, {
                    [classes.bad]: answers <= 5,
                    [classes.ok]: answers <= 7 && answers > 5,
                    [classes.perfect]: answers <= 10 && answers > 7,
                })}
                >
                    {`Ваш результат: ${answers}`}
                </h3>
                <h2>{answers <= 5 ? 'К заступлению в наряд не готов' : ''}</h2>
                <h2>{answers <= 7 && answers > 5 ? 'Допущен к наряду, но возможны замечания' : ''}</h2>
                <h2>{answers <= 10 && answers > 7 ? 'Наряд пройдет без замечаний' : ''}</h2>
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
