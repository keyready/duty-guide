import './Loader.scss';
import { memo } from 'react';

export const Loader = memo(() => (
    <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
