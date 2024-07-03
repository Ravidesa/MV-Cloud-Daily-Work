({
    updateDate : function(component, event, helper) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth();
        var yyyy = today.getFullYear();

        if(dd < 10){
            dd = '0'+dd;
        }

        if(mm < 10){
            mm = '0'+mm;
        }

        var selectedDate = component.find('dateId').get('v.value');
        component.set('v.testDate', selectedDate);

        var formmatedDate = yyyy + '-' + mm + '-' + dd;

        console.log("selected date is --> "+component.get('v.testDate'));
        console.log("formatted date is --> "+formmatedDate);
        
        if(component.get("v.testDate") != '' && component.get("v.testDate") < formmatedDate){
            component.set('v.isError', true);
            console.log('inside the if statement');
        }else{
            component.set('v.isError', false);
            console.log('inside the else statement');
        }
    },

    submit : function(component, event, helper){
        alert("Entered date is Valid!");
    }
})
