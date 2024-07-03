@isTest
public class ScheduleAccountDescChangeTest {
    @isTest
    public static void changeDescOfAllAccount(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<150; i++){
            Account acc = new Account();
            acc.name = 'Scedule Acc Demo'+i;
            acc.Description = 'Newly Created!';
            accList.add(acc);
        }
        insert accList;

        test.startTest();
        String cron = '0 46 14 * * ?';
	    ScheduledBatchAccountUpdate obj = new ScheduledBatchAccountUpdate();
	    system.schedule('Updating account Description', cron, obj);
        test.stopTest();
    }
}