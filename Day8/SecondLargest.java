package Day8;

public class SecondLargest {

    public static int secondLargest(int[] arr) {
        if (arr.length < 2) {
            return -1;
        }

        int max = arr[0];
        int secondMax = Integer.MIN_VALUE;
        
        for(int i=1; i<arr.length; i++){
            if(arr[i] > max){
                secondMax = max;
                max = arr[i];
            }

            if(arr[i] < max && arr[i] > secondMax){
                secondMax = arr[i];
            }
        }

        return secondMax;
    }

    public static void main(String[] args) {
        int[] values = {98, 32, 72, 94, 75, 73, 92, 36, 28, 34};

        int secondLargest = secondLargest(values);
        
        System.out.println("Second Largest element : " + secondLargest);
    }

}
