// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
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

Editor.propTypes = {
    json: PropTypes.string
};

Editor.defaultProps = {
    json: ''
};

export default Editor;
