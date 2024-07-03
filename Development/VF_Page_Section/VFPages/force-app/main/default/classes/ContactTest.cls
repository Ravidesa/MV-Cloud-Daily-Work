@isTest
public class ContactTest {
    
    @isTest
    public static void forInsertTrigger(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<15; i++){
            Account acc = new Account();
            acc.Name = 'Test Acc Demo'+i;
            acc.Max_Amount__c = 25;
            accList.add(acc);
        }
        insert accList;

        List<Contact> conList = new List<Contact>();
        for(Account acc : accList){
            for(Integer i=0; i<10; i++){
                Contact con = new Contact();
                con.FirstName = 'Test';
                con.LastName = 'Con Demo'+i;
                con.Amount__c = 20;
                con.Con_Amount__c = 55;
                con.AccountId = acc.Id;
                conList.add(con);
            }
        }

        insert conList;

        for(Contact con : conList){
            con.Amount__c = 30;
            con.Con_Amount__c = 80;
        }

        update conList;

    }


    @isTest
    public static void forDeleteRelatedAccoutn(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<15; i++){
            Account acc = new Account();
            acc.Name = 'Test Account Demo'+i;
            acc.Max_Amount__c = 25;
            accList.add(acc);
        }
        insert accList;

        List<Contact> conList = new List<Contact>();
        for(Account acc : accList){
            for(Integer i=0; i<10; i++){
                Contact con = new Contact();
                con.FirstName = 'Test';
                con.LastName = 'Contact Demo'+i;
                con.Amount__c = 20;
                con.Con_Amount__c = 55;
                con.AccountId = acc.Id;
                conList.add(con);
            }
        }

        insert conList;

        delete conList;
    }
    
    @isTest
    public static void forUpdateAllContactAccount(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<10; i++){
            Account acc = new Account();
            acc.Name = 'Test Acc Demo'+i;
            acc.Max_Amount__c = 25;
            accList.add(acc);
        }
        insert accList;

        List<Contact> conList = new List<Contact>();
        for(Account acc : accList){
            for(Integer i=0; i<10; i++){
                Contact con = new Contact();
                con.FirstName = 'Test';
                con.LastName = 'Con Demo'+i;
                con.Amount__c = 20;
                con.Con_Amount__c = 55;
                con.AccountId = acc.Id;
                conList.add(con);
            }
        }

        insert conList;

        List<Account> accList2 = new List<Account>();
        for(Integer i=0; i<10; i++){
            Account acc = new Account();
            acc.Name = 'New Test Acc Demo'+i;
            acc.Max_Amount__c = 25;
            accList2.add(acc);
        }
        insert accList2;         

        Integer flag = 0;
        List<Contact> conAccList = new List<Contact>();
        for(Account acc : accList){
            Contact con = [SELECT Id, FirstName, AccountId FROM Contact WHERE AccountId =: acc.Id Limit 1];            
            con.AccountId = accList2.get(flag).Id;
            conAccList.add(con);
        }

        update conAccList;

    }

}