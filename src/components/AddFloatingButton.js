import React from 'react';
import {withStyles} from 'material-ui/styles';
import AddIcon from 'material-ui-icons/Add';
import Button from 'material-ui/Button';
import Dialog, {DialogContent, DialogTitle} from 'material-ui/Dialog';
import TransactionFrom from './TransactionForm';
import {connect} from 'react-redux';
import {startAddTransaction} from '../actions/transactions';

const styles = theme => ({
    floatingButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed'
    },
    dialogContent:{
        textAlign: 'center',
        maxWidth:400,
    },
    dialogTitle:{
        textAlign: 'center'        
    }
});

class AddFloatingButton extends React.Component {
    state = {
        open: false
    };

    onSubmit = (transaction) => {
        this
            .props
            .startAddTransaction(transaction);
        this.handleClose();
    };

    handleClickFloatingButton = event => {
        this.setState({open: true});
    };
    handleClose = () => {
        this.setState({open: false});
    };
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Button
                    fab
                    color="primary"
                    aria-label="add"
                    className={classes.floatingButton}
                    onClick={this.handleClickFloatingButton}>
                    <AddIcon/>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle className={classes.dialogTitle}   id="form-dialog-title">Add a transaction</DialogTitle>
                    <DialogContent
                    className={classes.dialogContent}                
                    >
                        <TransactionFrom onSubmit={this.onSubmit}/>
                    </DialogContent>
                    
                </Dialog>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddTransaction: (transaction) => dispatch(startAddTransaction(transaction))
});

export default connect(undefined, mapDispatchToProps) (withStyles(styles)(AddFloatingButton));