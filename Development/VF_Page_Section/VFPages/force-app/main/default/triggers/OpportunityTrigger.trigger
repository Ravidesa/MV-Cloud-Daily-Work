trigger OpportunityTrigger on Opportunity (before insert, before update, after update) {
    // if(Trigger.isInsert){
    //     if(Trigger.isBefore){
    //         OpportunityTriggerHelper.changedType(Trigger.new);    
    //     }  
    // }else if(Trigger.isUpdate){
    //     if(Trigger.isBefore){
    //         OpportunityTriggerHelper.beforeUpdate(Trigger.new);  
    //     }else if(Trigger.isAfter){
    //         OpportunityTriggerHelper.createTask(Trigger.new, Trigger.newMap, Trigger.oldMap);
    //     }
    // }
}