// @vendors
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// @components
import {
    Button,
    Tab,
    Tabs,
    TabsContainer
} from 'react-md';
import ExpansionItem from '../expansion-item';

const TabsBoard = ({
    attributesList,
    changeActiveTab,
    createNewAttribute
}) => (
    <Fragment>
        <TabsContainer
            defaultTabIndex={0}
            component="div"
            panelClassName="md-grid"
            colored
            onTabChange={activeTabIndex => changeActiveTab(activeTabIndex)}
        >
            <Tabs tabId="simple-tab">
                <Tab label="Device Info">
                    <ExpansionItem />
                </Tab>
                <Tab label="Sensors">
                    <h3>Sensors</h3>
                </Tab>
                <Tab label="Settings">
                    <h3>Settings</h3>
                </Tab>
                <Tab label="Commands">
                    <h3>Commands</h3>
                </Tab>
                <Tab label="Metadata">
                    <h3>Metadata</h3>
                </Tab>
            </Tabs>
        </TabsContainer>

        <Button
            flat
            iconClassName="fa fa-plus-circle"
            onClick={() => createNewAttribute()}
            primary
        >
            Add Attribute
        </Button>
    </Fragment>
);

TabsBoard.propTypes = {
    attributesList: PropTypes.array,
    changeActiveTab: PropTypes.func.isRequired,
    createNewAttribute: PropTypes.func.isRequired
};

TabsBoard.defaultProps = {
    attributesList: []
};

export default TabsBoard;
