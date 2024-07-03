@isTest
public class OpportunityTest {
    
    @isTest
    public static void insertOpportunityData(){
        List<Opportunity> oppList = new List<Opportunity>();
        for(Integer i=0; i<150; i++){
            Opportunity opp = new Opportunity();
            opp.Name = 'Opp Test Demo'+i;
            opp.StageName = 'Needs Analysis';
            opp.CloseDate = Date.today().addDays(10);
            opp.Type = 'Existing Customer - Replacement';

            oppList.add(opp);
        }
        insert oppList;
    }

    @isTest
    public static void updateOpportunityData(){
        List<Opportunity> oppList = new List<Opportunity>();
        for(Integer i=0; i<150; i++){
            Opportunity opp = new Opportunity();
            opp.Name = 'Opp Test Demo'+i;
            opp.StageName = 'Needs Analysis';
            opp.CloseDate = Date.today().addDays(10);
            opp.Type = 'Existing Customer - Replacement';

            oppList.add(opp);
        }
        insert oppList;

        Integer flag = 11;
        for(Opportunity opp : oppList){
            opp.Type = 'Existing Customer - Upgrade';
            opp.Name = 'Opp Test Demo'+flag;
            flag++;
        }

        update oppList;

    }

}