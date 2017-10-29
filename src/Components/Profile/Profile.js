import React, { Component } from "react";
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Place from "material-ui-icons/Place";
import Paper from "material-ui/Paper";
import { Line, Pie } from "react-chartjs-2";

const chartData1 = {
      labels: ["January", "February", "March", "April", "May", "June", "July","Aug","Sept","Oct","Nov","Dec"],
      datasets: [{
          label: "Insulin Level",
          borderColor: 'rgb(0, 0, 0)',
          data: [100,
          200,
          150,
          100,
          60,
          100,
          150,
          70,
          120,
          100,
          300,
          60] ,
}]};

const chartData2 = {
      labels: ["<100", "<200", "<300"],
      datasets: [{
        label: "Insulin",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [4,7,1]
      }]
};

const chartoptions2 = {
  title: {
    display: true,
    text: 'Insulin Frequency'
  }
};

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [{
      label: "LDL",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(225,0,0,0.4)",
      borderColor: "red", // The main line color
      borderCapStyle: 'square',
      borderDash: [5,15], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [233, 345, 234, 134, 256, 150, 220, 232 , 567, 232,230,250]    }, {
      label: "HDL",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(167,105,0,0.4)",
      borderColor: "rgb(167, 105, 0)",
      borderCapStyle: 'butt',
      borderDash: [5,15],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "black",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      data: [32, 45, 21, 23, 45, 23, 23, 31, 25, 55, 44,22],
      spanGaps: false,
    },
    {
    label: "CRP",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(167,125,100,0.4)",
    borderColor: "rgb(167, 125, 100)",
    borderCapStyle: 'butt',
    borderDash: [5,15],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "white",
    pointBackgroundColor: "white",
    pointBorderWidth: 1,
    pointHoverRadius: 8,
    pointHoverBackgroundColor: "red",
    pointHoverBorderColor: "black",
    pointHoverBorderWidth: 2,
    pointRadius: 4,
    pointHitRadius: 10,
    // notice the gap in the data and the spanGaps: false
    data: [3.3, 2.3, 4, 3.5, 4.5, 5.4, 3.3, 5.6, 4.5, 3.2, 2.5],
    spanGaps: false,
  },
  {
  label: "Total_Cholestrol",
  fill: false,
  lineTension: 0.1,
  backgroundColor: "rgba(255,255,30,0.4)",
  borderColor: "rgb(255, 255, 30)",
  borderCapStyle: 'butt',
  borderDash: [5,15],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: "white",
  pointBackgroundColor: "black",
  pointBorderWidth: 1,
  pointHoverRadius: 8,
  pointHoverBackgroundColor: "black",
  pointHoverBorderColor: "red",
  pointHoverBorderWidth: 2,
  pointRadius: 4,
  pointHitRadius: 10,
  // notice the gap in the data and the spanGaps: false
  data: [265, 245, 235, 233, 232, 290, 239, 220, 121, 236, 150],
  spanGaps: false,
}

  ]
};

const chartOptions = {
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                     display: true,
                     labelString: 'Intensity',
                     fontSize: 20
                  }
            }]
        }
};

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
                            &nbsp;Medication: Glucophage, ACE inhibitor, Diuretic, Beta blocker, Antihypertensive
                        </Typography>
                    </CardContent>
                </Card>
                <Paper className={ classes.paper } elevation={4}>
                  <Typography type="headline" component="h3">
                    Cardio Vascular
                  </Typography>
                  <Line data={chartData} options={chartOptions} width="600" height="250" />
                </Paper>
                <Paper className={ classes.paper } elevation={4}>
                  <Typography type="headline" component="h3">
                    Insulin Level
                  </Typography>
                  <Line data={chartData1} width="600" height="250" />
                </Paper>
                <Paper className={ classes.paper } elevation={4}>
                  <Typography type="headline" component="h3">
                    Insulin Level Frequency
                  </Typography>
                  <Pie data={chartData2} options={ chartoptions2 } width="600" height="250" />
                </Paper>
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
    paper: {
      marginBottom: "15px",
      paddingTop: "10px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "10px",
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
    },
}

export default withStyles(styles)(Profile);
