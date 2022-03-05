import React from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
export declare type animationName = 'zoom-in-left' | 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom';
interface TransitionProps {
    animation?: string;
    wrapper?: boolean;
    classNames?: string;
}
declare type collProps = TransitionProps & CSSTransitionProps;
declare const CollapseTransition: React.FC<collProps>;
export default CollapseTransition;
