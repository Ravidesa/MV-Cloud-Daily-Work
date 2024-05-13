package Day7;

class A{
    int a = 10;
}

class B extends A{
    int b = 20;
}

class C extends B{
    int c = 30;
}

public class MultiLevelInheritance {
    public static void main(String[] args) {
        A obj1 = new A();
        B obj2 = new B();
        C obj3 = new C();

        System.out.println("For Class A --> "+ obj1.a);        
        System.out.println("For Class B --> "+ obj2.a +" "+ obj2.b);        
        System.out.println("For Class C --> "+ obj3.a +" "+ obj3.b +" "+ obj3.c);        
    }
}
