package Day8;

import java.util.Scanner;

public class ArmStrongNumber {

    public static boolean isArmstrong(int no) {
        int originalNumber, rem, res = 0;
        int digit = 0;
        originalNumber = no;

        while (originalNumber != 0) {
            originalNumber /= 10;
            digit++;
        }

        originalNumber = no;

        while (originalNumber != 0) {
            rem = originalNumber % 10;
            res += Math.pow(rem, digit);
            originalNumber /= 10;
        }

        return res == no;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int no = sc.nextInt();
        sc.close();

        if (isArmstrong(no)) {
            System.out.println(no + " is armstrong number.");
        } else {
            System.out.println(no + " is not armstrong number.");
        }
    }
}
