public class CreateContactRecordController {
	
    @AuraEnabled
    public static String createRecord(String FirstName, String LastName, String Email){
        Contact con = new Contact();
        con.FirstName = FirstName;
        con.LastName = LastName;
        con.Email = Email;
        
        insert con;
        return con.Id;
    }

    @AuraEnabled
    public static void createConRecord(Contact con){
        try {
            insert con;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}