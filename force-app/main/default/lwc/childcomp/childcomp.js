import { LightningElement,track,api} from 'lwc';

export default class Childcomp extends LightningElement {
    @track message;
   
    @api 
    changemessage(strString)
    {
       this.message= strString.toUpperCase();
    }


}