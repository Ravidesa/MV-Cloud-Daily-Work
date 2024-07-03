public class FutureOpportunity {

    @future(callout=true)
    public static void uploadImage(Id oppId){
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.unsplash.com/photos/random');
        req.setMethod('GET');
        
        req.setHeader('Authorization', 'Client-ID qTqW-8azRs367yMws31ie7LB3uBNTM2PL7n0P_NXkUc');
        System.debug(req);
        Http http = new Http();
        HttpResponse res = http.send(req);
        System.debug(res.getBody());
        // return res;
        
        Map<String, Object> resMap = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
        
        Object rewq = (resMap.get('urls'));
        // system.debug('bcjdsb--->'+ rewq);
        
        String jsonText = JSON.Serialize(rewq);
        
        system.debug('bcjdsb--->'+ jsonText);
        System.debug('Name is --> '+resMap.get('slug'));
        
        Map<String, Object> account = (Map<String, Object>) JSON.deserializeUntyped(jsonText);
        
        system.debug('account--->'+account);
        
        system.debug('account--->'+(account.get('full')));
        
        String strUrl = (String)(account.get('full'));
        List<String> resq = new List<String>();
        String resUrl = strUrl.substringBefore('?');
        System.debug(resUrl+'?q=12');

        HttpRequest req2 = new HttpRequest();
        req2.setEndpoint(resUrl+'?q=12');
        //req2.setHeader('Content-Type', 'multipart/form-data;');
        req2.setMethod('GET');
        
        Http http2 = new Http();
        HttpResponse res2 = http2.send(req2);
        System.debug(res2.getBody());
		System.debug(Blob.valueOf(res2.getBody()));
        
        //String base64Content = ( String ) JSON.deserialize( res2.getBody(), String.class );
        //EncodingUtil.base64Decode(res2.getBody());
        
        Attachment att = new Attachment();
        att.Body = res2.getBodyAsBlob();
        att.Name = (String)resMap.get('slug');
        att.ContentType = 'image/jpeg';
        att.ParentId = oppId;

        insert att;
		
        // return resUrl;
        
    }
}