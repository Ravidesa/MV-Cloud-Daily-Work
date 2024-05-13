package Day8;

public class EightPattern {
    public static void drawEightPattern(int rows, int cols) {
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                if ((i == 1 || i == rows || i == (rows / 2) + 1) ||
                        (j == 1 && (i > 1 && i < rows)) ||
                        (j == cols && (i > 1 && i < rows))) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int rows = 9;
        int cols = 5;
        drawEightPattern(rows, cols);
    }
}
