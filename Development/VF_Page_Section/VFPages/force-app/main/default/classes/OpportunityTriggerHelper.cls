public class OpportunityTriggerHelper {
    public static void changedType(List<Opportunity> oppList){
        for(Opportunity opp : oppList){
            opp.Type = 'New Customer';
        }
    }
    
    public static void beforeUpdate(List<Opportunity> oppList){
        for(Opportunity opp : oppList){
        	opp.StageName = 'prospecting';
        	opp.CloseDate = Date.today().addDays(15);
    	}
    }
    
    public static void createTask(List<Opportunity> oppList, Map<Id,Opportunity> newOppMap, Map<Id,Opportunity> oldOppMap){
        List<Task> taskList = new List<Task>();
        
        for(Opportunity opp : oppList){
            if(newOppMap.get(opp.Id).Name != oldOppMap.get(opp.Id).Name){
                Task t = new Task();
                t.WhatId = opp.Id;
                t.OwnerId = opp.OwnerId;
                t.Subject = 'Email';
                t.Priority = 'Low';
                t.Status = 'Not Started';
                t.Type = 'Email';
                t.Description = 'Just complete on time';
                taskList.add(t);
            }
        }
        
        if(!taskList.IsEmpty()){
         	insert taskList;
        }
    }
}