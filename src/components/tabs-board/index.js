// @vendors
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// @constants
import { CATEGORIES } from '../../constants';

// @components
import {
    Button,
    Tab,
    Tabs,
    TabsContainer
} from 'react-md';
import AttributesList from '../attributes-list';

// @utils
import { filterAttributesList } from '../../utils';

const TabsBoard = ({
    attributes,
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
                    <AttributesList
                        key={1}
                        attributes={filterAttributesList(
                            attributes,
                            CATEGORIES.DEVICE_INFO
                        )}
                    />
                </Tab>
                <Tab label="Sensors">
                    <AttributesList
                        key={2}
                        attributes={filterAttributesList(
                            attributes,
                            CATEGORIES.SENSORS
                        )}
                    />
                </Tab>
                <Tab label="Settings">
                    <AttributesList
                        key={3}
                        attributes={filterAttributesList(
                            attributes,
                            CATEGORIES.SETTINGS
                        )}
                    />
                </Tab>
                <Tab label="Commands">
                    <AttributesList
                        key={4}
                        attributes={filterAttributesList(
                            attributes,
                            CATEGORIES.COMMANDS
                        )}
                    />
                </Tab>
                <Tab label="Metadata">
                    <AttributesList
                        key={5}
                        attributes={filterAttributesList(
                            attributes,
                            CATEGORIES.METADATA
                        )}
                    />
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
    attributes: PropTypes.array,
    changeActiveTab: PropTypes.func.isRequired,
    createNewAttribute: PropTypes.func.isRequired
};

TabsBoard.defaultProps = {
    attributes: []
};

export default TabsBoard;
