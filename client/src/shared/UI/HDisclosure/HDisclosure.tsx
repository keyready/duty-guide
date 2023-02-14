/**
 * тепловое излучение
 * эффект комптона
 * фотоэффект
 * рентгеновское излучение
 * квантовые числа (квантово-механическая модель атома водорода)
 * уравнение шредингера
 * образование зон
 * почему все металлы делятся на полу-/проводники (теория зон)
 * лазеры
 * квсе по радиоактивности
 * отличие ядерной реакции и радиораспада
 */

import { Disclosure } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import classes from './HDisclosure.module.scss';

export interface DisclosureChildren {
    title?: string;
    content?: ReactNode;
}
interface DisclosureProps {
    className?: string;
    content?: DisclosureChildren[];
}

export const HDisclosure = (props: DisclosureProps) => {
    const {
        className,
        content,
    } = props;

    return (
        <div
            className={classNames(classes.HDisclosureWrapper, {}, [className])}
        >
            {content?.map((item) => (
                <Disclosure
                    key={item.title}
                >
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                as={Button}
                                theme={ButtonTheme.BLUE}
                                className={classNames('', { [classes.opened]: open })}
                            >
                                {item.title}
                            </Disclosure.Button>
                            <Disclosure.Panel>
                                {item.content}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};
