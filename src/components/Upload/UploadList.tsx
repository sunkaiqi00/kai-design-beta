import React, { FC } from 'react'
import {
  Loading3QuartersOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  CloseOutlined,
  FileSyncOutlined,
  FileDoneOutlined,
  FileExcelOutlined
} from '@ant-design/icons';

import { UploadFile } from './Upload'
import Progress from '../Progress';

interface UploadListProps {
  showProgress?: boolean
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove, showProgress } = props

  return (
    <ul className="kai-upload-list">
      {fileList.map(item => {
        return (
          <li className="kai-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              {/* <FileTextTwoTone twoToneColor={fileIconColor} /> */}
              {/* uoloading */}
              {(item.status === 'uploading' || item.status === 'ready') && <FileSyncOutlined />}
              {/* success */}
              {item.status === 'success' && <FileDoneOutlined />}
              {/* error */}
              {item.status === 'error' && <FileExcelOutlined />}
              <span className='file-name-text'>{item.name}</span>
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Loading3QuartersOutlined spin style={{ color: "#1890ff" }} />}
              {item.status === 'success' && <CheckCircleTwoTone />}
              {item.status === 'error' && <CloseCircleTwoTone twoToneColor="#ff4d4f" />}
            </span>
            <span className="file-actions" onClick={() => { onRemove(item) }}>
              <CloseOutlined />
            </span>
            {showProgress &&
              <Progress
                status={item.status !== 'uploading' ? item.status : 'active'}
                percent={item.percent || 0}
              />
            }
          </li>
        )
      })}
    </ul>
  )

}

export default UploadList;