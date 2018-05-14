// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// @actions
import { loadDefaultAttributes } from './actions';

// components
import { Cell, Grid } from 'react-md';
import TabContainer from './containers/tab';
import Editor from './components/editor';

// styles
import './App.css';

class App extends Component {
    componentDidMount() {
        const { loadDefaultAttributes } = this.props;
        loadDefaultAttributes();
    }

    render() {
        const { attributesState } = this.props;
        const attributesList = attributesState.get('attributesList').toJS();
        return (
            <div className="App">
                <Grid>
                    <Cell size={8}>
                        <TabContainer attributes={attributesList} />
                    </Cell>
                    <Cell size={4}>
                        <Editor json={attributesList} />
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
