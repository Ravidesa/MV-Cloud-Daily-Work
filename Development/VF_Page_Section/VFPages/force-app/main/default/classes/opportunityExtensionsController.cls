public class opportunityExtensionsController {
	private final Opportunity opp;
    
    public opportunityExtensionsController(ApexPages.StandardController stdController){
        this.opp = (Opportunity)stdController.getRecord();
    }
    
    public String getGreeting() {
        return 'Hello ' + opp.name + ' (' + opp.id + ')';
    }

    public void uploadImage(){
        FutureOpportunity.uploadImage(opp.Id);
    }
}