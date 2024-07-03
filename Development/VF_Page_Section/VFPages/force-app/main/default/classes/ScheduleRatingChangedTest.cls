@isTest
public class ScheduleRatingChangedTest { 
   @isTest
    public static void changedAccRating(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<150; i++){
            Account acc = new Account();
            acc.Name = 'Test Acc Demo'+i;
            acc.Rating = 'Hot';
            accList.add(acc);
        }
        insert accList;

        test.startTest();
        String cron = '0 01 15 ? * 5-6';
        ScheduleAccountRatingChange accSch = new ScheduleAccountRatingChange();
        system.schedule('Change Rating to Warm', cron, accSch);
        test.stopTest();
    }
}