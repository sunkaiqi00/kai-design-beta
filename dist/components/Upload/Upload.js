var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useState } from "react";
import axios from "axios";
import { UploadOutlined } from '@ant-design/icons';
import UploadList from "./UploadList";
import Dragger from "./Dragger";
import Button from "../Button";
var Upload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, showProgress = props.showProgress, drag = props.drag, name = props.name, // 文件名称
    headers = props.headers, // 上传请求headers
    data = props.data, // 文件扩展属性
    withCredentials = props.withCredentials, accept = props.accept, // 上传文件限制
    multiple = props.multiple, // 多选
    children = props.children, onRemove = props.onRemove, beforeUpload = props.beforeUpload, onChange = props.onChange, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError;
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    var uploadInputRef = useRef(null);
    // 更新上传对象状态
    var updateFileList = function (updateFile, updateData) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateData);
                }
                return file;
            });
        });
    };
    // 打开文件上传
    var handleClick = function () {
        if (uploadInputRef.current) {
            uploadInputRef.current.click();
        }
    };
    // 选择文件
    var handleFileChange = function (e) {
        var fiels = e.target.files;
        if (fiels) {
            uploadFiles(fiels);
            if (uploadInputRef.current) {
                uploadInputRef.current.value = '';
            }
        }
    };
    // 删除文件
    var handleRemove = function (file) {
        setFileList(function (list) {
            return list.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    var uploadFiles = function (files) {
        var uploadFiels = Array.from(files);
        uploadFiels.forEach(function (file) {
            // beforeUpload 
            if (!beforeUpload) {
                postFile(file);
            }
            else {
                var result = beforeUpload(file);
                // beforeUpload return Promise
                if (result && result instanceof Promise) {
                    result.then(function (fileData) {
                        postFile(fileData);
                    });
                }
                // beforeUpload return Boolean
                else if (result !== false) {
                    postFile(file);
                }
            }
        });
    };
    var postFile = function (file) {
        var _file = {
            uid: Date.now() + 'upload_file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        };
        // 更新file集合
        setFileList(function (prevList) { return __spreadArray([_file], prevList, true); });
        // 创建提交文件对象
        var formData = new FormData();
        formData.append(name || file.name, file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percent = Math.round((e.loaded * 100) / e.total) || 0;
                if (percent <= 100) {
                    updateFileList(_file, { percent: percent, status: 'uploading' });
                    if (onProgress) {
                        onProgress(percent, file);
                    }
                }
            }
        }).then(function (res) {
            updateFileList(_file, { status: 'success', response: res.data });
            if (onSuccess) {
                onSuccess(res.data, file);
            }
            // onChange
            if (onChange) {
                onChange(res, file);
            }
        }).catch(function (err) {
            updateFileList(_file, { status: 'error', response: err });
            if (onError) {
                onError(err, file);
            }
            if (onChange) {
                onChange(err, file);
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "kai-upload-component" },
            React.createElement("div", { className: "kai-upload-input", onClick: handleClick },
                drag ? React.createElement(Dragger, { onFile: function (fileList) { return uploadFiles(fileList); } }, children) : React.createElement(Button, { icon: React.createElement(UploadOutlined, null) }, "Upload File"),
                React.createElement("input", { ref: uploadInputRef, type: "file", onChange: handleFileChange, className: "kai-upload-input", style: { display: 'none' } }))),
        React.createElement(UploadList, { fileList: fileList, showProgress: showProgress, onRemove: handleRemove })));
};
export default Upload;
