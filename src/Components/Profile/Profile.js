import React, { Component } from "react";
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Place from "material-ui-icons/Place";

class Profile extends Component{

    render() {

        const { classes } = this.props;

        return (
            <div className={ classes.list } >
                <Card className={ classes.card } >
                    <div className={ classes.imageWrapper } >
                        <CardMedia 
                            className={ classes.cover }
                            image="https://material-ui-next.com/static/images/uxceo-128.jpg"
                            title="Adelle Charles"
                        />
                    </div>
                    <CardContent className={ classes.details } >
                        <Typography type="headline" component="h2">
                            &nbsp;Adelle Charles
                        </Typography>
                        <Typography component="p">
                            <Place />
                            &nbsp;New Delhi, Delhi
                        </Typography>
                        <Typography component="p" className={ classes.margin  }>
                            &nbsp;Age: 45
                        </Typography>
                        <Typography component="p" className={ classes.margin } >
                            &nbsp;Weight: 80
                        </Typography>
                        <Typography component="p" className={ classes.margin } >
                            &nbsp;Alergies: None
                        </Typography>
                        <Typography component="p" className={ classes.margin } >
                            &nbsp;Immunization Status: Immune
                        </Typography>
                        <Typography component="p" className={ classes.margin } >
                            &nbsp;Medical History: Diabetes, High Blood Pressure
                        </Typography>
                        <Typography component="p" className={ classes.margin } >
                            &nbsp;Medication: Glucophage, ACE inhibitor, Diuretic, Beta blocker, Antihypertensive drug
                        </Typography>
                        
                    </CardContent>
                </Card>
            </div>
        );
    }

}

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    card: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "15px",
        marginTop: "15px",
    },
    cover: {
        minWidth: "275px",
        minHeight: "165px",
        overflow: "hidden",
        backgroundSize: "contain",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        width: "535px",
        height: "210px",
        paddingRight: "15px",
        paddingLeft: "40px",
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    imageWrapper: {
        margin: "auto",
    },
    list: {
        paddingTop: "40px",
        paddingBottom: "400px",
        backgroundColor: "#EEEEEE",
        paddingRight: "130px",
        paddingLeft: "130px",
    },
    margin: {
        marginLeft: 5,
        marginTop: 5
    }
}

export default withStyles(styles)(Profile);