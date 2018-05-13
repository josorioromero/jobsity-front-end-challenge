// @vendors
import React from 'react';
import AceEditor from 'react-ace';

// @themes
import 'brace/mode/javascript';
import 'brace/theme/monokai';

const Editor = ({ json }) => (
    <AceEditor
        editorProps={{$blockScrolling: true}}
        mode="javascript"
        name="json-editor"
        readOnly
        theme="monokai"
        value={JSON.stringify(json, null, '\t')}
    />
);

export default Editor;
