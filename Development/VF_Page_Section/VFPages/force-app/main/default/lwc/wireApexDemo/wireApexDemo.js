import { LightningElement, api, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactsForLWC.getAllContacts';

export default class WireApexDemo extends LightningElement {
    @api recordId;

    @wire(getContacts, {accId : '$recordId'})
    contacts;

}