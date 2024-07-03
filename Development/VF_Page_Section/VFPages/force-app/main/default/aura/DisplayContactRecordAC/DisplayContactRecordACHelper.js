({
    fetchAccounts : function(component) {
        var serachedWord = component.find("searchWord").get('v.value');
        if(serachedWord == undefined){
            serachedWord = "";
        }
        console.log('words is --> '+serachedWord);
        var acc = component.get("c.getAllAccounts");

        acc.setParams({
            pageNo:component.get("v.pageNo"),
            pageSize:component.get("v.pageSize"),
            searchWords: serachedWord
        });

        acc.setCallback(this, function(res){
            console.log("Log is --> "+res);
        	var state = res.getState();
            console.log("state is --> "+state);
            if(state == "SUCCESS"){
                var accList = res.getReturnValue();
                component.set('v.accountsList', accList);
            }
        });

        $A.enqueueAction(acc);


        var totalRec = component.get("c.getAccTotalRecords");
        totalRec.setParams({
            searchWords: serachedWord
        });

        totalRec.setCallback(this, function(res){
            // console.log("Log is --> "+res);
        	var state = res.getState();
            // console.log("state is --> "+state);
            if(state == "SUCCESS"){
                var rec = res.getReturnValue();
                console.log("total record is --> "+rec);
                component.set('v.totalRec', rec);
                console.log("Value is --> "+component.get("v.totalRec"));
                console.log("Page NO is --> "+component.get("v.pageNo"));
                console.log("Page Size is --> "+component.get("v.pageSize"));

            }
        });
        
        $A.enqueueAction(totalRec);
    },

    fetchRelatedContacts : function(component){
        var conrec = component.get("c.getRelatedContactList");
        conrec.setParams({
            accId: component.get("v.accId")
        })

        conrec.setCallback(this, function(res){
            var state = res.getState();
            if(state == "SUCCESS"){
                var rec = res.getReturnValue();
                console.log("Contact Records  is --> "+rec);
                component.set('v.contactsList', rec);
            }
        });

        $A.enqueueAction(conrec);
    }
})
