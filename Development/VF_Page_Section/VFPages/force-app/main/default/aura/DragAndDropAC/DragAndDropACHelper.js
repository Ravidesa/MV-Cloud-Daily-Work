({
    fetchContactsForAccoount1 : function(component) {
        var serachedWord = component.find("searchWord1").get('v.value');
        if(serachedWord == undefined){
            serachedWord = "";
            component.set('v.contactList1', null);
        }
        console.log('words is --> '+serachedWord);
        var acc = component.get("c.getContacts");

        acc.setParams({
            searchedWord: serachedWord
        });

        acc.setCallback(this, function(res){
            console.log("Log is --> "+res);
        	var state = res.getState();
            console.log("state is --> "+state);
            if(state == "SUCCESS"){
                var conList = res.getReturnValue();
                console.log("ContactList 1 is  --> "+conList);
                // console.log("count of contact is  --> "+conList.count);
                // console.log("contactList is  --> "+conList.conLists);
    
                if(conList != null){
                    console.log("count of contact 1 is  --> "+conList.count);
                    console.log("contactList 2 is  --> "+conList.conLists);
                    console.log("Inside the if...");

                    component.set('v.contactList1', conList.conLists);
                    component.set('v.parentAcc1', conList.accId);
                    component.set('v.totalContact1', conList.count);
                }else{
                    component.set('v.contactList1', null);
                    component.set('v.parentAcc1', '');
                    component.set('v.totalContact1', 0);
                    console.log("Inside acc1 else....");
                }

            }else{
                component.set('v.contactList1', null);
                component.set('v.parentAcc1', '');
                component.set('v.totalContact1', 0);
            }
        });

        $A.enqueueAction(acc);
    },
    
    fetchContactsForAccoount2 : function(component) {
        var serachedWord = component.find("searchWord2").get('v.value');
        if(serachedWord == undefined){
            serachedWord = "";
            component.set('v.contactList2', null);
        }
        console.log('words is --> '+serachedWord);
        var acc = component.get("c.getContacts");

        acc.setParams({
            searchedWord: serachedWord
        });

        acc.setCallback(this, function(res){
            console.log("Log is --> "+res);
        	var state = res.getState();
            console.log("state is --> "+state);
            if(state == "SUCCESS"){
                var conList = res.getReturnValue();
                console.log("ContactList 2 is  --> "+conList);
                
                if(conList != null){
                    console.log("count of contact 2 is  --> "+conList.count);
                    console.log("contactList 2 is  --> "+conList.conLists);
                    console.log("Inside the if...");

                    component.set('v.contactList2', conList.conLists);
                    component.set('v.parentAcc2', conList.accId);
                    component.set('v.totalContact2', conList.count);
                }else{
                    component.set('v.contactList2', null);
                    component.set('v.parentAcc2', '');
                    component.set('v.totalContact2', 0);
                    console.log("Inside acc2 else ");
                }
            }else{
                component.set('v.contactList2', null);
                component.set('v.parentAcc2', null);
                component.set('v.totalContact2', 0);
            }
        });

        $A.enqueueAction(acc);
    },

    updatRecord : function(component, selectedConId){
        var parentAccId2 = component.get("v.parentAcc2");
        var refreshFun = this;
        if(parentAccId2 != '' && parentAccId2 != null && selectedConId != '' && selectedConId != null){
            // console.log("Inside helper selected con id is --> "+selectedConId);
            // console.log("Parent acc2 id --> "+parentAccId2);

            var action = component.get('c.updateParentAcc');
            action.setParams({
                accId: parentAccId2,
                conId: selectedConId
            });
            
            action.setCallback(this, function(res){
                var state = res.getState();
                if(state == "SUCCESS"){
                    var strRes = res.getReturnValue();
                    if(strRes == 'updated'){
                        console.log('Updated');
                        refreshFun.fetchContactsForAccoount2(component);
                        refreshFun.fetchContactsForAccoount1(component);
                    }else{
                        console.log('Not Updated');
                    }
                }
            });

            $A.enqueueAction(action);

        }else{
            console.log("Inside the else section of updateRecord helper.....");
        }
    }

})
