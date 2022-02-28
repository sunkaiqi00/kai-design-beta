import React, { FC } from "react";
import Button from "../Button";

export interface BaseUploadProps {
  action: string,
  onProgress?: (percent: number, file: File) => void,
  onSuccess?: (data: any, file: File) => void,
  onError?: (err: any, file: File) => void
}

const Upload: FC = (props) => {
  return (
    <div className="kai-upload-component">
      <Button type="warning">Upload File</Button>
    </div>
  )
}

export default Upload;