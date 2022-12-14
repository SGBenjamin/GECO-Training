package day5_05102022;


import java.util.ArrayList;
import java.util.HashMap;
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
        User user8 = new User();
        user8.setName("George");
        user8.setAge(17);
        user8.setAddress("Pasir Ris");

        HashMap<Integer, User> userHash = new HashMap<>();

        userHash.put(1,user1);
        userHash.put(2,user2);
        userHash.put(3,user3);
        userHash.put(4,user4);
        userHash.put(5,user5);
        userHash.put(6,user6);
        userHash.put(7,user7);
        userHash.put(8,user8);

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

        Map.Entry<Integer, User> firstNameAV1 = userHash.entrySet()
                .stream()
                .filter(x->x.getValue().name.startsWith("A"))
                .findFirst()
                .orElse(null);
//                .limit(1)
//                .collect(Collectors.toMap(x->x.getKey(), x-> x.getValue()));
        System.out.println("--------------------------------------------");
        System.out.println("After Name Filtering and Limit ver 1");
        System.out.println(firstNameAV1);



        Map<Integer, User> firstNameAV2 = userHash.entrySet()
                .stream()
                .filter(x->x.getValue().name.startsWith("A"))
//                .findFirst()
//                .orElse(null);
                .limit(1)
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
        System.out.println("--------------------------------------------");
        System.out.println("After Name Filtering and Limit ver 2");
        System.out.println(firstNameAV2);






    }
}
