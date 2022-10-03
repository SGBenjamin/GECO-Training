package day3_03102022.Abstract_Interface;

public class Honda extends Vehicle implements VehicleInterfaceSize, VehicleInterfaceColor {

    public void vehicleSound(){
        System.out.println("The Honda goes VROOOOOM!!!!");
    }
    @Override
    public void vehicleSize() {
        System.out.println("The size of the car is 5m x 3m x 2m");
    }


    @Override
    public void vehicleColor() {
        System.out.println("There are many options for the color of the car");
    }
}
