import  KNN from 'ml-knn';
let knn;

const data = [[3.3,265,233,32], [2.3,245,345,45], [4,234,234,21], [3.5,232,134,23], [5.4,232,256,45], [3.3,256,150,23], [5.6,234,220,23], [4.5,232,140,31], [3.2,290,232,25]];
const predictions = [0, 0, 0, 1, 1, 1,0,1,0];

export default function train(predictset) {
    knn = new KNN(data, predictions, {k: 7});
    return predict(predictset);
}


function predict(temp) {
  return knn.predict(temp);
}
