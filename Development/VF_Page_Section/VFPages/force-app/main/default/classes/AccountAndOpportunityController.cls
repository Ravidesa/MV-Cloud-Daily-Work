public class AccountAndOpportunityController {
    public List<SelectOption> accOptions {get; set;}
    public List<Opportunity> oppList { get; set; }
    
    public String accId {get; set;}
    
    public Integer pageNo {get; set;}
    public Integer pageSize {get; set;}
    public Integer totalRec {get; set;}
    
    public AccountAndOpportunityController(){
        List<Account> accList = [SELECT Id,Name FROM Account];
        accOptions = new List<SelectOption>();
        for(Account acc : accList){
            accOptions.add(new SelectOption(acc.Id, acc.Name));
        }
    }
    
    public void fetchAllOpportunity(){
     	totalRec = [SELECT count() FROM Opportunity WHERE AccountId =: accId];
        pageNo = 0;
        pageSize = 2;
        fetchRelatedOppList();
    }
    
    public void fetchRelatedOppList(){
        oppList = [SELECT Id, Name, StageName, CloseDate FROM Opportunity WHERE AccountId =: accId LIMIT :pageSize OFFSET :(pageNo*pageSize) ];
    }
    
    public void previous(){
        if(pageNo > 0){
            pageNo--;
            fetchRelatedOppList();
        }
    }
    
    public void next(){
        if(totalrec >= (pageNo*pageSize)){
            pageNo++;
            fetchRelatedOppList();
        }
    }
   
}