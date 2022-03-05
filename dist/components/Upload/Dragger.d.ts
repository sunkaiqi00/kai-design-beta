import { FC } from 'react';
export interface BaseDragProps {
    onFile: (file: FileList) => void;
}
declare const Dragger: FC<BaseDragProps>;
export default Dragger;
