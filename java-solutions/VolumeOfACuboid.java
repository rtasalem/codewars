/**
 * Created by user5196477. 8 kyu.
 * 
 * Bob needs a fast way to calculate the volume of a cuboid with three values:
 * the length, width and height of the cuboid. Write a function to help Bob with
 * this calculation.
 */

public class VolumeOfACuboid {

    public static double getVolumeOfCuboid(final double length, final double width, final double height) {
        double result = length * width * height;
        return result;
    }

}