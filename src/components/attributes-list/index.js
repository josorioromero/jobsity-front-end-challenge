// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import { ExpansionList, ExpansionPanel } from 'react-md';
import AttributesForm from '../attributes-form';

const AttributesList = ({ attributes }) => (
    <ExpansionList className="md-cell md-cell--12">
        {
            attributes.map((attribute, index) => (
                <ExpansionPanel
                    key={index}
                    closeOnCancel={false}
                    label="Main label"
                    secondaryLabel="Secondary label"
                    saveProps={{
                        flat: false,
                        raised: true,
                        iconChildren: 'save'
                    }}
                    cancelProps={{
                        flat: false,
                        onClick: () => alert(),
                        raised: true,
                        iconChildren: 'cancel'
                    }}
                >
                    <AttributesForm key={index} attribute={attribute} />
                </ExpansionPanel>
            ))
        }
    </ExpansionList>
);

AttributesList.propTypes = {
    attributes: PropTypes.array
};

AttributesList.defaultProps = {
    attributes: []
};

export default AttributesList;
