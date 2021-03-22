import {orederView} from './util/htmlTemplate.js';

export class OrderCheckMaker {
    constructor(jsonData, orderData, orderView) {
        this.jsonData = jsonData;
        this.orderData = orderData;
        this.orderView = orderView;
    }
    init() {
        let arr = [];
        for(let value in this.orderData) {
            arr.push(this.orderData[value]);
        }
        // console.log(this.orderView.name);
        this.displayOrderView(arr);
    }
    displayOrderView(arr) {
        this.orderView.innerHTML = orederView(arr[0],arr[10], arr[1], arr[2], arr[3], arr[5], arr[4], arr[6], arr[7], arr[8], arr[11],arr[9]);
    }
}