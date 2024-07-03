public class WizardController {
    
    @AuraEnabled
    public static string save(Account acc, Contact con, Event event){
        try {
            if(acc.Name != '' && acc.Name != null){
                System.debug('Rating is --> '+acc.Rating);
                System.debug('Type is --> '+acc.Type);
                insert acc;
                
                if(con.LastName != '' && con.LastName != null){
                    con.AccountId = acc.Id;
                    insert con;
                    
                    event.WhoId = con.Id;
                    event.OwnerId = '005dL0000008PAwQAM';
                    
                    System.debug('Start Time is --> '+event.StartDateTime);
                    System.debug('End Time is --> '+event.EndDateTime);
                    insert event;
                }else{
                    System.debug('Inside the contact else sectio!!!');
                    return 'provide Contact Last Name';
                }
                
            }else{
                System.debug('Inside the else sectio!!!');
                return 'provide Account Name';
            }
            
        } catch (Exception e) {
            return e.getMessage();
        }
        
        return 'record inserted';
    }
}