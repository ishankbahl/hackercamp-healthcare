const KNN = require('ml-knn');
let knn;

let predictset = [3.3,265,233,32];

let data = [[3.3,265,233,32], [2.3,245,345,45], [4,234,234,21], [3.5,232,134,23], [5.4,232,256,45], [3.3,256,150,23], [5.6,234,220,23], [4.5,232,140,31], [3.2,290,232,25]];
var predictions = [0, 0, 0, 1, 1, 1,0,1,0];

train(data,predictions);

function train(X,y) {
    knn = new KNN(X, y, {k: 7});
    predict(predictset);
}


function predict(temp) {
  console.log(knn.predict(temp));
}
