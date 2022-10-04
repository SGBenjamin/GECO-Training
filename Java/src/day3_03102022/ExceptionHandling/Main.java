package day3_03102022.ExceptionHandling;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        checkArray(2);
        checkArray(6);
        checkArray(0);
        checkArray(5);

    }

    public static void checkArray(int a){
        System.out.println("checkArray["+a+"]");
        String[] arr = {"abc","def","ghi","klm","NOP"};
            try{
                if(a>= arr.length){
                    throw new Exception("Index is out of bounds");
                }else{
                    System.out.println(arr[a]);
                }
            }catch (Exception e){
                System.out.println("Error:"+e.getMessage());
            }finally{
                System.out.println(Arrays.toString(arr));
                System.out.println("***********************");
            }
    }

}
