import { LightningElement, track } from 'lwc';

export default class ParentFileUploader extends LightningElement {
     @track imgUrl;

    get acceptedFormats() {
        return ['.pdf','.png','.jpg'];
    }

    handleUploadFinished(event){
        const uploadedFiles = event.detail.files;
        if(uploadedFiles.length > 0){
            console.log("images data is --> "+uploadedFiles);
            console.log("images data is --> "+JSON.stringify(uploadedFiles));
            console.log("images data is --> "+uploadedFiles[0].documentId);
            this.imgUrl = '/sfc/servlet.shepherd/document/download/'+uploadedFiles[0].documentId;
            console.log("Image url is --> "+this.imgUrl);
        }
        // console.log(uploadedFiles[0].name);
    }

}