import { FC } from "react";
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface BaseUploadProps {
    action: string;
    drag?: boolean;
    showProgress?: boolean;
    defaultFileList?: UploadFile[];
    name?: string;
    headers?: {
        [key: string]: any;
    };
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percent: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    onChange?: (data: any, file: File) => void;
    onRemove?: (file: UploadFile) => void;
}
declare const Upload: FC<BaseUploadProps>;
export default Upload;
