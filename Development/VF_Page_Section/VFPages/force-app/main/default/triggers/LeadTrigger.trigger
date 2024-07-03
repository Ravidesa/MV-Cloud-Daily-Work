trigger LeadTrigger on Lead (before insert) {
    if(Trigger.isInsert && Trigger.isBefore){
        for(Lead lead : Trigger.new){
        	lead.Rating = 'Hot';
        	System.debug('Rating is Hot');
    	}
    } 
}