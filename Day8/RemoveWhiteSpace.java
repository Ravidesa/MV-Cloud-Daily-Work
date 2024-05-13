package Day8;

public class RemoveWhiteSpace {
    public static void main(String[] args) {
        String input = "WELCOME TO MV CLOUDS";
        String output = removeWhitespace(input);
        System.out.println("Original String: " + input);
        System.out.println("String without whitespaces: " + output);
    }

    public static String removeWhitespace(String input) {
        char[] chars = input.toCharArray();
        StringBuilder builder = new StringBuilder();

        for (char c : chars) {
            if (c != ' ') {
                builder.append(c);
            }
        }

        return builder.toString();
    }
}

