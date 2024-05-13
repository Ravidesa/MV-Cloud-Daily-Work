package Day8;

public class SortCharacters {

    public static void sortingCharacters(char[] arr) {
        int n = arr.length;

        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    char temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        char[] arr = {'b', 'c', 'a', 'f', 'd', 'e'};

        sortingCharacters(arr);
        
        System.out.println("After sorting: ");

        for (char c : arr) {
            System.out.print(c + " ");
        }
    }

}
