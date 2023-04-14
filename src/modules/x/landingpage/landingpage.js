import { LightningElement, track } from 'lwc';

let id = 0;
export default class extends LightningElement {
  @track formfields;

  connectedCallback() {
    this.formfields=[{item: "fname"}, {item: "lname"}];
  }

  onsubmit() {
    this.formfields.push({item: `item${id++}`});
  }

 
}
