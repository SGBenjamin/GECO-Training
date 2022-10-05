package day4_04102022.ArrayListSorting;

import java.util.*;

public class ArrayListProductPojo {

    public static void main(String[] args) {
        List<Product> productArrayList = new ArrayList<Product>();
        Product product1 = new Product("Book", 5.30, "Story Book");
        Product product2 = new Product("Pencil", 2.15, "2B Pencil");
        Product product3 = new Product("Pen", 2.65, "Black Pen");
        Product product4 = new Product("Eraser", 0.80, "Red Eraser");
        Product product5 = new Product("Ruler", 0.50, "30cm Ruler");

        productArrayList.add(product1);
        productArrayList.add(product2);
        productArrayList.add(product3);
        productArrayList.add(product4);
        productArrayList.add(product5);

        System.out.println("Before Sorting:" + productArrayList.toString());
        for(Product prd : productArrayList){
            System.out.println(prd);
            System.out.println(prd.getName());
            System.out.println(prd.getDescription());
            System.out.println(prd.getPrice());

        };


        productArrayList.sort(Comparator.comparing(Product::getPrice));
        System.out.println("After Sorting" + productArrayList.toString());
        for(Product prd : productArrayList){
            System.out.println(prd);
            System.out.println(prd.getName());
            System.out.println(prd.getDescription());
            System.out.println(prd.getPrice());
        };




    }
}
