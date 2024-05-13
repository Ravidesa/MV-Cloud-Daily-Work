package Day8;

public class NullPointerExce {
    public static void main(String[] args) {
        String str = null;
        try {
            int length = str.length();
        } catch (NullPointerException e) {
            System.out.println("NullPointerException !");
        }
    }    
}

