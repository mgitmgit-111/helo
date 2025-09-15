# helo
Got it 👍
I’ll give you **Java solutions for all 18 programs** in a clear and complete way.
Each program is self-contained (you can copy–paste and run directly).

---

## **1. Fibonacci Series up till a given number**

```java
import java.util.Scanner;

public class FibonacciSeries {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter limit: ");
        int n = sc.nextInt();
        int a = 0, b = 1;
        System.out.print("Fibonacci: ");
        while (a <= n) {
            System.out.print(a + " ");
            int temp = a + b;
            a = b;
            b = temp;
        }
    }
}
```

---

## **2. Bitwise Operators**

```java
public class BitwiseDemo {
    public static void main(String[] args) {
        int num = 8; 
        System.out.println("Original: " + num);
        System.out.println("Left shift: " + (num << 1));
        System.out.println("Right shift: " + (num >> 1));
        System.out.println("Unsigned Right shift: " + (num >>> 1));
    }
}
```

---

## **3. Prime Number Check**

```java
import java.util.Scanner;

public class PrimeCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean prime = true;
        if (n <= 1) prime = false;
        else {
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    prime = false;
                    break;
                }
            }
        }
        System.out.println(n + (prime ? " is Prime" : " is Not Prime"));
    }
}
```

---

## **4. Pattern**

```java
public class PatternDemo {
    public static void main(String[] args) {
        for (int i = 5; i >= 1; i--) {
            for (int j = 5; j >= 6 - i; j--) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
```

---

## **5. Jump Statement in Matrix**

```java
public class MatrixJump {
    public static void main(String[] args) {
        int[][] matrix = {{10, 20}, {30, 60}, {40, 25}};
        outer: for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] > 50) {
                    System.out.println("Found number > 50: " + matrix[i][j]);
                    break outer;
                }
            }
        }
    }
}
```

---

## **6. Matrix Multiplication**

```java
public class MatrixMultiplication {
    public static void main(String[] args) {
        int[][] a = {{1,2},{3,4}};
        int[][] b = {{5,6},{7,8}};
        int[][] c = new int[2][2];

        for(int i=0;i<2;i++){
            for(int j=0;j<2;j++){
                for(int k=0;k<2;k++){
                    c[i][j]+=a[i][k]*b[k][j];
                }
            }
        }

        System.out.println("Result:");
        for(int[] row:c){
            for(int val:row){
                System.out.print(val+" ");
            }
            System.out.println();
        }
    }
}
```

---

## **7. Fahrenheit to Celsius**

```java
import java.util.Scanner;

public class TempConvert {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double f = sc.nextDouble();
        double c = (5.0/9) * (f - 32);
        System.out.println("Celsius: " + c);
    }
}
```

---

## **8. Max in Array**

```java
public class MaxArray {
    public static void main(String[] args) {
        int[] arr = {10, 25, 99, 45, 88};
        int max = arr[0];
        for (int n : arr) {
            if (n > max) max = n;
        }
        System.out.println("Max = " + max);
    }
}
```

---

## **9. Box with Constructor Overloading**

```java
class Box {
    double length, width, height;

    Box() { this.length = this.width = this.height = 1; }
    Box(double side) { this.length = this.width = this.height = side; }
    Box(double l, double w, double h) { this.length = l; this.width = w; this.height = h; }

    double volume() { return length * width * height; }
}

public class BoxDemo {
    public static void main(String[] args) {
        Box b1 = new Box();
        Box b2 = new Box(5);
        Box b3 = new Box(2,3,4);

        System.out.println("b1 volume: " + b1.volume());
        System.out.println("b2 volume: " + b2.volume());
        System.out.println("b3 volume: " + b3.volume());
    }
}
```

---

## **10. Abstract Shape**

```java
abstract class Shape {
    int a, b;
    abstract void printArea();
}

class Rectangle extends Shape {
    Rectangle(int x, int y) { a = x; b = y; }
    void printArea() { System.out.println("Rectangle Area: " + (a*b)); }
}

class Triangle extends Shape {
    Triangle(int x, int y) { a = x; b = y; }
    void printArea() { System.out.println("Triangle Area: " + (0.5*a*b)); }
}

class Circle extends Shape {
    Circle(int r) { a = r; }
    void printArea() { System.out.println("Circle Area: " + (Math.PI*a*a)); }
}

public class ShapeDemo {
    public static void main(String[] args) {
        new Rectangle(5,6).printArea();
        new Triangle(5,6).printArea();
        new Circle(5).printArea();
    }
}
```

