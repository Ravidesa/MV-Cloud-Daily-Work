import { LightningElement, track, wire } from 'lwc';
import conRec from '@salesforce/apex/CreateContactRecordController.createConRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateContactRecLWC extends LightningElement {
    @track fName; 
    @track lName; 
    @track phone; 
    @track leadSource; 

    inputChange(event){
        const fieldName = event.target;
        if(fieldName.name =='fName'){
            this.fName= fieldName.value;
        }else if(fieldName.name == 'lName'){
            this.lName= fieldName.value;
        }else if(fieldName.name == 'phone'){
            this.phone = fieldName.value;
        }else if(fieldName.name == 'leadSource'){
            this.leadSource = fieldName.value;
        }

    }

    handleClick(){
         var contact=
        {   
            FirstName: this.fName,
            LastName: this.lName,
            Phone: this.phone,
            LeadSource: this.leadSource
        };

        conRec({con: contact})
        .then(res => {
            this.phone = '';
            this.fName = '';
            this.lName = '';
            this.leadSource = '';

            const toast = new ShowToastEvent({
                title: 'Success',
                message: 'Contact Record is Saved!',
                variant: 'success',
            })

            this.dispatchEvent(toast);

        })
        .catch(error =>{
            this.error = error.message;
            // alert(JSON.stringify(error))
            console.log("Error : "+JSON.stringify(error));
            // console.log("Only error : "+error.status);

            const toast = new ShowToastEvent({
                title: 'Error',
                message: 'Something went wrong!',
                variant: 'error'
            })

            this.dispatchEvent(toast);      
        })
    }

    get conName()
    {
        return this.fName + ' ' + this.lName + ' ' + this.phone + ' ' + this.leadSource;
    }
}