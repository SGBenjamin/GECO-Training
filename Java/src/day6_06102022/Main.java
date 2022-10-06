package day6_06102022;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import static java.lang.Thread.sleep;

public class Main {

    public static void main(String[] args) throws IOException {

        User user1 = new User("Adam", 25, "Choa Chu Kang");
        User user2 = new User("Charlie", 18, "Bukit Panjang");
        User user3 = new User("Ester", 13, "Jurong East");
        User user4 = new User("Dave", 65, "Boon Lay");
        User user5 = new User("Bob", 19, "Clementi");
        User user6 = new User("Alice", 29, "Queensway");
        User user7 = new User("Aaron", 30, "Hougang");
        User user8 = new User("George",35, "Senkang");
        User user9 = new User("Henry",45, "Pasir Ris");
        User user10 = new User("Issac",35, "Tuas");


        ArrayList<User> userArrayList = new ArrayList<>();

        userArrayList.add(user1);
        userArrayList.add(user2);
        userArrayList.add(user3);
        userArrayList.add(user4);
        userArrayList.add(user5);
        userArrayList.add(user6);
        userArrayList.add(user7);
        userArrayList.add(user8);
        userArrayList.add(user9);
        userArrayList.add(user10);

        String filename = "src\\day6_06102022\\userFile.txt";

        try{
            File userFile = new File(filename);
            if(userFile.createNewFile()){
                System.out.println("File Created: "+userFile.getName());
            }else{
                System.out.println(userFile.getName()+" already Exists");
            }
        } catch (IOException e) {
            System.out.println("Error");
            e.printStackTrace();
        }

        FileWriter fileWriter = new FileWriter(filename);
        DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        for (User user : userArrayList){
            try{

                LocalDateTime timeNow = LocalDateTime.now();
                fileWriter.write("Username: "+ user.getName());
                fileWriter.write(System.getProperty( "line.separator" ));
                fileWriter.write("Age: "+Integer.toString(user.getAge()));
                fileWriter.write(System.getProperty( "line.separator" ));
                fileWriter.write("Address: "+user.getAddress());
                fileWriter.write(System.getProperty( "line.separator" ));
                fileWriter.write("Time: "+dtf.format(timeNow));
                fileWriter.write(System.getProperty( "line.separator" ));
                fileWriter.write("-----------------------");
                fileWriter.write(System.getProperty( "line.separator" ));
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        fileWriter.flush();
        fileWriter.close();
    }
}
