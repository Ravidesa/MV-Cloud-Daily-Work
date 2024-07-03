public class DragAndDropController {
    
    @AuraEnabled
    public static Map<String, Object> getContacts(String searchedWord){
        try {
            if(searchedWord != '' && searchedWord != null){
                System.debug('value of words is --> '+searchedWord);
                Map<String, Object> conMap = new Map<String, Object>();
                List<Contact> conList = new List<Contact>();
                String words = '%'+searchedWord+'%';
                Account acc = [SELECT Id, Name FROM Account WHERE Name like : words limit 1];
                conList = [SELECT Id, FirstName, LastName, AccountId FROM Contact WHERE AccountId =: acc.Id];
                
                if(!conList.isEmpty()){
                    Integer count = [SELECT COUNT() FROM Contact WHERE AccountId =: acc.Id];
                    conMap.put('count', count);
                    conMap.put('conLists', conList);
                    conMap.put('accId', acc.Id);
                    return conMap;
                }

                return null;
            }
            System.debug('Outside if statement in apex controller --> '+searchedWord);
            return null;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String updateParentAcc(String accId, String conId){
        try {
            if(accId != '' && accId != null && conId != '' && conId != null){
                Contact con = [SELECT Id, AccountId FROM Contact WHERE Id =: conId ];
                con.AccountId = accId;
                update con;
                return 'updated';
            }
            return 'not updated';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    // Original contact
    @AuraEnabled
    public static List<Contact> getContactsList(String searchedWord){
        try {
            if(searchedWord != '' && searchedWord != null){
                System.debug('value of words is --> '+searchedWord);
                List<Contact> conList = new List<Contact>();
                String words = '%'+searchedWord+'%';
                Account acc = [SELECT Id, Name FROM Account WHERE Name like : words limit 1];
                conList = [SELECT Id, FirstName, LastName, AccountId FROM Contact WHERE AccountId =: acc.Id];
                if(!conList.isEmpty()){
                    return conList;
                }
                return null;
            }
            System.debug('Outside if statement --> '+searchedWord);
            return null;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}