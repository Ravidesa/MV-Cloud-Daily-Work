import { LightningElement, api, track } from 'lwc';

export default class FileUploadLWC extends LightningElement {
    @api recordId;

    @track pageNo;
    @track pageSize;
    @track totalRecords;

    @track files;

    get acceptedFormats() {
        return ['.pdf','.png','.jpg'];
    }

    handleUploadFinished(event){
        console.log("record is --> "+this.recordId);
        const uploadedFiles = event.detail.files;
        console.log(uploadedFiles[0].name);
    }
}