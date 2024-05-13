package Day8;

public class Pattern7 {
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
    }

}
