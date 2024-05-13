package Day8;

public class Pattern8 {
    public static void main(String[] args) {
        int n = 5;

        for (int i = 0; i < n; i++) {

            for (int j = 0; j < n - i - 1; j++) {
                System.out.print(" ");
            }

            
            for (int j = 0; j <= i; j++) {
                if (i == 0) {
                    System.out.print("*");
                } else {
                    System.out.print("*" + (i + 1));
                }

            }

            System.out.println();
        }

        for (int i = n-2; i>0; i--) {

            for (int j = 0; j < n - i - 1; j++) {
                System.out.print(" ");
            }

            
            for (int j = 0; j <= i; j++) {
                if (i == 0) {
                    System.out.print("*");
                } else {
                    System.out.print("*" + (i + 1));
                }

            }

            System.out.println();
        }
    }
}
