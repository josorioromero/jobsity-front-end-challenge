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

        this.buildTabs = this.buildTabs.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onDeleteItemClick = this.onDeleteItemClick.bind(this);
    }

    buildTabs() {
        const { attributes } = this.props;
        const tabList = Object.keys(CATEGORIES);

        return tabList.map((category, index) => (
            <Tab key={index} label={category}>
                <AttributesList
                    key={index}
                    attributes={filterAttributesList(
                        attributes,
                        category
                    )}
                    onDeleteClick={this.onDeleteItemClick}
                />
            </Tab>
        ));
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
                        { this.buildTabs() }
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
