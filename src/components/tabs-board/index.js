// @vendors
import React, { Fragment, PureComponent } from 'react';
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
import ConfirmationDialog from '../confirmation-dialog';

// @utils
import { filterAttributesList } from '../../utils';

class TabsBoard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            attributeId: null,
            attributeName: '',
            isConfirmationVisible: false
        }
        this.onDeleteItemClick = this.onDeleteItemClick.bind(this);
    }

    onDeleteItemClick(attributeId, attributeName) {
        this.setState(prevState => ({
            attributeId,
            attributeName,
            isConfirmationVisible: !prevState.isConfirmationVisible
        }));
    }

    onConfirmClick(attributeId) {
        const { deleteAttribute } = this.props;
        deleteAttribute(attributeId);
        this.setState(prevState => ({
            isConfirmationVisible: !prevState.isConfirmationVisible
        }));
    }

    onCancelClick() {
        this.setState({
            isConfirmationVisible: false
        });
    }

    render() {
        const {
            attributes,
            changeActiveTab,
            createNewAttribute
        } = this.props;

        const {
            attributeId,
            attributeName,
            isConfirmationVisible
        } = this.state;

        return(
            <Fragment>
                <ConfirmationDialog
                    attributeName={attributeName}
                    onCancel={() => this.onCancelClick()}
                    onConfirm={() => this.onConfirmClick(attributeId)}
                    visible={isConfirmationVisible}
                />
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
                                onDeleteClick={this.onDeleteItemClick}
                            />
                        </Tab>
                        <Tab label="Sensors">
                            <AttributesList
                                key={2}
                                attributes={filterAttributesList(
                                    attributes,
                                    CATEGORIES.SENSORS
                                )}
                                onDeleteClick={this.onDeleteItemClick}
                            />
                        </Tab>
                        <Tab label="Settings">
                            <AttributesList
                                key={3}
                                attributes={filterAttributesList(
                                    attributes,
                                    CATEGORIES.SETTINGS
                                )}
                                onDeleteClick={this.onDeleteItemClick}
                            />
                        </Tab>
                        <Tab label="Commands">
                            <AttributesList
                                key={4}
                                attributes={filterAttributesList(
                                    attributes,
                                    CATEGORIES.COMMANDS
                                )}
                                onDeleteClick={this.onDeleteItemClick}
                            />
                        </Tab>
                        <Tab label="Metadata">
                            <AttributesList
                                key={5}
                                attributes={filterAttributesList(
                                    attributes,
                                    CATEGORIES.METADATA
                                )}
                                onDeleteClick={this.onDeleteItemClick}
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
        )
    }
}

TabsBoard.propTypes = {
    attributes: PropTypes.array,
    changeActiveTab: PropTypes.func.isRequired,
    createNewAttribute: PropTypes.func.isRequired,
    deleteAttribute: PropTypes.func.isRequired
};

TabsBoard.defaultProps = {
    attributes: []
};

export default TabsBoard;
