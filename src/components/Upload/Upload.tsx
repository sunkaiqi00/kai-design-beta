import axios from "axios";
import React, { ChangeEvent, FC, useRef } from "react";
import Button from "../Button";

export interface BaseUploadProps {
  action: string,
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percent: number, file: File) => void,
  onSuccess?: (data: any, file: File) => void,
  onError?: (err: any, file: File) => void,
  onChange?: (data: any, file: File) => void
}

const Upload: FC<BaseUploadProps> = (props) => {
  const { action, beforeUpload, onChange, onProgress, onSuccess, onError } = props
  const uploadInputRef = useRef(null)

  const handleClick = () => {
    if (uploadInputRef.current) {
      (uploadInputRef.current as HTMLInputElement).click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fiels = e.target.files
    if (fiels) {
      uploadFiles(fiels)
      if (uploadInputRef.current) {
        (uploadInputRef.current as HTMLInputElement).value = ''
      }
    }
  }

  const uploadFiles = (files: FileList) => {
    const uploadFiels = Array.from(files)
    uploadFiels.forEach(file => {
      // beforeUpload 
      if (!beforeUpload) {
        postFile(file)
      } else {
        const result = beforeUpload(file)
        // beforeUpload return Promise
        if (result && result instanceof Promise) {
          result.then(fileData => {
            postFile(fileData)
          })
        }
        // beforeUpload return Boolean
        else if (result !== false) {
          postFile(file)
        }
      }

    })
  }

  const postFile = (file: File) => {
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: e => {
        console.log(e);
        let precent = Math.round((e.loaded * 100) / e.total) || 0;
        if (precent <= 100) {
          if (onProgress) {
            onProgress(precent, file)
          }
        }
      }
    }).then(res => {
      console.log(res);
      if (onSuccess) {
        onSuccess(res.data, file)
      }
      // onChange
      if (onChange) {
        onChange(res, file)
      }
    }).catch(err => {
      console.error(err)
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        console.log('onChange');

        onChange(err, file)
      }
    })
  }
  return (
    <div className="kai-upload-component">
      <Button type="primary" onClick={handleClick}>Upload File</Button>
      <input ref={uploadInputRef} type="file" onChange={handleFileChange} className="kai-upload-input" style={{ display: 'none' }} />
    </div>
  )
}

export default Upload;