import classNames from 'classnames'
import React, { FC, useState, DragEvent } from 'react'
import { UploadOutlined } from '@ant-design/icons'
export interface BaseDragProps {
  onFile: (file: FileList) => void
}

const Dragger: FC<BaseDragProps> = (props) => {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState(false)
  const classes = classNames("kai-upload-dragger", {
    'is-dragover': dragOver
  })

  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  return (
    <div
      className={classes}
      onDragOver={e => { handleDrag(e, true) }}
      onDragLeave={e => { handleDrag(e, false) }}
      onDrop={handleDrop}
    >
      {children || <div className='kai-upload-dragger-content'>
        <UploadOutlined />
        <div>Upload</div>
      </div>}
    </div>
  )
}

export default Dragger