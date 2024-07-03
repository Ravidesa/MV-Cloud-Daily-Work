public class ScheduleAccountRatingChange implements Schedulable {
    public void execute(SchedulableContext sc){
        List<Account> accList = [SELECT Id, Rating FROM Account WHERE Rating != null];
        for(Account acc : accList){
            acc.Rating = 'Warm';
        }
        update accList;
    }
}