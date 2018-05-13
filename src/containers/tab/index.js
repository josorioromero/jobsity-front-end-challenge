import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, TabsContainer, Tabs, Tab } from 'react-md';
import { changeActiveTab } from '../../actions';

const TabContainer = ({ changeActiveTab }) => (
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
            primary
            iconClassName="fa fa-plus-circle"
        >
            Add Attribute
        </Button>
    </Fragment>
);

TabContainer.propTypes = {
    changeActiveTab: PropTypes.func
};

TabsContainer.defaultProps = {
    changeActiveTab: () => {}
};

const mapStateToProps = ({ tabs }) => ({
    tabsState: tabs
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeActiveTab
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
