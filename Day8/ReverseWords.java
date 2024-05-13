package Day8;

public class ReverseWords {

    public static String reverseWords(String str) {
        String[] words = str.split(" ");
        StringBuilder reversedString = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            reversedString.append(words[i]);
            if (i != 0) {
                reversedString.append(" ");
            }
        }
        return reversedString.toString();
    }

    public static void main(String[] args) {
        String str = "My name is Ravi";
        String reversedString = reverseWords(str);
        System.out.println(reversedString);
    }
}
