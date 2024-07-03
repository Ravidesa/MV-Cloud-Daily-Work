({
	insertRecord : function(component, event, helper) {
		var fName = component.find("fName").get('v.value');
        var lName = component.find("lName").get('v.value');
        var email = component.find("email").get('v.value');
        console.log("First Name is --> "+fName);
        console.log("Last Name is --> "+lName);
        console.log("Email id is --> "+email);
        
        var acc = component.get("c.createRecord");
       
        acc.setParams({
            "FirstName":fName,
            "LastName":lName,
            "Email":email
        });
        
        acc.setCallback(this, function(res){
            console.log("Log is --> "+res);
        	var state = res.getState();
            console.log("state is --> "+state);
            if(state == "SUCCESS"){
                var accId = res.getReturnValue();
                console.log("id is --> "+accId);
                component.find('notifLib').showToast({
            		"variant": "success",
            		"title": "Contact Created",
            		"message": "Successfully Record Created! and Record ID: " + accId
        		});
            }else{
                component.find('notifLib').showNotice({
            		"variant": "error",
            		"header": "Something has gone wrong!",
            		"message": "Unfortunately, there was a problem creating the record."
        		});
            }
        });
        
        $A.enqueueAction(acc);
	}
})