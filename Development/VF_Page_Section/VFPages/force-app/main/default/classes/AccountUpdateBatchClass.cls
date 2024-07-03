public class AccountUpdateBatchClass implements Database.Batchable<sObject> {
    public Database.QueryLocator start(Database.BatchableContext bc) {
       return Database.getQueryLocator([SELECT Id, Description FROM Account]);
   }
    
   public void execute(Database.BatchableContext bc, List<Account> accList){
       for(Account acc : accList){
           	acc.Description = Datetime.now().format('yyyy-MM-dd h:mm:ss');
       }
       update accList;
   }
   
	public void finish(Database.BatchableContext bc){
        System.debug('Completed the batch processess!!');
    }
}