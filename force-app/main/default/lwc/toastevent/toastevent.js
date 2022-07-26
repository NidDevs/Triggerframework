import { LightningElement } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Toastevent extends LightningElement {
   
    handleClick()
    {
        this.ShowToast();
    }
    ShowToast()
    {
        const a = new ShowToastEvent({
            title: 'This The demo', //title of the toast event
            message: 'Developer',//what message has to be shown to the user
            variant: 'success', //variant used to for the color of Toast(success;green, warning: orange, error: red)
        })
        this.dispatchEvent(a);
    }

}