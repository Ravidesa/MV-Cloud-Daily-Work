@isTest
public class LeadTriggerTest{

    @isTest
    public static void insertLeadRecordTriggertest(){
        List<Lead> leadList = new List<Lead>();
        for(Integer i=0; i<150; i++){
            Lead lead = new Lead();
            lead.FirstName = 'Test';
            lead.LastName = 'Lead Data'+i;
            lead.Company = 'org'+i;
            lead.Status = 'Open - Not Contacted';
            lead.Rating = 'cold';

            leadList.add(lead);
        }
        insert leadList;
    }
}