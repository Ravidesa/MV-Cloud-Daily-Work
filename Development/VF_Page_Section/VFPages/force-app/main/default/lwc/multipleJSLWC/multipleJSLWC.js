import { LightningElement } from 'lwc';
import { toastJS } from './toast';
import {demo} from './SecondsJSFile';

export default class MultipleJSLWC extends LightningElement {
    
    handleClick(){
        demo();
        toastJS('Success', 'you have clicked the button');
    }
}