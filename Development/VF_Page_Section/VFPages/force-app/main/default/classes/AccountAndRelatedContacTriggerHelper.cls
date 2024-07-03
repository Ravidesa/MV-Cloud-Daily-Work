public class AccountAndRelatedContacTriggerHelper {
    public static void createRelatedContact(Map<Id, Account> newAccMap){
        List<Contact> conList = new List<Contact>();
        for(Id accId : newAccMap.keySet()){
            Contact con = new Contact();
            con.LastName = newAccMap.get(accId).Name;
            con.AccountId = accId;
            conList.add(con);
        }
        insert conList;
    }
    
    public static void prefixAccName(List<Account> accList){
        for(Account acc : accList){
            acc.Name = 'Mr.'+acc.Name;
        }
    }
    
    public static void sendMailNotificationToRelatedContact(Map<Id, Account> oldAccMap, Map<Id, Account> newAccMap){
        List<Messaging.Email> emailList = new List<Messaging.Email>();
        
        Map<ID, Contact> conMap = new Map<ID, Contact>([SELECT Id, FirstName, LastName, Email, AccountId FROM Contact WHERE AccountId IN: oldAccMap.keySet()]);
        
        
        if(!conMap.isEmpty()){
            for(Id conId : conMap.keySet()){
                if(oldAccMap.get(conMap.get(conId).AccountId).Name != newAccMap.get(conMap.get(conId).AccountId).Name){
                    if(conMap.get(conId).Email != null){
                        System.debug('Emial id is --> '+conMap.get(conId).Email);
                        Messaging.SingleEmailMessage newMail = new Messaging.SingleEmailMessage();
                        
                        String[] toMailAddress = new String[]{conMap.get(conId).Email};
                        newMail.setToAddresses(toMailAddress);
                        
                        
                        newMail.setSubject('Account Name is changed!');
                        
                        String body = 'Hello ' + conMap.get(conId).FirstName +' '+conMap.get(conId).LastName+ ', <br/></br>' +
                            'Your Account name has been changed!! <br/>'+
                            'Thank You';
                        
                        newMail.setHtmlBody(body);
                        emailList.add(newMail);
                    }
                }
            }
            Messaging.sendEmail(emailList);
        }
        
    }
    
    public static void submitRecordApproval(List<Account> accList){
        List<Approval.ProcessSubmitRequest> processReqList = new List<Approval.ProcessSubmitRequest>();
        for(Account acc: accList){
            if(acc.NumberOfEmployees > 30){
                Approval.ProcessSubmitRequest processReq = new Approval.ProcessSubmitRequest();
                processReq.setObjectId(acc.Id);
                processReqList.add(processReq);
            }
        }
        List<Approval.ProcessResult> result = Approval.process(processReqList);
    }
    
    public static void deleteAccountWithSameName(List<Account> accList){
        Set<String> sameNames = new Set<String>();        
        
        for(Account acc: acclist){
            sameNames.add(acc.Name);
        }
        
        List<Account> rec = [SELECT Id, Name FROM Account WHERE Name IN: sameNames];
        List<Account> deleteAccount = new List<Account>();
        
        System.debug('Size of record --> '+rec.size());

        for(Account acc: rec){
            deleteAccount.add(acc);
        }
        
        if(!deleteAccount.isEmpty()){
            delete deleteAccount;
        }
        
    }
    
    public static void shareRecordToUser(List<Account> accList, Map<Id, Account> oldAccMap){
        User user = [SELECT Id FROM USER WHERE Username = 'alpeshdesai@gmail.com' LIMIT 1];
        
        List<AccountShare> accShareRecList = new List<AccountShare>();
        
        for(Account acc : accList){
            if(acc.Rating == 'Hot' && oldAccMap.get(acc.Id).Rating != 'Hot'){
                AccountShare accShareRec = new AccountShare();
                accShareRec.AccountId = acc.Id;
                accShareRec.UserOrGroupId = user.Id;
                accShareRec.AccountAccessLevel = 'Read';
                accShareRec.OpportunityAccessLevel = 'Read';
                accShareRec.RowCause = Schema.AccountShare.RowCause.Manual;
                
                accShareRecList.add(accShareRec);
            }
        }
        
        if(!accShareRecList.isEmpty()){
            insert accShareRecList;
        }
    }
    
}