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

const TabsBoard = ({
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
                    <h3>Device Info</h3>
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
    changeActiveTab: PropTypes.func.isRequired,
    createNewAttribute: PropTypes.func.isRequired
};

export default TabsBoard;
