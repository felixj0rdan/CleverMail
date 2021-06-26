import React,{ useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import "./Editor.css";

function Editor() {
    const [value, setValue] = useState("");

    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        setValue(data)
    }
    return (
        <>
        <div >
            <CKEditor  editor={ClassicEditor} onChange={handleOnChange} />
        </div>
        {/* <div>
            {parse(value)}
        </div> */}
        </>
    )
}

export default Editor
