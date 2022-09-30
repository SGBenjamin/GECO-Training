package day2_30092022;

public class MethodSample{
    public static void main(String[] args) {
        MethodSample methodSample = new MethodSample();

        System.out.println(methodSample.addition());
        System.out.println(methodSample.multiply(4,5));
        String[] nameList = {"sdada","asdadsa","asdsadsad","adsadasds"};
        iterateArray(nameList);

    }


    public int addition(){
        int a = 24;
        int b = 36;

        int sum = a+b;


        return sum;

    }

    public int multiply(int a, int b){
        int mult = a*b;
        return mult;
    }

    public static void iterateArray(String[] nameList){
        for(String name : nameList){
            System.out.println(name);
        }

    }

    public static void printMsg(){


    }
}
