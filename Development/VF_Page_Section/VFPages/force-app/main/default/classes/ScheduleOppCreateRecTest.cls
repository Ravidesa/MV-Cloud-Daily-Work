@isTest
public class ScheduleOppCreateRecTest {
    @isTest
    public static void createOppRec(){
        String cron = '0 53 14 * * ?';
        ScheduleCreateOpportunity oppSch = new ScheduleCreateOpportunity();
        system.schedule('Creating Opportunity record', cron, oppSch);
    }
}