({
    loadData : function(component, event, helper) {
        helper.fetchData(component);
    },

    previoudRecord : function(component, event, helper){
        var pageNo = component.get('v.pageNo');
        component.set('v.pageNo', pageNo-1);
        helper.fetchData(component);
    },

    nextRecord : function(component, event, helper){
        var pageNo = component.get('v.pageNo');
        component.set('v.pageNo', pageNo+1);
        helper.fetchData(component);
    }
})
