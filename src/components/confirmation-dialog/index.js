import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer } from 'react-md';

class ConfirmationDialog extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            attributeName: this.props.attributeName,
            visible: this.props.visible
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            attributeName: nextProps.attributeName,
            visible: nextProps.visible
        });
    }

    render() {
        const {
            attributeName,
            visible
        } = this.state;
        const {
            onCancel,
            onConfirm
        } = this.props;
        const actions = [];
        actions.push({
            secondary: true,
            children: 'Cancel',
            onClick: onCancel
        });
        actions.push(<Button flat primary onClick={onConfirm}>Confirm</Button>);

        return (
            <div>
                <DialogContainer
                    id="simple-action-dialog"
                    visible={visible}
                    onHide={() => this.onHide}
                    actions={actions}
                    title="Are you sure?"
                >
                    <p>{`The attribute ${attributeName} will be deleted if you confirm`}</p>
                </DialogContainer>
            </div>
        );
    }
};

ConfirmationDialog.propTypes = {
    attributeName: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    visible: PropTypes.bool
};

ConfirmationDialog.defaultProps = {
    attributeName: '',
    onCancel: () => {},
    onConfirm: () => {},
    visible: false
};

export default ConfirmationDialog;
