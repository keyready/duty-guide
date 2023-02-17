import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Theory } from 'entities/Theory';
import classes from './TheoryCard.module.scss';

interface TheoryCardProps {
    className?: string;
    data?: Theory
}

export const TheoryCard = memo((props: TheoryCardProps) => {
    const {
        className,
        data,
    } = props;

    return (
        <div className={classNames(classes.TheoryCard, {}, [className])}>
            <h2 className={classes.theoryCard__Title}>{data?.title}</h2>
            <div className={classes.categories}>
                {data?.categories?.map((item) => (
                    <div key={item} className={classes.category_item}>
                        {item}
                    </div>
                ))}
            </div>
            <p className={classes.theoryCard__content}>{data?.content}</p>
            {data?.files.length
                ? (
                    <>
                        <h2
                            className={classes.filesTitle}
                        >
                            Документы по теме:
                        </h2>
                        <div
                            className={classes.filesWrapper}
                        >
                            {data?.files?.map((file) => (
                                <a
                                    className={classes.file}
                                    key={file.name}
                                    href={`files/${data?.title}/${file.name}`}
                                    download
                                >
                                    {file.name}
                                </a>
                            ))}
                        </div>
                    </>
                )
                : ''}
        </div>
    );
});
