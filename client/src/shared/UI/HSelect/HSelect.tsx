import { ReactNode } from 'react';
import { Listbox } from '@headlessui/react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/UI/Loader/Loader';
import classes from './HSelect.module.scss';

interface HSelectItems {
    value: string;
    content: ReactNode;
}

interface HSelectProps {
    items?: HSelectItems[]
    onChange: (value: string[]) => void,
    selectedItems?: string[];
    optionsClassname?: string,
    placeholder?: string;
    isLoading?: boolean;
}

export const HSelect = (props: HSelectProps) => {
    const {
        items,
        onChange,
        optionsClassname,
        selectedItems,
        placeholder,
        isLoading,
    } = props;

    return (
        <Listbox
            as="div"
            className={classes.HSelect}
            value={selectedItems}
            onChange={(value) => onChange(value)}
            multiple
        >
            <Listbox.Button className={classes.trigger}>
                <Button
                    theme={ButtonTheme.PRIMARY}
                >
                    {selectedItems?.length
                        ? selectedItems?.map((item) => item).join(', ')
                        : placeholder}
                </Button>
            </Listbox.Button>
            <Listbox.Options className={classNames(classes.options, {}, [optionsClassname])}>
                {isLoading && (
                    new Array(1)
                        .fill(0)
                        .map((key) => (
                            <Listbox.Option key={key} value="">
                                <Loader />
                            </Listbox.Option>
                        ))
                )}
                {items?.map((item) => (
                    <Listbox.Option
                        className={classes.option}
                        key={item.value}
                        value={item.value}
                    >
                        {({ selected }) => (
                            <div
                                className={classNames('', { [classes.selected]: selected })}
                            >
                                {item.content}
                            </div>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
};
