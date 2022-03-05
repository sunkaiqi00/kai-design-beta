import { FC } from "react";
interface BaseColProps {
    span?: number;
    offset?: number;
    push?: number;
    pull?: number;
    order?: number;
    flex?: number | string;
    style?: object;
    className?: string;
}
declare const Col: FC<BaseColProps>;
export default Col;
