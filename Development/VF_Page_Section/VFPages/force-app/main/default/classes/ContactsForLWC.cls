public class ContactsForLWC {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts(String accId){
        try {
            return [SELECT AccountId, Id, FirstName, LastName FROM Contact WHERE AccountId =: accId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}