import { LightningElement, api } from 'lwc';

export default class extends LightningElement {
    counter = 0;
    @api formfields;
    increment() {
        this.counter++;
    }
    decrement() {
        this.counter--;
    }

    submit() {
        this.dispatchEvent(
          new CustomEvent('submit', { bubbles: true, composed: true })
        );
      }

}
