public class AllContactsRecord {

    @AuraEnabled
    public static List<Account> getAllAccounts(Integer pageNo, Integer pageSize, String searchWords){
        try {
            List<Account> accList = new List<Account>();
            String words = '%'+searchWords+'%';
            accList = [SELECT Id, Name, Rating, Type FROM Account WHERE Name like :words LIMIT :pageSize OFFSET : (pageSize*pageNo)];

            if(!accList.isEmpty()){
                return accList;
            }

            return null;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Integer getAccTotalRecords(String searchWords){
        try {
            String words = '%'+searchWords+'%';
            Integer total = [SELECT Count() FROM Account WHERE Name like :words];
            return total;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Contact> getRelatedContactList(String accId){
        try {
            List<Contact> conList = [SELECT Id, FirstName, LastName, Email FROM Contact WHERE AccountId =: accId];
            if(!conList.isEmpty()){
                return conList;
            }
            return null;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}