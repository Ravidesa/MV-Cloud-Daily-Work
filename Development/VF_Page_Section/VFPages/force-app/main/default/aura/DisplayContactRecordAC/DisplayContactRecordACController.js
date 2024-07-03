({
    doInit : function(component, event, helper) {
        helper.fetchAccounts(component);
    },

    previoudRecord : function(component, event, helper) {
        var pageNo = component.get("v.pageNo");
        component.set('v.pageNo', pageNo-1);
        console.log("previous Page no is --> "+ component.get("v.pageNo"));
        helper.fetchAccounts(component);
    },

    nextRecord : function(component, event, helper) {
        var pageNo = component.get('v.pageNo');
        component.set('v.pageNo', pageNo+1);
        console.log("next Page no is --> "+ component.get("v.pageNo"));
        helper.fetchAccounts(component);
    },


    getSearchRecords : function(component, event, helper){
        component.set('v.pageNo', 0);
        helper.fetchAccounts(component);
    },

    getRelatedContact : function(component, event, helper){
        var accId = event.currentTarget.id;
        console.log("account id is --> "+accId);
        component.set("v.accId", accId);
        helper.fetchRelatedContacts(component);
    }

})
