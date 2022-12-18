import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Input, InputSize } from 'shared/UI/Input/Input';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import classes from './TaskCard.module.scss';
import { Categories } from '../../model/types/task';

interface TaskCardProps {
    id: number;
    className?: string;
    title: string;
    description: string;
    type: 'text' | 'test';
    theoryId: number;
    categories: Categories[]
    rightAnswer: string;
    totalAnswersAmount: number;
    rightAnswers: number;
    answers?: string[]
}

export const TaskCard = memo((props: TaskCardProps) => {
    const [answer, setAnswer] = useState<string>('');
    const [isSaved, setIsSaved] = useState(false);
    const [isRight, setIsRight] = useState(-1);

    const {
        id,
        className,
        categories,
        rightAnswer,
        rightAnswers,
        theoryId,
        totalAnswersAmount,
        description,
        type,
        title,
        answers,
    } = props;

    // eslint-disable-next-line no-mixed-operators
    const stat = rightAnswers / totalAnswersAmount * 100 < 70;

    const answerHandler = useCallback((val) => {
        setAnswer(val);
    }, []);
    const saveAnswer = useCallback(() => {
        setIsSaved(true);

        console.log(answer, '------------', rightAnswer);

        if (answer === rightAnswer) {
            setIsRight(1);
        } else setIsRight(0);
    }, [answer, rightAnswer]);
    const radioHandler = useCallback((e) => {
        setAnswer(e);
    }, []);

    const mods: Mods = {
        [classes.badStat]: stat,
    };

    if (type === 'test') {
        return (
            <div className={classNames(classes.TaskCard, {}, [className])}>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    {answers?.map((answer) => (
                        <div key={answer}>
                            <input
                                type="radio"
                                id={`answer${answer}`}
                                name="answers"
                                value={answer}
                                onChange={(e) => radioHandler(e.target.value)}
                                disabled={isSaved}
                            />
                            <label htmlFor={`answer${answer}`}>{answer}</label>
                        </div>
                    ))}
                    <div>
                        <Button
                            theme={ButtonTheme.BLUE}
                            onClick={saveAnswer}
                            className={classNames('', {}, [
                                isRight === 1 ? classes.right : '',
                                isRight === 0 ? classes.wrong : '',
                            ])}
                        >
                            Сохранить
                        </Button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className={classNames(classes.TaskCard, {}, [className])}>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <div>
                <div
                    className={classes.text}
                    style={{ display: 'inline-block' }}
                >
                    Ответили на вопрос:
                    {' '}
                    <p style={{ display: 'inline-block' }}>{totalAnswersAmount}</p>
                </div>
                <div
                    className={classes.text}
                >
                    Из них правильно:
                    {' '}
                    <p
                        className={classNames(classes.answers, mods, [])}
                        style={{ display: 'inline-block' }}
                    >
                        {rightAnswers}
                    </p>
                </div>
            </div>
            <div className={classes.answerBlock}>
                <Input
                    size={InputSize.SMALL}
                    placeholder="Мой ответ"
                    value={answer}
                    onChange={answerHandler}
                    disabled={isSaved}
                    className={classNames('', {}, [
                        isRight === 1 ? classes.right : '',
                        isRight === 0 ? classes.wrong : '',
                    ])}
                />
                <Button
                    theme={ButtonTheme.BLUE}
                    onClick={saveAnswer}
                    disabled={isSaved}
                >
                    Сохранить
                </Button>
            </div>
        </div>
    );
});
