import { ReactNode, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import CheckIcon from './assets/check-icon.svg';
import classes from './RadioGroup.module.scss';

export interface HRadioType {
    name: string;
    content: ReactNode;
}

interface HRadioProps {
    className?: string;
    items: HRadioType[];
    selected: HRadioType;
    setSelected: (value: HRadioType) => void;
}

export const HRadio = (props: HRadioProps) => {
    const {
        className,
        items,
        setSelected,
        selected,
    } = props;

    return (
        <div className={classes.RadioWrapper}>
            <RadioGroup
                className={classes.RadioGroup}
                value={selected}
                onChange={setSelected}
            >
                <RadioGroup.Label className={classes.label}>Plan</RadioGroup.Label>

                {items.map((item) => (
                    <RadioGroup.Option
                        key={item.name}
                        value={item.name}
                        className={(
                            { checked, active },
                        ) => classNames(classes.option, {
                            [classes.checked]: checked,
                            [classes.active]: active,
                        })}
                    >
                        {({ checked }) => (
                            <>
                                {item.content}
                                {checked && (
                                    <CheckIcon className={classes.svg} />
                                )}
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
        </div>
    );
};
