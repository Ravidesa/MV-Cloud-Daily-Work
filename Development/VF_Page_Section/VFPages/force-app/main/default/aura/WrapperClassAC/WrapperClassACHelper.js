({
    fetchData : function(component) {
        var action = component.get('c.getAllData');

        action.setParams({
            pageNo: component.get('v.pageNo'),
            pageSize: component.get('v.pageSize')
        });

        action.setCallback(this, function(res){
            var state = res.getState();
            if(state === 'SUCCESS'){
                var wrapClassData = res.getReturnValue();
                console.log("Data is --> "+wrapClassData);
                component.set('v.wrapperClassList', wrapClassData);
                // var accName = ;
                console.log("account Name is-- >"+component.get('v.wrapperClassList[0].acc.Name'));
                console.log("Total Records are-- >"+component.get('v.wrapperClassList[0].totalRecords'));
            }else{
                console.log("Inside the else statements.....");
            }
        });
        $A.enqueueAction(action);
    }
})
