public class WrapperClassController {
    
    @AuraEnabled
    public static List<WrapClass> getAllData(Integer pageNo, Integer pageSize){
        try {
            List<WrapClass> wrapList = new List<WrapClass>();
            List<Account> accList = [SELECT Id, Name, Rating, (SELECT Id, Name, FirstName, LastName FROM Contacts), (SELECT Id, Name FROM Opportunities) FROM Account LIMIT :pageSize OFFSET :(pageNo*pageSize)];
            Integer totalRec = [SELECT COUNT() FROM Account];
            for(Account acc: accList){
                WrapClass wrapObj = new WrapClass();
                wrapObj.acc = acc;
                wrapObj.conList = acc.contacts;
                wrapObj.oppList = acc.Opportunities;
                wrapObj.totalRecords = totalRec;
                wrapList.add(wrapObj);
            }

            return wrapList;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    public class WrapClass{
        @AuraEnabled
        public Account acc{get;set;}

        @AuraEnabled
        public List<Contact> conList{get; set;}

        @AuraEnabled
        public List<Opportunity> oppList{get; set;}

        @AuraEnabled
        public Integer totalRecords {get; set;}
    }
}