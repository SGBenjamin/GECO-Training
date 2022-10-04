package day4_04102022.Tree;

import com.sun.source.tree.Tree;
import com.sun.source.tree.TreeVisitor;

import java.util.Comparator;

public class User implements Comparable<User> {
    String name;
    int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(User o) {
        return this.name.compareToIgnoreCase(o.getName());
    }


}
