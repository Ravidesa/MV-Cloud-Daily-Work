package Day8;

public class Pattern6 {

    public static void main(String[] args) {
        int rows = 5;

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                if (j == i || j == 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }

            for (int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }

            for (int j = 1; j <= i; j++) {
                if (j == i || j == 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

        for (int i = rows - 1; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                if (j == i || j == 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            for (int j = 1; j <= 2 * (rows - i); j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                if (j == 1 || j == i) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
