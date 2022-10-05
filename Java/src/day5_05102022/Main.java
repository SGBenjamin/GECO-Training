package day5_05102022;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
        ArrayList<User> userArray = new ArrayList<User>();

        User user1 = new User("Adam", 25, "Choa Chu Kang");
        User user2 = new User("Charlie", 18, "Bukit Panjang");
        User user3 = new User("Ester", 13, "Jurong East");
        User user4 = new User("Dave", 65, "Boon Lay");
        User user5 = new User("Bob", 19, "Clementi");
        User user6 = new User("Alice", 29, "Queensway");
        User user7 = new User("Aaron", 30, "Hougang");

        HashMap<Integer, User> userHash = new HashMap<>();

        userHash.put(1,user1);
        userHash.put(2,user2);
        userHash.put(3,user3);
        userHash.put(4,user4);
        userHash.put(5,user5);
        userHash.put(6,user6);
        userHash.put(7,user7);

        System.out.println("--------------------------------------------");
        System.out.println("Before Filtering/Limiting");
        System.out.println(userHash);
        System.out.println("Map Size: "+ userHash.size());


        Map<Integer, User> filteredUserHash = userHash.entrySet()
                .stream()
                .filter(x->x.getValue().age<20)
                .collect(Collectors.toMap(x->x.getKey(), x-> x.getValue()));
        System.out.println("--------------------------------------------");
        System.out.println("After Age Filtering");
        System.out.println(filteredUserHash);
        System.out.println("Map Size: "+ filteredUserHash.size());

        Map.Entry<Integer, User> firstAName = userHash.entrySet()
                .stream()
                .filter(x->x.getValue().name.startsWith("A"))
                .findFirst()
                .orElse(null);
//                .limit(1)
//                .collect(Collectors.toMap(x->x.getKey(), x-> x.getValue()));
        System.out.println("--------------------------------------------");
        System.out.println("After Name Filtering and Limit ver 1");
        System.out.println(firstAName);


        Map<Integer, User> firstNameA = userHash.entrySet()
                .stream()
                .filter(x->x.getValue().name.startsWith("A"))
//                .findFirst()
//                .orElse(null);
                .limit(1)
                .collect(Collectors.toMap(x->x.getKey(), x-> x.getValue()));
        System.out.println("--------------------------------------------");
        System.out.println("After Name Filtering and Limit ver 2");
        System.out.println(firstNameA);






    }
}
