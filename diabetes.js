const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');
let knn;
const csvFilePath = 'diabetes.csv'; // Data
const names = ['Insulin_1', 'Insulin_2', 'Insulin_3', 'Insulin_4', 'Target']; // For header

let seperationSize; // To seperate training and test data

let data = [], X = [], y = [];

let trainingSetX = [], trainingSetY = [], testSetX = [], testSetY = [];

csv({noheader: true, headers: names})
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        data.push(jsonObj); // Push each object to data Array
    })
    .on('done', (error) => {
        seperationSize = 0.9 * data.length;
        data = shuffleArray(data);
        console.log(data);
        dressData();
    });

function dressData() {

    let types = new Set(); // To gather UNIQUE classes

    data.forEach((row) => {
        types.add(row.type);
    });

    typesArray = [...types]; // To save the different types of classes.

    data.forEach((row) => {
        let rowArray, typeNumber;

        rowArray = Object.keys(row).map(key => parseFloat(row[key])).slice(0, 4);

        typeNumber = typesArray.indexOf(row.Target); // Convert type(String) to type(Number)

        X.push(rowArray);
        y.push(typeNumber);
    });

    trainingSetX = X.slice(0, seperationSize);
    trainingSetY = y.slice(0, seperationSize);
    testSetX = X.slice(seperationSize);
    testSetY = y.slice(seperationSize);

    train();
}

function train() {
    knn = new KNN(trainingSetX, trainingSetY, {k: 10});
    test();
}

function test() {
    const result = knn.predict(testSetX);
    const testSetLength = testSetX.length;
    const predictionError = error(result, testSetY);
    console.log(`Test Set Size = ${testSetLength} and number of Misclassifications = ${predictionError}`);
    predict();
}
/////////////
function error(predicted, expected) {
    let misclassifications = 0;
    for (var index = 0; index < predicted.length; index++) {
        if (predicted[index] !== expected[index]) {
            misclassifications++;
        }
    }
    return misclassifications;
}

function predict() {
    let temp = [];
    prompt.start();

    prompt.get(['Insulin in 1st month', 'Insulin in 2nd month', 'Insulin in 3rd month', 'Insulin in 4th month'], function (err, result) {
        if (!err) {
            for (var key in result) {
                temp.push(parseFloat(result[key]));
            }
            console.log(`With ${temp} -- Target =  ${knn.predict(temp) + getint(Math.random())}`);
        }
    });
}
function getint(i){
  if(i > 0.5){
    return 2;
  }
  return 1;
}

/**
 * https://stackoverflow.com/a/12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
