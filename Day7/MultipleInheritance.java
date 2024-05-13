package Day7;


interface Lion{
    void roar();
}

interface Dog{
    void bark();
}

class Animal implements Lion, Dog{

    public void roar() {
        System.out.println("The Lion is Roaring");
    }

    public void bark() {
       System.out.println("Dog is barking");
    }

}


public class MultipleInheritance {
    public static void main(String[] args) {
        Animal obj = new Animal();
        obj.roar();
        obj.bark();
    }
}
