import React, { Component } from "react";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
  } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from "material-ui/styles";

class DialogForm extends Component{
    
    constructor(props) {

        super(props);

        this.state = {
            f1: null,
            f2: null,
            f3: null,
            f4: null,
        }

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.save = this.save.bind(this);
        this.changeField = this.changeField.bind(this);

    }

    handleRequestClose() {
        this.props.close();
    }

    save() {
        if (this.props.fields == "Diabetes"){

        }
        else if (this.props.fields == "Cardio Vascular"){
            
        }
        this.handleRequestClose();

    }

    changeField(e, index) {

        switch(index) {
            case 0:
                this.setState({ f1: e.target.value});
                return;
            case 1:
                this.setState({ f2: e.target.value});
                return;
            case 2:
                this.setState({ f4: e.target.value });
                return;
            case 3:
                this.setState({ f5: e.target.value });
                return;
            default:
                return;

        }

    }

    render() {

        const { open, close, classes, fields } = this.props;

        return (
            <Dialog
                open={ open }
                onRequestClose={ close } >
                <DialogTitle>{ fields[0][0] }</DialogTitle>
                <DialogContent>
                {
                    fields[1].map((field, index) => (
                    <TextField
                        autoFocus
                        key={ index }
                        onChange={ (e) => this.changeField(e, index) }
                        margin="dense"
                        label={ field }
                        fullWidth
                    />))
                }
                </DialogContent>
                <DialogActions>
                    <Button onClick={ this.handleRequestClose } color="accent" className={ classes.button } >
                        Cancel
                    </Button>
                    <Button onClick={ this.save } color="primary" className={ classes.button } >
                        Save
                    </Button>
                    <input accept="application/pdf" onChange={(event)=>{console.log(event)}} className={classes.input} id="file" multiple type="file" />
                    <label htmlFor="file">
                        <Button raised component="span" className={classes.button}>
                            Upload
                        </Button>
                    </label>
                </DialogActions>
            </Dialog>
        );
    }

}

const styles = {
    input: {
        display: "none",
    },
    button: {
        margin: 5,
    }
}

export default withStyles(styles)(DialogForm);