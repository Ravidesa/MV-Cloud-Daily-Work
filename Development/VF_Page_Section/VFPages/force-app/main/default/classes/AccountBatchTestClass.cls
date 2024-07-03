@isTest
public class AccountBatchTestClass{
    
    @isTest
    public static void accNameSameAsOppName(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<150; i++){
            Account acc = new Account();
            acc.Name = 'Batch Acc Name'+i;
            acc.Rating = 'Cold';
            
            accList.add(acc);
        }
        
        insert accList;

        List<Opportunity> oppList = new List<Opportunity>();
        Integer flag = 0;
        for(Account acc: accList){
            Opportunity opp = new Opportunity();
            opp.Name = 'Batch Opp Name'+flag;
            opp.CloseDate = Date.today().addDays(10);
            opp.StageName = 'Needs Analysis';
            opp.AccountId = acc.Id;
            oppList.add(opp);
            flag++;
        }

        
        insert oppList;

        test.startTest();
        AccountBatchApex batchObj = new AccountBatchApex();
        ID batchId = Database.executeBatch(batchObj);
        test.stopTest();
    }
}