import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheoryData, getTheoryError, getTheoryIsLoading } from 'entities/Theory';
import { Loader } from 'shared/UI/Loader/Loader';
import { TheoryCard } from 'entities/Theory/ui/TheoryCard/TheoryCard';
import { fetchTheory } from '../../model/services/fetchTheory/fetchTheory';
import classes from './TheoryDetails.module.scss';

interface TheoryDetailsProps {
    className?: string;
}

export const TheoryDetails = memo((props: TheoryDetailsProps) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    const data = useSelector(getTheoryData);
    const isLoading = useSelector(getTheoryIsLoading);
    const error = useSelector(getTheoryError);

    useEffect(() => {
        dispatch(fetchTheory());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className={classNames(classes.TheoryDetails, {}, [className])}>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(classes.TheoryDetails, {}, [className])}>
            {data?.length
                ? data?.map((pos) => (
                    <TheoryCard
                        key={pos.id}
                        data={pos}
                    />
                ))
                : ''}
        </div>
    );
});
