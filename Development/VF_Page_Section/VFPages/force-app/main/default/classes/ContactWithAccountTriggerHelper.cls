public class ContactWithAccountTriggerHelper {
    public static void deleteRelatedRecord(List<Contact> oldList){
        Set<Id> accIds = new Set<Id>();
        List<Account> accList = new List<Account>();
        
        for(Contact con : oldList){
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
        
        if(!accIds.isEmpty()){
            accList = [SELECT id,name FROM Account WHERE Id IN: accIds];
            delete accList;
        }
    }
    
    public static void createEvent(List<Contact> conList){
        List<Event> eventList = new List<Event>();
        
        for(Contact con : conList){
            Event event = new Event();
            
            event.OwnerId = con.OwnerId;
            event.Subject = 'Call';
            event.WhoId = con.Id;
            event.StartDateTime = System.now().addHours(1);
            event.EndDateTime = System.now().addHours(2);
            
            eventList.add(event);
        }
        
        if(!eventList.IsEmpty()){
            insert eventList;
        }
        
    }
    
    public static void afterInsertTotalAmountOfAccount(List<Contact> conList){
        Set<Id> accIds = new Set<Id>();
        
        List<Account> accListUpdated = new List<Account>();
        
        for(Contact con : conList){
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
        
        accListUpdated = calculateTotalAmount(accIds);
        
        if(!accListUpdated.isEmpty()){
            update accListUpdated;
        }
        
    }
    
    public static void afterUpdateTotalAmountOfAccount(List<Contact> conList, Map<Id, Contact> oldConMap){
        Set<Id> accIds = new Set<Id>();
        List<Account> accListUpdated = new List<Account>();
        
        for(Contact con : conList){
            if(con.AccountId != null && con.Amount__c != oldConMap.get(con.Id).Amount__c){
                accIds.add(con.AccountId);
            }
        }
        
        accListUpdated = calculateTotalAmount(accIds);
        
        if(!accListUpdated.isEmpty()){
            update accListUpdated;
        }
        
    }
    
    public static void afterDeleteTotalAmountOfAccount(List<Contact> conList){
        List<Account> accListUpdated = new List<Account>();
        Set<Id> accIds = new Set<Id>();
        
        for(Contact con : conList){
            if(con.AccountId != null){
                accIds.add(con.AccountId);
            }
        }
        
        accListUpdated = calculateTotalAmount(accIds);
        
        if(!accListUpdated.isEmpty()){
            update accListUpdated;
        }
        
    }
    
    public static List<Account> calculateTotalAmount(Set<Id> accIds){
        List<Account> accListUpdated = new List<Account>();
        
        List<Contact> conWithAccId = [SELECT Id, Amount__c, AccountId FROM Contact WHERE AccountId IN : accIds];
        
        Map<Id, Decimal> tarckTotal = new Map<Id, Decimal>();
        
        for(Contact con : conWithAccId){
            Decimal total = 0;
            
            if(tarckTotal.containsKey(con.AccountId)){
                total = tarckTotal.get(con.AccountId);
            }
            
            if(con.Amount__c != null){
                total = total + con.Amount__c;
            }
            tarckTotal.put(con.AccountId, total);
        }
        
        if(!tarckTotal.isEmpty()){
            for(Id accId : tarckTotal.keySet()){
                Account acc = new Account();
                acc.Id = accId;
                acc.Total_Amount__c = tarckTotal.get(accId);
                
                accListUpdated.add(acc);
            }
        }
        
        return accListUpdated;
        
    }
    
    public static void updateAllofContactWithAccount(List<Contact> conList, Map<Id, Contact> oldConMap, Map<Id, Contact> newConMap){
        
        Set<Id> oldAccIds = new Set<Id>();
        Map<Id, Id> oldAndNewAccIds = new Map<Id, Id>();
        
        for(Contact con : conList){
            if(con.AccountId != null && con.AccountId != oldConMap.get(con.Id).AccountId){
                oldAccIds.add(oldConMap.get(con.Id).AccountId);
                oldAndNewAccIds.put(oldConMap.get(con.Id).AccountId, con.AccountId);
            }
        }
        
        List<Contact> relatedCon = [SELECT Id, AccountId FROM Contact WHERE AccountId IN: oldAccIds];
        
        for(Contact con : relatedCon){
            if(oldAndNewAccIds.get(con.AccountId) != null){
                con.AccountId = oldAndNewAccIds.get(con.AccountId);
            }
        }
        
        if(!relatedCon.isEmpty()){
            update relatedCon;
        }
        
    }
    
    public static void greatProblemBeforeInsert(List<Contact> conList){
        set<Id> accIds = new Set<Id>();
        
        for(Contact con : conList){
            if(con.AccountId != null && con.Con_Amount__c != null){
                accIds.add(con.AccountId);
            }
        }
        
        Map<Id, Account> accMap = new Map<Id, Account>([SELECT Id, Max_Amount__c FROM Account WHERE Id IN: accIds]);
        
        List<Contact> createNewConRec = new List<Contact>();
        
        createNewConRec = greatProblem(accMap, conList);
        
        if(!createNewConRec.isEmpty()){
            insert createNewConRec;
        }
        
    }

    public static void greatProblemBeforeUpdate(List<Contact> conList, Map<Id, Contact> oldConMap){
        Set<Id> accIds = new Set<Id>();

        for(Contact con : conList){
            if(con.AccountId != null && con.Con_Amount__c != oldConMap.get(con.Id).Con_Amount__c){
                accIds.add(con.AccountId);
            }
        }

        Map<Id, Account> accMap = new Map<Id, Account>([SELECT Id, Max_Amount__c FROM Account WHERE Id IN: accIds]);

        List<Contact> createNewConRec = new List<Contact>();

        createNewConRec = greatProblem(accMap, conList);

        if(!createNewConRec.isEmpty()){
            insert createNewConRec;
        }

    }

    public static List<Contact> greatProblem(Map<Id, Account> accMap, List<Contact> conList){
        List<Contact> createNewConRec = new List<Contact>();

        for(Contact con : conList){
            Decimal total = 0;
            if(con.AccountId != null && accMap.containsKey(con.AccountId) && accMap.get(con.AccountId).Max_Amount__c != null){
                if(con.Con_Amount__c != null && con.Con_Amount__c > accMap.get(con.AccountId).Max_Amount__c){
                    Decimal maxAmount = accMap.get(con.AccountId).Max_Amount__c;
                    total = con.Con_Amount__c - maxAmount;
                    Integer i = 1001;
                    
                    con.Con_Amount__c = maxAmount;
                    
                    while(total > maxAmount){
                        Contact conRec = new Contact();
                        conRec.LastName = con.LastName+i;
                        conRec.FirstName = con.FirstName+i;
                        conRec.Con_Amount__c =  maxAmount;
                        conRec.AccountId = con.AccountId;
                        
                        createNewConRec.add(conRec);
                        
                        total = total - maxAmount;
                        i++;
                    }
                    
                    if(total > 0 && total <= maxAmount){
                        Contact conRec = new Contact();
                        conRec.LastName = con.LastName+i;
                        conRec.FirstName = con.FirstName+i;
                        conRec.Con_Amount__c =  total;
                        conRec.AccountId = con.AccountId;
                        
                        createNewConRec.add(conRec);
                    }
                }
            }
        }

        return createNewConRec;
    }
    
}