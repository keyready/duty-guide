import { useCallback, useState } from 'react';
import { HRadio, HRadioType } from 'shared/UI/RadioGroup/RadioGroup';
import { AppLink } from 'shared/UI/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Task } from '../../model/types/Task';
import classes from './TaskCard.module.scss';

interface TaskCardProps {
    task: Task;
    onNextButtonClick?: () => void;
}

export const TaskCard = (props: TaskCardProps) => {
    const { task, onNextButtonClick } = props;

    const [answer, setAnswer] = useState<string>('');

    const radioItems: HRadioType[] = task.answersVariants.map((variant) => (
        {
            name: variant,
            content: variant,
        }
    ));
    const [selectedAnswer, setSelectedAnswer] = useState<HRadioType>(radioItems[0]);

    const continueHandler = useCallback(() => {
        console.warn(selectedAnswer);
    }, [selectedAnswer]);

    return (
        <div className={classes.TaskCard}>
            <h2 className={classes.title}>{task.title}</h2>
            <div className={classes.categoriesWrapper}>
                {task.categories.map((category) => (
                    <AppLink
                        to="/theory"
                        className={classes.category}
                    >
                        {category}
                    </AppLink>
                ))}
            </div>
            <p className={classes.description}>{task.description}</p>
            <HRadio
                items={radioItems}
                selected={selectedAnswer}
                setSelected={setSelectedAnswer}
            />
            <Button
                theme={ButtonTheme.BLUE}
                onClick={onNextButtonClick}
            >
                Далее
            </Button>
        </div>
    );
};
