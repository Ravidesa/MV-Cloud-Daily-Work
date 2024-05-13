package Day8;

import java.util.Scanner;

public class PermutationAndCombination {

    public static int calculatePermutation(int n, int r) {
        int res = factorial(n) / factorial(n - r);
        return res;
    }

    public static int calculateCombination(int n, int r) {
        int res = factorial(n) / (factorial(r) * factorial(n - r));
        return res;
    }

    public static int factorial(int num) {
        int fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number --> ");
        int n = scanner.nextInt();

        System.out.print("Enter the second number --> ");
        int r = scanner.nextInt();

        scanner.close();

        int permutationResult = calculatePermutation(n, r);
        int combinationResult = calculateCombination(n, r);

        System.out.println("Permutation is: " + permutationResult);
        System.out.println("Combination is: " + combinationResult);
    }

}

