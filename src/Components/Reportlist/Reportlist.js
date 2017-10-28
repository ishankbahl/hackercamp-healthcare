import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemText } from "material-ui/List";

import { DialogForm } from "../../Components";

const form = {
    diabetes: [["Diabetes"], ["Fasting", "Non Fasting", "Insulin Level", "Cholesterol"]],
    bloodPressure: [["Blood Pressure"],["Systolic Level", "Diastolic Level", "Cholestrol", "Hemoglobin"]],
    cardioVascular: [["Cardio Vascular"], ["CRP", "Total Cholestrol", "LDL", "HDL"]],
    asthma: [["Asthma"], ["Fasting", "Non Fasting", "Insulin Level", "Cholesterol"]],
    cancer: [["Cancer"], ["Fasting", "Non Fasting", "Insulin Level", "Cholesterol"]],
};

class Reportlist extends Component{

    constructor(props) {

        super(props);

        this.state = {
            open: false,
            formFields:[[],[]],
        }

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);

    }

    openDialog(fields) {

        this.setState({ formFields: form[fields], open: true });

    }

    closeDialog() {

        this.setState({ open: false });

    }

    render() {

        const { classes } = this.props;
        const { open, formFields } = this.state;

        return(
            <div className={ classes.list } >
                <Typography type="headline" className={ classes.title } >
                    &nbsp;Test Reports
                </Typography>
                <Divider className={ classes.divider } />
                <List className={ classes.reports } >
                    <ListItem button onClick={ () => this.openDialog("diabetes") } >
                        <ListItemText primary="Diabetes" />
                    </ListItem>
                    <ListItem button onClick={  () => this.openDialog("bloodPressure") }>
                        <ListItemText primary="Blood Pressure" />
                    </ListItem>
                    <ListItem button onClick={  () => this.openDialog("cardioVascular") }>
                        <ListItemText primary="Cardio Vascular" />
                    </ListItem>
                    <ListItem button onClick={  () => this.openDialog("asthma") }>
                        <ListItemText primary="Asthma" />
                    </ListItem>
                    <ListItem button onClick={  () => this.openDialog("cancer") }>
                        <ListItemText primary="Cancer" />
                    </ListItem>
                </List>
                <DialogForm open={ open } fields={ formFields } close={ this.closeDialog } />
            </div>
        );

    }

}

const styles = {
    list: {
        paddingTop: "40px",
        paddingBottom: "400px",
        backgroundColor: "#EEEEEE",
        paddingRight: "130px",
        paddingLeft: "130px",
    },
    title: {
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 19,
        fontWeight: 400,
        letterSpacing: 1.4,
        color: "#212121"
    },
    reports: {
        width: '100%',
        background: "#FFF",
    },
    divider: {
        marginBottom: 8
    }
}

export default withStyles(styles)(Reportlist);