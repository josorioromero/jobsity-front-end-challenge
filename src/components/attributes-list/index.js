// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// @components
import { ExpansionList, ExpansionPanel } from 'react-md';
import AttributesForm from '../attributes-form';

// @style
import './style.css';

class AttributesList extends PureComponent {
    render() {
        const { attributes, onDeleteClick } = this.props;

        return (
            <ExpansionList className="expansion-list md-cell md-cell--12">
                {
                    attributes.map((attribute, index) => (
                        <ExpansionPanel
                            key={index}
                            closeOnCancel={false}
                            label={`Name: ${attribute.name}`}
                            secondaryLabel={`Description: ${attribute.description}`}
                            saveProps={{
                                className: 'expansion-list__save-btn'
                            }}
                            cancelProps={{
                                flat: false,
                                label: 'Delete',
                                raised: true,
                                iconChildren: 'delete'
                            }}
                            onCancel={() => onDeleteClick(attribute.id, attribute.name)}
                        >
                            <AttributesForm key={index} attribute={attribute} />
                        </ExpansionPanel>
                    ))
                }
            </ExpansionList>
        )
    }
};

AttributesList.propTypes = {
    attributes: PropTypes.array,
    onDeleteClick: PropTypes.func
};

AttributesList.defaultProps = {
    attributes: [],
    onDeleteClick: () => {}
};

export default AttributesList;
