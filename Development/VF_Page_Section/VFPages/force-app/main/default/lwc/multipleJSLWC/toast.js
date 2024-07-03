import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const toastJS = (title, msg) => {
    console.log("Title is -->"+title+" and msg is --> "+msg);
    const toastEvent = new ShowToastEvent({
        title: title,
        message: msg,
        variant: 'success',
    })
    console.log("js file called!!");
    this.dispatchEvent(toastEvent);
}

export {toastJS};