({
    dragStart : function(component, event, helper) {
        event.dataTransfer.setData('text/plain', event.target.id);
    },
    
    dragStartAcc1 : function(component, event, helper) {
        event.dataTransfer.setData('text/plain', event.target.id);
        console.log("ID of account is --> "+event.target.id);
    },

    dragOver : function(component, event, helper){
        event.preventDefault();
    },

    drops : function(component, event, helper){
        const id = event.dataTransfer.getData('text');
        console.log("Id is --> "+id);
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
    },

    drops2 : function(component, event, helper){
        const selectedConId = event.dataTransfer.getData('text');
        console.log("selected contact id is --> "+selectedConId);
        // const draggableElement = document.getElementById(selectedConId);
        // const dropzone = event.target;

        helper.updatRecord(component, selectedConId);
        // dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
    },

    getSearchRecordsAcc1 : function(component, event, helper){
        helper.fetchContactsForAccoount1(component);
    },

    getSearchRecordsAcc2 : function(component, event, helper){
        helper.fetchContactsForAccoount2(component);
    },
    
})