---

## **11. Inheritance, super, overriding**

```java
class Animal {
    String name = "Animal";
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    String name = "Dog";
    void sound() {
        super.sound();
        System.out.println("Bark");
    }
    void showNames() {
        System.out.println("Child: " + name);
        System.out.println("Parent: " + super.name);
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
        ((Dog)a).showNames();
    }
}
```

---

## **12. Multilevel Inheritance**

```java
class A {
    A() { System.out.println("A constructor"); }
}
class B extends A {
    B() { super(); System.out.println("B constructor"); }
}
class C extends B {
    C() { super(); System.out.println("C constructor"); }
}

public class MultiLevel {
    public static void main(String[] args) {
        new C();
    }
}
```

---

## **13. Multiple Inheritance via Interface**

```java
interface Flyer { void fly(); }

class Bird {
    void eat() { System.out.println("Eating..."); }
}

class Sparrow extends Bird implements Flyer {
    public void fly() { System.out.println("Flying..."); }
}

public class MultipleInheritance {
    public static void main(String[] args) {
        Sparrow s = new Sparrow();
        s.eat();
        s.fly();
    }
}
```

---

## **14. String Methods**

```java
public class StringMethods {
    public static void main(String[] args) {
        String s = " Hello Java ";
        System.out.println(s.length());
        System.out.println(s.trim());
        System.out.println(s.toUpperCase());
        System.out.println(s.toLowerCase());
        System.out.println(s.substring(1,6));
        System.out.println(s.indexOf("Java"));
        System.out.println(s.replace("Java","World"));
        System.out.println(s.equals("hello"));
        System.out.println(s.equalsIgnoreCase(" hello java "));
    }
}
```

---

## **15. Doubly Linked List**

```java
class Node {
    int data;
    Node prev, next;
    Node(int d) { data = d; }
}

class DoublyLinkedList {
    Node head;

    void append(int d) {
        Node n = new Node(d);
        if (head == null) { head = n; return; }
        Node temp = head;
        while (temp.next != null) temp = temp.next;
        temp.next = n;
        n.prev = temp;
    }

    void remove(int d) {
        Node temp = head;
        while (temp != null) {
            if (temp.data == d) {
                if (temp.prev != null) temp.prev.next = temp.next;
                if (temp.next != null) temp.next.prev = temp.prev;
                if (temp == head) head = temp.next;
                return;
            }
            temp = temp.next;
        }
    }

    void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data+" ");
            temp = temp.next;
        }
        System.out.println();
    }
}

public class DLLDemo {
    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        list.append(10); list.append(20); list.append(30);
        list.display();
        list.remove(20);
        list.display();
    }
}
```

---

## **16. Packages**

*(Assume two files in different packages)*

`mypack1/MyClass.java`

```java
package mypack1;
public class MyClass {
    protected void show() { System.out.println("Protected method in MyClass"); }
}
```

`mypack2/Test.java`

```java
package mypack2;
import mypack1.MyClass;

public class Test extends MyClass {
    public static void main(String[] args) {
        Test t = new Test();
        t.show(); // Accessible since protected and subclass
    }
}
```

---

## **17. Static Members**

```java
class StaticDemo {
    static int count = 0;
    int id;

    StaticDemo(int id) {
        this.id = id;
        count++;
    }

    static void showCount() {
        System.out.println("Count = " + count);
        // Cannot access 'id' here (non-static)
    }

    void showId() {
        System.out.println("ID = " + id);
        System.out.println("Static count accessible: " + count);
    }
}

public class StaticTest {
    public static void main(String[] args) {
        StaticDemo d1 = new StaticDemo(1);
        StaticDemo d2 = new StaticDemo(2);

        d1.showId();
        StaticDemo.showCount();
        System.out.println("Accessing static from outside: " + StaticDemo.count);
    }
}
```

---

## **18. Final Keyword**

```java
final class FinalClass {
    final int x = 10;
    final void display() { System.out.println("Final method in final class"); }
}

// class Child extends FinalClass {} // Not allowed

class Demo {
    final int y;
    Demo(int val) { y = val; }
}

public class FinalDemo {
    public static void main(String[] args) {
        FinalClass f = new FinalClass();
        f.display();
        Demo d = new Demo(100);
        System.out.println("Final variable y = " + d.y);
    }
}
```

---

✅ All 18 programs are now covered in **Java**.

Do you want me to **combine them into one single file with a menu system** (so you can run all from one program), or keep them as **separate individual files**?
