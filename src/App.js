import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDefaultAttributes } from './actions';

import { Cell, Grid } from 'react-md';

import TabContainer from './containers/tab';

import Editor from './components/editor';

import './App.css';

class App extends Component {
    componentDidMount() {
        const { loadDefaultAttributes } = this.props;
        loadDefaultAttributes();
    }

    render() {
        const { attributesState } = this.props;
        const json = attributesState.get('attributesList').toJS();
        return (
            <div className="App">
                <Grid>
                    <Cell size={8}>
                        <TabContainer />
                    </Cell>
                    <Cell size={4}>
                        <Editor json={json} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    attributesState: PropTypes.object,
    loadDefaultAttributes: PropTypes.func
};

App.defaultProps = {
    attributesState: {},
    loadDefaultAttributes: () => {}
};

const mapStateToProps = ({ attributes }) => ({
    attributesState: attributes
});

const mapDispatchToProps = dispatch => bindActionCreators({
    loadDefaultAttributes
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
