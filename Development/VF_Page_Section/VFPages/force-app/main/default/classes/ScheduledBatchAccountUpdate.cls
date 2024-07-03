global class ScheduledBatchAccountUpdate implements Schedulable {
    global void execute(SchedulableContext sc) {
        AccountUpdateBatchClass accObj = new AccountUpdateBatchClass();
        Id batchId = Database.executeBatch(accObj);
    }
}