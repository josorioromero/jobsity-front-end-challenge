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

        return (
            <div className="attributes-form">
                <Grid>
                    <Cell size={4}>
                        <TextField
                            className={inputClassnames}
                            id="attribute-name-input"
                            label="Name"
                            lineDirection="center"
                            placeholder="Type a name"
                        />
                    </Cell>
                    <Cell size={8}>
                        <TextField
                            className={inputClassnames}
                            id="attribute-description-input"
                            label="Description"
                            lineDirection="center"
                            placeholder="Type a description"
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
                            placeholder="Type a default value"
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
                            placeholder="Select a data type"
                            simplifiedMenu
                        />

                        <SelectField
                            className="md-cell"
                            id="attribute-format-select"
                            label="Format"
                            menuItems={Object.values(FORMATS)}
                            placeholder="Select a format"
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