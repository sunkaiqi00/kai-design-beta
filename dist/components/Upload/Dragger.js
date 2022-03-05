import classNames from 'classnames';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var classes = classNames("kai-upload-dragger", {
        'is-dragover': dragOver
    });
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    return (React.createElement("div", { className: classes, onDragOver: function (e) { handleDrag(e, true); }, onDragLeave: function (e) { handleDrag(e, false); }, onDrop: handleDrop }, children || React.createElement("div", { className: 'kai-upload-dragger-content' },
        React.createElement(UploadOutlined, null),
        React.createElement("div", null, "Upload"))));
};
export default Dragger;
