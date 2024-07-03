({
    saveData : function(component, event, helper) {
        var startTime = component.get("v.eventData.StartDateTime");
        console.log("Start Time in helper is --> "+startTime);

        var endTime = component.get("v.eventData.EndDateTime");
        console.log("End Time in helper is --> "+endTime);

        var eventName = component.get("v.eventData.Subject");
        console.log("Event Subject in helper is --> "+eventName);
        
        var action = component.get("c.save");

        action.setParams({
            acc : component.get("v.accountData"),
            con : component.get("v.contactData"),
            event : component.get("v.eventData")
        });

        action.setCallback(this, function(res){
            var state = res.getState();
            var message = res.getReturnValue();
            console.log("The Response is --> "+message);
            if(state == "SUCCESS"){
                if(message == 'record inserted'){
                    component.set("v.showAccount", false);
                    component.set("v.showContact", false);
                    component.set("v.showEvent", false);

                    component.set("v.msgBoolean", true);
                    component.set("v.progessBarValue", 100);
                    console.log('Record Save Succesfullyyy!!!');
                }else if(message == 'provide Account Name'){
                    component.set("v.showAccount", true);
                    component.set("v.showContact", false);
                    component.set("v.showEvent", false);
                    component.set("v.progessBarValue", 0);
                }else if(message == 'provide Contact Last Name'){
                    component.set("v.showAccount", false);
                    component.set("v.showContact", true);
                    component.set("v.showEvent", false);
                    component.set("v.progessBarValue", 30);
                }else{
                    component.set("v.showAccount", true);
                    component.set("v.showContact", false);
                    component.set("v.showEvent", false);

                    component.set("v.progessBarValue", 0);
                    console.log('Something went wrong!!!');
                }
            }   
        });

        $A.enqueueAction(action);
    }
})
