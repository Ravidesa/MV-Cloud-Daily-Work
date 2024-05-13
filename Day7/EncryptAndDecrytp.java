package Day7;

import java.util.Scanner;

public class EncryptAndDecrytp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String message = sc.nextLine();

        String eres = "";
        int key = 3*9%5+1;

        for (int i = 0; i < message.length(); i++) {
            char ch = message.charAt(i);
            int eValue = (int) ch - key;
            eres += (char) eValue;
        }

        System.out.println("The original message is --> " + message);
        System.out.println("The Encrypt message is --> " + eres);

        String dres = "";

        for (int i = 0; i < eres.length(); i++) {
            char ch = eres.charAt(i);
            int dValue = (int) ch + key;
            dres += (char) dValue;
        }

        System.out.println("The Decrypt message is --> " + dres);

    }
}