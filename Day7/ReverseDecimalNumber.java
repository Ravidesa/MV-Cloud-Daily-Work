package Day7;

public class ReverseDecimalNumber {
    public static void main(String[] args) {
        double number = 123.45;
        double reversedNumber = reverseDecimal(number);
        System.out.println("Input: " + number);
        System.out.println("Output: " + reversedNumber);
    }

    public static double reverseDecimal(double number) {
        String numberString = String.valueOf(number);
        String[] parts = numberString.split("\\.");
        StringBuilder reversedString = new StringBuilder(parts[0]).reverse();
        
        if (parts.length > 1) {
            reversedString.append(".").append(new StringBuilder(parts[1]).reverse());
        }
        
        return Double.parseDouble(reversedString.toString());
    }
}
