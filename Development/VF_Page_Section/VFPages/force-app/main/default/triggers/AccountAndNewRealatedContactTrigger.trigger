trigger AccountAndNewRealatedContactTrigger on Account (before insert, after insert, after update) {
    // if(Trigger.isInsert){
    //     if(Trigger.isBefore){
    //         AccountAndRelatedContacTriggerHelper.prefixAccName(Trigger.new);
    //         AccountAndRelatedContacTriggerHelper.deleteAccountWithSameName(Trigger.new);
    //     }else if(Trigger.isAfter){
    //         AccountAndRelatedContacTriggerHelper.submitRecordApproval(Trigger.new);
    //         AccountAndRelatedContacTriggerHelper.createRelatedContact(Trigger.newMap);
    //     }
    // }

    // if(Trigger.isUpdate && Trigger.isAfter){
    //     AccountAndRelatedContacTriggerHelper.shareRecordToUser(Trigger.new, Trigger.oldMap);
    //     AccountAndRelatedContacTriggerHelper.sendMailNotificationToRelatedContact(Trigger.oldMap, Trigger.newMap);
    // }
}