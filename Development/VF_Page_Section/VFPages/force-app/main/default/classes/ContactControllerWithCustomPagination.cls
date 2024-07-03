public class ContactControllerWithCustomPagination {
	public List<Contact> contacts { get; set; }
    public Integer pageNo { get; set; }
    public Integer pageSize { get; set; }
    public Integer totalRecords { get; set; }
    
    public ContactControllerWithCustomPagination(){
        pageNo = 0;
        pageSize = 20;
        totalRecords = [SELECT count() FROM Contact];
        getContacts();
    }
    
    private void getContacts(){
        contacts = [SELECT Id, Name, Email, Phone FROM Contact LIMIT :pageSize OFFSET :(pageNo*pageSize) ];
    }
    
    public void previous(){
        if(pageNo > 0){
            pageNo--;
            getContacts();
        }
    }
    
    public void next(){
        if(pageSize*pageNo < totalRecords){
            pageNo++;
            getContacts();
        }
    }
}