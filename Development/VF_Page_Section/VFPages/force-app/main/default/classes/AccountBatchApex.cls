public class AccountBatchApex implements Database.Batchable<sObject> {
   public Database.QueryLocator start(Database.BatchableContext bc) {
       //List<Opportunity> oppList = [SELECT Id, Name, AccountId FROM Opportunity WHERE AccountId != null];
       return Database.getQueryLocator([SELECT Id, Name, AccountId FROM Opportunity WHERE AccountId != null]);
   }
    
   public void execute(Database.BatchableContext bc, List<Opportunity> oppList){
       Map<Id, String> accIdAndNames = new Map<Id,String>();
       List<Account> updateAcc = new List<Account>();
       
       for(Opportunity opp: oppList){
           accIdAndNames.put(opp.AccountId, opp.Name);
       }
       
       updateAcc = [SELECT Id, Name FROM Account WHERE Id IN: accIdAndNames.keySet()];
       for(Account acc : updateAcc){
           acc.Name = accIdAndNames.get(acc.Id);
       }
       
       update updateAcc;
   }
    
   
	public void finish(Database.BatchableContext bc){
        System.debug('Completed the batch process!!');
    }
    
}