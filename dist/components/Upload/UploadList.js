import React from 'react';
import { Loading3QuartersOutlined, CheckCircleTwoTone, CloseCircleTwoTone, DeleteOutlined, PaperClipOutlined } from '@ant-design/icons';
import Progress from '../Progress';
export var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove, showProgress = props.showProgress;
    return (React.createElement("ul", { className: "kai-upload-list" }, fileList.map(function (item) {
        return (React.createElement("li", { className: "kai-upload-list-item", key: item.uid },
            React.createElement("div", { className: 'kai-upload-item-info' },
                React.createElement("div", { className: "file-name file-name-".concat(item.status) },
                    React.createElement(PaperClipOutlined, null),
                    React.createElement("span", { className: 'file-name-text' }, item.name)),
                React.createElement("div", { className: 'file-status-icon' },
                    React.createElement("span", { className: "file-status" },
                        (item.status === 'uploading' || item.status === 'ready') && React.createElement(Loading3QuartersOutlined, { spin: true, style: { color: "#1890ff" } }),
                        item.status === 'success' && React.createElement(CheckCircleTwoTone, null),
                        item.status === 'error' && React.createElement(CloseCircleTwoTone, { twoToneColor: "#ff4d4f" })),
                    React.createElement("span", { className: "file-actions", onClick: function () { onRemove(item); } },
                        React.createElement(DeleteOutlined, null)))),
            (showProgress && item.status === 'uploading') && React.createElement(Progress, { status: 'active', strokeWidth: 5, percent: item.percent || 0 })));
    })));
};
export default UploadList;
