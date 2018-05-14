// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// @components
import TabsBoard from '../../components/tabs-board';

// @actions
import {
    changeActiveTab,
    createNewAttribute,
    deleteAttribute
} from '../../actions';

const TabContainer = props => <TabsBoard {...props} />

TabContainer.propTypes = {
    attributes: PropTypes.array
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changeActiveTab,
    createNewAttribute,
    deleteAttribute
}, dispatch);

export default connect(null, mapDispatchToProps)(TabContainer);
