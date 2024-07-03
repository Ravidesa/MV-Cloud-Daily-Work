public class ScheduleCreateOpportunity implements Schedulable {
    public void execute(SchedulableContext sc){
        List<Opportunity> oppList = new List<Opportunity>();
        for(Integer i=0; i<10; i++){    
            Opportunity opp = new Opportunity();
            opp.Name = 'Test Demo Opportunity ' + i;
            opp.CloseDate = System.today() + 10;
            opp.StageName = 'Prospecting';
            oppList.add(opp);
        }
        insert oppList;
    }
}