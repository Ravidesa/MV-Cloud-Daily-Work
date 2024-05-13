package Day7;

import java.util.Scanner;

public class WordFind {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = "Hey Hello Hii";

        int no = sc.nextInt();

        String[] word = str.split(" ");
        if (no > 0 && no <= word.length) {
            System.out.println(word[no - 1]);
        } else {
            System.out.println("Invalid");
        }
        
    }

}
