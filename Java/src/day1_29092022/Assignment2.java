package day1_29092022;

public class Assignment2 {
    String[] arr = {"abc","def","ghi","klm","NOP"};
    long[] longArr = {121524,26564564,5464564,1,51,51,561,261,21,56162};

    public static void main(String[] args) {
        Assignment2 assignment2 = new Assignment2();

        for(int i =0; i<assignment2.arr.length; i++){
            System.out.println(assignment2.arr[i]+",");
        }
        System.out.println("********************");
        for(int i =0; i<assignment2.longArr.length; i++){
            System.out.println(assignment2.longArr[i]+",");
        }
    }
}
