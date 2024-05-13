package Day8;

public class Pattern2 {
    public static void main(String[] args) {
        int rows = 7;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows; j++) {
                if (i == rows/2 || j == rows/2) {
                    System.out.print("* ");
                }else if(i == 0 && j >= rows/2 || j == 0 && i <= rows/2){
                    System.out.print("* ");
                }else if(i == rows-1 && j <= rows/2 || j == rows-1 && i >= rows/2){
                    System.out.print("* ");
                }else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }

}
