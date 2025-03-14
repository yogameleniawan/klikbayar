import React from 'react'
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import plugins from 'suneditor/src/plugins'
import '../../../css/custom.css';

const EDITOR_CONFIG = {
    plugins: plugins,
    height: 200,
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/',
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio'],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
    ]
}

const TextEditor = ({
    onChange,
    defaultValue
}) => {
    return (
        <SunEditor onChange={onChange} setOptions={EDITOR_CONFIG} defaultValue={defaultValue} />
    )
}

export default TextEditor