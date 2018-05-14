// @vendors
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// @components
import TabsBoard from '../../components/tabs-board';

// @actions
import { changeActiveTab, createNewAttribute } from '../../actions';

const TabContainer = props => <TabsBoard {...props} />

const mapDispatchToProps = dispatch => bindActionCreators({
    changeActiveTab,
    createNewAttribute
}, dispatch);

export default connect(null, mapDispatchToProps)(TabContainer);
