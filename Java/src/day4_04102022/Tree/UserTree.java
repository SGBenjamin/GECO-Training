package day4_04102022.Tree;

import java.util.Set;
import java.util.TreeSet;

public class UserTree {
    public static void main(String[] args) {
        Set<User> userTreeSet = new TreeSet<User>();
        User user1 = new User("Adam", 25);
        User user2 = new User("Charlie", 18);
        User user3 = new User("Ester", 45);
        User user4 = new User("Dave", 65);
        User user5 = new User("Bob", 45);

        userTreeSet.add(user1);
        userTreeSet.add(user2);
        userTreeSet.add(user3);
        userTreeSet.add(user4);
        userTreeSet.add(user5);

        System.out.println(userTreeSet);

    }
}
