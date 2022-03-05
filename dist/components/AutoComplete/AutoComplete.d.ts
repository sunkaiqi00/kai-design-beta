import React, { ReactElement } from "react";
import { InputProps } from "../Input";
export interface optionItem {
    value: string;
}
export declare type suggestionType<T = {}> = T & optionItem;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    filterOption: (str: string) => suggestionType[] | Promise<suggestionType[]>;
    onSelect?: (str: suggestionType) => void;
    renderTemplate?: (item: suggestionType) => ReactElement;
    notFoundContent?: string | ReactElement;
}
declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
