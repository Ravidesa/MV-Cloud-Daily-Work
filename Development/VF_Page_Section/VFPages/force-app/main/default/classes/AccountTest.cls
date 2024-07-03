@isTest
public class AccountTest{
    
    @isTest
    public static void insertAccountRecordTrigger(){
        List<Account> accList = new List<Account>();
        
        for(Integer i=0; i<150; i++){
            Account acc = new Account();
            acc.Name = 'Test Demo Acc'+i;
            acc.Rating = 'Cold';
            acc.NumberOfEmployees = 35;
            
            accList.add(acc);
        }

        test.startTest();
        insert accList;
        test.stopTest();
    }

    @isTest
    public static void updateAccount(){
        List<Account> accList = new List<Account>();
        List<Contact> conList = new List<Contact>();
        for(Integer i=0; i<150; i++){
            Account acc = new Account();
            acc.Name = 'Test Demo Acc'+i;
            acc.Rating = 'Cold';
            acc.NumberOfEmployees = 35;
            accList.add(acc);
        }

        test.startTest();
        insert accList;
        
        Integer conFlag = 1001;
        for(Account acc : accList){
            Contact con = new Contact();
            con.FirstName = 'Test Demo';
            con.LastName = 'Con'+conFlag;
            con.Email = 'conzazaza'+conFlag+'@gmail.com';
            con.AccountId = acc.Id;
            conFlag++;
            conList.add(con);
        }
        
        Integer flag = 1001;
        for(Account acc : accList){
            acc.Name = 'Test Demo Acc'+flag;
            acc.Rating = 'Hot';
        }        
        
        insert conList;
        update accList;
        
        
        test.stopTest();
    }
    
    @isTest
    public static void forDeleteRec(){
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<50; i++){
            Account acc = new Account();
            acc.Name = 'Test Demo Acc'+i;
            acc.Rating = 'Cold';
            acc.NumberOfEmployees = 35;
            accList.add(acc);
        }
        
        
        List<Account> accList2 = new List<Account>();
        for(Integer i=0; i<50; i++){
            Account acc = new Account();
            acc.Name = 'Test Demo Acc'+i;
            acc.Rating = 'Cold';
            acc.NumberOfEmployees = 35;
            accList2.add(acc);
        }

        test.startTest();
        insert accList;
        insert accList2;
        test.stopTest();

    }
    
}