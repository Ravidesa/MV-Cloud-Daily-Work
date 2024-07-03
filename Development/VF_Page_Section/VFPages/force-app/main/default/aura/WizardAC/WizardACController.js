({
    selectedValue : function(component, event, helper) {
        var selectedRatingValue = component.find("ratingValue").get("v.value");
        console.log("Selected Value is ---> "+selectedRatingValue);
        // var accName = component.find("accName").get("v.value");
        // var accPhone = component.find("accPhone").get("v.value");
        //     console.log("Account Name --> "+accName);
    
        // console.log("Account Phone --> "+accPhone);

        var selectedTypeValue = component.find("accTypeValue").get("v.value");
        console.log("tyepe value is --> "+selectedTypeValue);
    },

    nextTab : function(component, event, helper){
        var showAccount = component.get("v.showAccount");
        var showContact = component.get("v.showContact");
        var showEvent = component.get("v.showEvent");

        console.log("Accoutn is "+showAccount);
        console.log("contact is "+showContact);
        console.log("event is "+showEvent);
        if(showAccount == true){

            var accName = component.find("accName").get("v.value");
            var accObjName = component.get("v.accountData.Name");
            console.log("Name of account is --> "+accObjName);
            if(accObjName != '' || accObjName != null){
                console.log("Account name is --> "+accName);

                component.set("v.showAccount", false);
                component.set("v.showContact", true);
                component.set("v.showEvent", false); 
                
                var showContacts = component.get("v.showContact");
                console.log("contact is "+showContacts);

                component.set("v.progessBarValue", 30);
            }else{
                console.log("Nothing happen!!!");
            }
        }

        if(showContact == true){

            var conlName = component.find("conlName").get("v.value");
            if(conlName != '' || conlName != null){
                console.log("Contact Last Name is --> "+conlName);

                component.set("v.showAccount", false);
                component.set("v.showContact", false);
                component.set("v.showEvent", true); 
                
                var showEvents = component.get("v.showEvent");
                console.log("Show Event is --> "+showEvents);
                component.set("v.progessBarValue", 65);
            }
        }

        if(showEvent == true){
            console.log("Inside the show event!!!");
            var startDateTime = component.find("startTime").get("v.value");
            console.log("StartTime is like --> "+startDateTime);
            if(startDateTime != '' || startDateTime != null){
                console.log("Start Time is --> "+startDateTime);

                component.set("v.showAccount", false);
                component.set("v.showContact", false);
                component.set("v.showEvent", false);
            }
        }
    },

    prevTab : function(component, event, helper){
        var showAccount = component.get("v.showAccount");
        var showContact = component.get("v.showContact");
        var showEvent = component.get("v.showEvent");

        console.log("Accoutn is "+showAccount);
        console.log("contact is "+showContact);
        console.log("event is "+showEvent);

        if(showContact == true){
            component.set("v.showAccount", true);
            component.set("v.showContact", false);
            component.set("v.showEvent", false);
            
            var showAccounts = component.get("v.showAccount");
            console.log("contact is "+showAccounts);
            component.set("v.progessBarValue", 0);
        }

        if(showEvent == true){
            component.set("v.showAccount", false);
            component.set("v.showContact", true);
            component.set("v.showEvent", false);
            
            var showAccounts = component.get("v.showAccount");
            console.log("contact is "+showAccounts);
            component.set("v.progessBarValue", 30);
        }
    },

    saveRecord : function(component, event, helper){
        // component.set("v.showAccount", false);
        // component.set("v.showContact", false);
        // component.set("v.showEvent", false);

        helper.saveData(component, event, helper);
        
        // component.set("v.msgBoolean", true);
        // component.set("v.progessBarValue", 100);
        // console.log('Record Save Succesfully!');
    }
})
