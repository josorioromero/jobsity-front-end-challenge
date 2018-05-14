// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// @constants
import { DATA_TYPES, FORMATS } from '../../constants';

// @components
import {
    Cell,
    Grid,
    SelectField,
    TextField
} from 'react-md';

// @styles
import './style.css';

class AttributesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            attribute: this.props.attribute
        }
    };

    render() {
        const inputClassnames = classnames(
            'attributes-form__input',
        );

        const { attribute } = this.state;

        return (
            <div className="attributes-form">
                <Grid>
                    <Cell size={4}>
                        <TextField
                            className={inputClassnames}
                            id="attribute-name-input"
                            label="Name"
                            lineDirection="center"
                            onChange={() => {}}
                            placeholder="Type a name"
                            value={attribute.name}
                        />
                    </Cell>
                    <Cell size={8}>
                        <TextField
                            className={inputClassnames}
                            id="attribute-description-input"
                            label="Description"
                            lineDirection="center"
                            onChange={() => {}}
                            placeholder="Type a description"
                            value={attribute.description}
                        />
                    </Cell>
                </Grid>

                <Grid>
                    <Cell size={4}>
                        <TextField
                            className={inputClassnames}
                            disabled
                            id="attribute-resource-type-input"
                            label="Device Resource Type"
                            lineDirection="center"
                            value="Default Value"
                        />
                    </Cell>
                    <Cell size={8}>
                        <TextField
                            className={inputClassnames}
                            id="attribute-default-value-input"
                            label="Default Value"
                            lineDirection="center"
                            onChange={() => {}}
                            placeholder="Type a default value"
                            value={attribute.defaultValue}
                        />
                    </Cell>
                </Grid>

                <Grid>
                    <Cell size={12}>
                        <SelectField
                            className="md-cell"
                            id="attribute-data-type-select"
                            label="Data Type"
                            menuItems={Object.values(DATA_TYPES)}
                            onChange={() => {}}
                            placeholder="Select a data type"
                            value={attribute.dataType}
                        />

                        <SelectField
                            className="md-cell"
                            id="attribute-format-select"
                            label="Format"
                            menuItems={Object.values(FORMATS)}
                            onChange={() => {}}
                            placeholder="Select a format"
                            value={attribute.format}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

AttributesForm.propTypes = {
    attribute: PropTypes.object
};

export default AttributesForm;