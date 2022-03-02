import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from "axios";

import UploadList from "./UploadList";

import Button from "../Button";


export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string,
  size: number,
  name: string,
  status?: UploadFileStatus,
  percent?: number,
  raw?: File,
  response?: any,
  error?: any,
}


export interface BaseUploadProps {
  action: string,
  showProgress?: boolean,
  defaultFileList?: UploadFile[],
  beforeUpload?: (file: File) => boolean | Promise<File>
  onProgress?: (percent: number, file: File) => void,
  onSuccess?: (data: any, file: File) => void,
  onError?: (err: any, file: File) => void,
  onChange?: (data: any, file: File) => void,
  onRemove?: (file: UploadFile) => void
}

const Upload: FC<BaseUploadProps> = (props) => {
  const { action, defaultFileList, showProgress = true, onRemove, beforeUpload, onChange, onProgress, onSuccess, onError } = props
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const uploadInputRef = useRef(null)

  // 更新上传对象状态
  const updateFileList = (updateFile: UploadFile, updateData: Partial<UploadFile>) => {
    setFileList(prevList => {
      console.log(prevList);

      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateData }
        }
        return file
      })
    })
  }

  // 打开文件上传
  const handleClick = () => {
    if (uploadInputRef.current) {
      (uploadInputRef.current as HTMLInputElement).click()
    }
  }
  // 选择文件
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fiels = e.target.files
    if (fiels) {
      uploadFiles(fiels)
      if (uploadInputRef.current) {
        (uploadInputRef.current as HTMLInputElement).value = ''
      }
    }
  }
  // 删除文件
  const handleRemove = (file: UploadFile) => {
    setFileList(list => {
      return list.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
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
    let _file: UploadFile = {
      uid: Date.now() + 'upload_file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    // 更新file集合
    setFileList(prevList => [_file, ...prevList])
    // 创建提交文件对象
    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: e => {
        let percent = Math.round((e.loaded * 100) / e.total) || 0;
        if (percent <= 100) {
          updateFileList(_file, { percent, status: 'uploading' })
          if (onProgress) {
            onProgress(percent, file)
          }
        }
      }
    }).then(res => {
      updateFileList(_file, { status: 'success', response: res.data })
      if (onSuccess) {
        onSuccess(res.data, file)
      }
      // onChange
      if (onChange) {
        onChange(res, file)
      }
    }).catch(err => {
      updateFileList(_file, { status: 'error', response: err })
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        onChange(err, file)
      }
    })
  }
  return (
    <div className="kai-upload-component">
      <Button type="primary" onClick={handleClick}>Upload File</Button>
      <input ref={uploadInputRef} type="file" onChange={handleFileChange} className="kai-upload-input" style={{ display: 'none' }} />
      <UploadList fileList={fileList} showProgress={showProgress} onRemove={handleRemove} />
    </div>
  )
}

export default Upload;