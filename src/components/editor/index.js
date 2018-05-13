import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

const Editor = ({ json }) => (
    <AceEditor
        mode="javascript"
        theme="monokai"
        name="json-editor"
        editorProps={{$blockScrolling: true}}
        value={JSON.stringify(json, null, '\t')}
    />
);

export default Editor;
