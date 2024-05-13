package Day7;

import java.util.ArrayList;

public class ListOfOddNumbers {

    static boolean checkAllOddPresent(ArrayList<Integer> lst){
        boolean res = true;
        for(int i=0; i<lst.size(); i++){
            if(lst.get(i)%2==0){
                res = false;
                break;
            }
        }
        return res;
    }
    public static void main(String[] args) {
        ArrayList<Integer> lst = new ArrayList<>();
        lst.add(11);
        lst.add(13);
        lst.add(15);
        lst.add(17);
        lst.add(19);

        System.out.println(checkAllOddPresent(lst));
    }
}
