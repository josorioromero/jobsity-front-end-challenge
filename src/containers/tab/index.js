import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, TabsContainer, Tabs, Tab } from 'react-md';
import { changeActiveTab, createNewAttribute } from '../../actions';

const TabContainer = ({
    changeActiveTab,
    createNewAttribute,
    tabsState
}) => {
    return (
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
};

const mapStateToProps = ({ tabs }) => ({
    tabsState: tabs
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeActiveTab,
    createNewAttribute
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
