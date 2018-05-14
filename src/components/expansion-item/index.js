// @vendors
import React from 'react';

// @components
import { ExpansionList, ExpansionPanel } from 'react-md';
import AttributesForm from '../attributes-form';

const ExpansionItem = () => (
    <ExpansionList className="md-cell md-cell--12">
        <ExpansionPanel
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
            <AttributesForm />
        </ExpansionPanel>
    </ExpansionList>
);

export default ExpansionItem;
