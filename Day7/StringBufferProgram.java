package Day7;

public class StringBufferProgram {
    public static void main(String[] args) {
        StringBuffer str = new StringBuffer("Hello World");

        str.delete(0, str.length());
        System.out.println("Clear the String buffer using the delete method."+str);

        str.append("Again Hello");

        str.setLength(0);
        System.out.println("Using set lenght to 0"+str);

    }
}