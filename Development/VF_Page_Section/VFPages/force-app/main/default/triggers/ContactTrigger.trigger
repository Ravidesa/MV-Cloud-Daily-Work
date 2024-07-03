trigger ContactTrigger on Contact (before insert, after insert, after delete, after update, before update) {

    // if(Trigger.isInsert){
    //     if(Trigger.isBefore){
    //         ContactWithAccountTriggerHelper.greatProblemBeforeInsert(Trigger.new);
    //     }
    //     if(Trigger.isAfter){
    //         ContactWithAccountTriggerHelper.createEvent(Trigger.new);
    //         ContactWithAccountTriggerHelper.afterInsertTotalAmountOfAccount(Trigger.new);
    //     }
    // }

    // if(Trigger.isUpdate){
    //     if(Trigger.isBefore){
    //         ContactWithAccountTriggerHelper.greatProblemBeforeUpdate(Trigger.new, Trigger.oldMap);
    //     }
    //     if(Trigger.isAfter){
    //         ContactWithAccountTriggerHelper.afterUpdateTotalAmountOfAccount(Trigger.new, Trigger.oldMap);
    //         ContactWithAccountTriggerHelper.updateAllofContactWithAccount(Trigger.new, Trigger.oldMap, Trigger.newMap);
    //     }
    // }

    // if(Trigger.isDelete && Trigger.isAfter){
    //     ContactWithAccountTriggerHelper.deleteRelatedRecord(Trigger.old);
    //     ContactWithAccountTriggerHelper.afterDeleteTotalAmountOfAccount(Trigger.old);
    // }
}