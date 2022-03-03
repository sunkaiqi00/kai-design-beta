import React, { FC } from 'react'
import {
  Loading3QuartersOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  DeleteOutlined,
  PaperClipOutlined,
  LoadingOutlined
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
            <div className='kai-upload-item-info'>
              <div className={`file-name file-name-${item.status}`}>
                <PaperClipOutlined />
                <span className='file-name-text'>{item.name}</span>
              </div>
              <div className='file-status-icon'>
                <span className="file-status">
                  {(item.status === 'uploading' || item.status === 'ready') && <Loading3QuartersOutlined spin style={{ color: "#1890ff" }} />}
                  {item.status === 'success' && <CheckCircleTwoTone />}
                  {item.status === 'error' && <CloseCircleTwoTone twoToneColor="#ff4d4f" />}
                </span>
                <span className="file-actions" onClick={() => { onRemove(item) }}>
                  <DeleteOutlined />
                </span>
              </div>

            </div>
            {
              (showProgress && item.status === 'uploading') && <Progress status='active' strokeWidth={5} percent={item.percent || 0} />
            }
          </li>
        )
      })}
    </ul>
  )

}

export default UploadList;