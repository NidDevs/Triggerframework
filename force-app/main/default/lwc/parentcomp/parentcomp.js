import { LightningElement } from 'lwc';

export default class Parentcomp extends LightningElement {
    handleChangeEvent(event)
    {
        this.template.querySelector('c-childcomp').changemessage(event.target.value);
    }
}