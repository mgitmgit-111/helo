// Java programs data
const programs = [
  { "id": 1, "title": "Fibonacci Series up till a given number", "code": "import java.util.Scanner;\n\npublic class FibonacciSeries {\n public static void main(String[] args) {\n Scanner sc = new Scanner(System.in);\n System.out.print(\"Enter limit: \");\n int n = sc.nextInt();\n int a = 0, b = 1;\n System.out.print(\"Fibonacci: \");\n while (a <= n) {\n System.out.print(a + \" \");\n int temp = a + b;\n a = b;\n b = temp;\n }\n }\n}" },
  { "id": 2, "title": "Bitwise Operators", "code": "public class BitwiseDemo {\n public static void main(String[] args) {\n int num = 8; \n System.out.println(\"Original: \" + num);\n System.out.println(\"Left shift: \" + (num << 1));\n System.out.println(\"Right shift: \" + (num >> 1));\n System.out.println(\"Unsigned Right shift: \" + (num >>> 1));\n }\n}" },
  { "id": 3, "title": "Prime Number Check", "code": "import java.util.Scanner;\n\npublic class PrimeCheck {\n public static void main(String[] args) {\n Scanner sc = new Scanner(System.in);\n int n = sc.nextInt();\n boolean prime = true;\n if (n <= 1) prime = false;\n else {\n for (int i = 2; i <= Math.sqrt(n); i++) {\n if (n % i == 0) {\n prime = false;\n break;\n }\n }\n }\n System.out.println(n + (prime ? \" is Prime\" : \" is Not Prime\"));\n }\n}" },
  { "id": 4, "title": "Pattern", "code": "public class PatternDemo {\n public static void main(String[] args) {\n for (int i = 5; i >= 1; i--) {\n for (int j = 5; j >= 6 - i; j--) {\n System.out.print(j + \" \");\n }\n System.out.println();\n }\n }\n}" },
  { "id": 5, "title": "Jump Statement in Matrix", "code": "public class MatrixJump {\n public static void main(String[] args) {\n int[][] matrix = {{10, 20}, {30, 60}, {40, 25}};\n outer: for (int i = 0; i < matrix.length; i++) {\n for (int j = 0; j < matrix[i].length; j++) {\n if (matrix[i][j] > 50) {\n System.out.println(\"Found number > 50: \" + matrix[i][j]);\n break outer;\n }\n }\n }\n }\n}" },
  { "id": 6, "title": "Matrix Multiplication", "code": "public class MatrixMultiplication {\n public static void main(String[] args) {\n int[][] a = {{1,2},{3,4}};\n int[][] b = {{5,6},{7,8}};\n int[][] c = new int[2][2];\n\n for(int i=0;i<2;i++){\n for(int j=0;j<2;j++){\n for(int k=0;k<2;k++){\n c[i][j]+=a[i][k]*b[k][j];\n }\n }\n }\n\n System.out.println(\"Result:\");\n for(int[] row:c){\n for(int val:row){\n System.out.print(val+\" \");\n }\n System.out.println();\n }\n }\n}" },
  { "id": 7, "title": "Fahrenheit to Celsius", "code": "import java.util.Scanner;\n\npublic class TempConvert {\n public static void main(String[] args) {\n Scanner sc = new Scanner(System.in);\n double f = sc.nextDouble();\n double c = (5.0/9) * (f - 32);\n System.out.println(\"Celsius: \" + c);\n }\n}" },
  { "id": 8, "title": "Max in Array", "code": "public class MaxArray {\n public static void main(String[] args) {\n int[] arr = {10, 25, 99, 45, 88};\n int max = arr[0];\n for (int n : arr) {\n if (n > max) max = n;\n }\n System.out.println(\"Max = \" + max);\n }\n}" },
  { "id": 9, "title": "Box with Constructor Overloading", "code": "class Box {\n double length, width, height;\n\n Box() { this.length = this.width = this.height = 1; }\n Box(double side) { this.length = this.width = this.height = side; }\n Box(double l, double w, double h) { this.length = l; this.width = w; this.height = h; }\n\n double volume() { return length * width * height; }\n}\n\npublic class BoxDemo {\n public static void main(String[] args) {\n Box b1 = new Box();\n Box b2 = new Box(5);\n Box b3 = new Box(2,3,4);\n\n System.out.println(\"b1 volume: \" + b1.volume());\n System.out.println(\"b2 volume: \" + b2.volume());\n System.out.println(\"b3 volume: \" + b3.volume());\n }\n}" },
  { "id": 10, "title": "Abstract Shape", "code": "abstract class Shape {\n int a, b;\n abstract void printArea();\n}\n\nclass Rectangle extends Shape {\n Rectangle(int x, int y) { a = x; b = y; }\n void printArea() { System.out.println(\"Rectangle Area: \" + (a*b)); }\n}\n\nclass Triangle extends Shape {\n Triangle(int x, int y) { a = x; b = y; }\n void printArea() { System.out.println(\"Triangle Area: \" + (0.5*a*b)); }\n}\n\nclass Circle extends Shape {\n Circle(int r) { a = r; }\n void printArea() { System.out.println(\"Circle Area: \" + (Math.PI*a*a)); }\n}\n\npublic class ShapeDemo {\n public static void main(String[] args) {\n new Rectangle(5,6).printArea();\n new Triangle(5,6).printArea();\n new Circle(5).printArea();\n }\n}" },
  { "id": 11, "title": "Inheritance, super, overriding", "code": "class Animal {\n String name = \"Animal\";\n void sound() { System.out.println(\"Some sound\"); }\n}\n\nclass Dog extends Animal {\n String name = \"Dog\";\n void sound() {\n super.sound();\n System.out.println(\"Bark\");\n }\n void showNames() {\n System.out.println(\"Child: \" + name);\n System.out.println(\"Parent: \" + super.name);\n }\n}\n\npublic class InheritanceDemo {\n public static void main(String[] args) {\n Animal a = new Dog();\n a.sound();\n ((Dog)a).showNames();\n }\n}" },
  { "id": 12, "title": "Multilevel Inheritance", "code": "class A {\n A() { System.out.println(\"A constructor\"); }\n}\nclass B extends A {\n B() { super(); System.out.println(\"B constructor\"); }\n}\nclass C extends B {\n C() { super(); System.out.println(\"C constructor\"); }\n}\n\npublic class MultiLevel {\n public static void main(String[] args) {\n new C();\n }\n}" },
  { "id": 13, "title": "Multiple Inheritance via Interface", "code": "interface Flyer { void fly(); }\n\nclass Bird {\n void eat() { System.out.println(\"Eating...\"); }\n}\n\nclass Sparrow extends Bird implements Flyer {\n public void fly() { System.out.println(\"Flying...\"); }\n}\n\npublic class MultipleInheritance {\n public static void main(String[] args) {\n Sparrow s = new Sparrow();\n s.eat();\n s.fly();\n }\n}" },
  { "id": 14, "title": "String Methods", "code": "public class StringMethods {\n public static void main(String[] args) {\n String s = \" Hello Java \";\n System.out.println(s.length());\n System.out.println(s.trim());\n System.out.println(s.toUpperCase());\n System.out.println(s.toLowerCase());\n System.out.println(s.substring(1,6));\n System.out.println(s.indexOf(\"Java\"));\n System.out.println(s.replace(\"Java\",\"World\"));\n System.out.println(s.equals(\"hello\"));\n System.out.println(s.equalsIgnoreCase(\" hello java \"));\n }\n}" },
  { "id": 15, "title": "Doubly Linked List", "code": "class Node {\n int data;\n Node prev, next;\n Node(int d) { data = d; }\n}\n\nclass DoublyLinkedList {\n Node head;\n\n void append(int d) {\n Node n = new Node(d);\n if (head == null) { head = n; return; }\n Node temp = head;\n while (temp.next != null) temp = temp.next;\n temp.next = n;\n n.prev = temp;\n }\n\n void remove(int d) {\n Node temp = head;\n while (temp != null) {\n if (temp.data == d) {\n if (temp.prev != null) temp.prev.next = temp.next;\n if (temp.next != null) temp.next.prev = temp.prev;\n if (temp == head) head = temp.next;\n return;\n }\n temp = temp.next;\n }\n }\n\n void display() {\n Node temp = head;\n while (temp != null) {\n System.out.print(temp.data+\" \");\n temp = temp.next;\n }\n System.out.println();\n }\n}\n\npublic class DLLDemo {\n public static void main(String[] args) {\n DoublyLinkedList list = new DoublyLinkedList();\n list.append(10); list.append(20); list.append(30);\n list.display();\n list.remove(20);\n list.display();\n }\n}" },
  { "id": 16, "title": "Packages", "code": "// mypack1/MyClass.java\npackage mypack1;\npublic class MyClass {\n protected void show() { System.out.println(\"Protected method in MyClass\"); }\n}\n\n// mypack2/Test.java\npackage mypack2;\nimport mypack1.MyClass;\n\npublic class Test extends MyClass {\n public static void main(String[] args) {\n Test t = new Test();\n t.show(); // Accessible since protected and subclass\n }\n}" },
  { "id": 17, "title": "Static Members", "code": "class StaticDemo {\n static int count = 0;\n int id;\n\n StaticDemo(int id) {\n this.id = id;\n count++;\n }\n\n static void showCount() {\n System.out.println(\"Count = \" + count);\n // Cannot access 'id' here (non-static)\n }\n\n void showId() {\n System.out.println(\"ID = \" + id);\n System.out.println(\"Static count accessible: \" + count);\n }\n}\n\npublic class StaticTest {\n public static void main(String[] args) {\n StaticDemo d1 = new StaticDemo(1);\n StaticDemo d2 = new StaticDemo(2);\n\n d1.showId();\n StaticDemo.showCount();\n System.out.println(\"Accessing static from outside: \" + StaticDemo.count);\n }\n}" },
  { "id": 18, "title": "Final Keyword", "code": "final class FinalClass {\n final int x = 10;\n final void display() { System.out.println(\"Final method in final class\"); }\n}\n\n// class Child extends FinalClass {} // Not allowed\n\nclass Demo {\n final int y;\n Demo(int val) { y = val; }\n}\n\npublic class FinalDemo {\n public static void main(String[] args) {\n FinalClass f = new FinalClass();\n f.display();\n Demo d = new Demo(100);\n System.out.println(\"Final variable y = \" + d.y);\n }\n}" },
  { "id": 19, "title": "Mouse Events (AWT Frame)", "code": "import java.awt.*;\nimport java.awt.event.*;\n\npublic class MouseEventsDemo extends Frame implements MouseListener, MouseMotionListener {\n Label l;\n public MouseEventsDemo() {\n super(\"Mouse Events Demo\");\n setSize(400,200);\n setLayout(new FlowLayout());\n l = new Label(\"No event\");\n add(l);\n addMouseListener(this);\n addMouseMotionListener(this);\n addWindowListener(new WindowAdapter() {\n public void windowClosing(WindowEvent e) {\n dispose();\n System.exit(0);\n }\n });\n setVisible(true);\n }\n public void mouseClicked(MouseEvent e) { l.setText(\"Clicked at \"+e.getX()+\",\"+e.getY()); }\n public void mousePressed(MouseEvent e) { l.setText(\"Pressed at \"+e.getX()+\",\"+e.getY()); }\n public void mouseReleased(MouseEvent e) { l.setText(\"Released at \"+e.getX()+\",\"+e.getY()); }\n public void mouseEntered(MouseEvent e) { l.setText(\"Mouse entered\"); }\n public void mouseExited(MouseEvent e) { l.setText(\"Mouse exited\"); }\n public void mouseDragged(MouseEvent e) { l.setText(\"Dragged at \"+e.getX()+\",\"+e.getY()); }\n public void mouseMoved(MouseEvent e) { l.setText(\"Moved at \"+e.getX()+\",\"+e.getY()); }\n public static void main(String[] a) { new MouseEventsDemo(); }\n}" },
  { "id": 20, "title": "Factorial Applet (Swing JFrame)", "code": "import javax.swing.*;\nimport java.awt.*;\nimport java.awt.event.*;\n\npublic class FactorialApplet extends JFrame implements ActionListener {\n JTextField input, output;\n JButton compute;\n public FactorialApplet() {\n super(\"Factorial\");\n setLayout(new FlowLayout());\n add(new JLabel(\"Number:\"));\n input = new JTextField(10);\n add(input);\n compute = new JButton(\"Compute\");\n compute.addActionListener(this);\n add(compute);\n add(new JLabel(\"Factorial:\"));\n output = new JTextField(20);\n output.setEditable(false);\n add(output);\n setDefaultCloseOperation(EXIT_ON_CLOSE);\n pack();\n setLocationRelativeTo(null);\n setVisible(true);\n }\n public void actionPerformed(ActionEvent e) {\n try {\n long n = Long.parseLong(input.getText());\n if (n < 0) {\n output.setText(\"Undefined\");\n return;\n }\n long f = 1;\n for (long i = 2; i <= n; i++) f *= i;\n output.setText(String.valueOf(f));\n } catch (Exception ex) {\n output.setText(\"Error\");\n }\n }\n public static void main(String[] args) {\n new FactorialApplet();\n }\n}" },
  { "id": 21, "title": "Table using Labels", "code": "import javax.swing.*; \nimport java.awt.*;\n\nclass TableLabels{\n public static void main(String[] a){\n JFrame f=new JFrame(); \n JPanel p=new JPanel(new GridLayout(3,3));\n for(int i=1;i<=9;i++) p.add(new JLabel(\"C\"+i));\n f.add(p); \n f.pack(); \n f.setVisible(true); \n f.setDefaultCloseOperation(3);\n }\n}" },
  { "id": 22, "title": "Simple Message", "code": "import javax.swing.*; \nimport java.awt.*;\n\nclass SimpleMessage extends JFrame{\n SimpleMessage(){ \n setSize(250,120); \n setVisible(true); \n setDefaultCloseOperation(3); \n }\n public void paint(Graphics g){ \n super.paint(g); \n g.drawString(\"Hello!\",80,80); \n }\n public static void main(String[] a){\n new SimpleMessage();\n }\n}" },
  { "id": 23, "title": "Parameters Example", "code": "import javax.swing.*; \nimport java.awt.*;\n\nclass ParamsDemo extends JFrame{\n String s;\n ParamsDemo(String m){ \n s=m; \n setSize(250,120); \n setVisible(true); \n setDefaultCloseOperation(3);\n }\n public void paint(Graphics g){\n super.paint(g); \n g.drawString(s,80,80);\n }\n public static void main(String[] a){\n new ParamsDemo(a.length>0?a[0]:\"No param\");\n }\n}" },
  { "id": 24, "title": "Key Events", "code": "import java.awt.*; \nimport java.awt.event.*;\n\nclass KeyEventsDemo extends Frame implements KeyListener{\n Label l=new Label(\"Type\");\n KeyEventsDemo(){\n add(l); \n addKeyListener(this); \n setSize(200,100);\n addWindowListener(new WindowAdapter(){\n public void windowClosing(WindowEvent e){\n System.exit(0);\n }\n }); \n setVisible(true);\n }\n public void keyTyped(KeyEvent e){\n l.setText(e.getKeyChar()+\"\");\n }\n public void keyPressed(KeyEvent e){} \n public void keyReleased(KeyEvent e){}\n public static void main(String[] a){\n new KeyEventsDemo();\n }\n}" },
  { "id": 25, "title": "Multiple Threads", "code": "class MultipleThreads{\n public static void main(String[] a){\n for(int i=1;i<=3;i++) new Thread(()->{\n for(int j=1;j<=3;j++) \n System.out.println(Thread.currentThread().getId()+\" \"+j);\n }).start();\n }\n}" },
  { "id": 26, "title": "Control Main Thread", "code": "class MainThreadControl{\n public static void main(String[] a)throws Exception{\n Thread t=new Thread(()->System.out.println(\"Worker\"));\n t.start(); \n t.join(); \n System.out.println(\"End\");\n }\n}" },
  { "id": 27, "title": "Extending Thread", "code": "class ExtendingThread extends Thread{\n public void run(){ \n System.out.println(\"Running\"); \n }\n public static void main(String[] a){ \n new ExtendingThread().start(); \n }\n}" },
  { "id": 28, "title": "Mini Calculator", "code": "import javax.swing.*; \nimport java.awt.*; \nimport java.awt.event.*;\n\nclass SimpleCalculator extends JFrame implements ActionListener{\n JTextField t=new JTextField(10); \n double a; \n String op=\"\";\n SimpleCalculator(){ \n setLayout(new FlowLayout());\n add(t);\n for(String s:\"7 8 9 + 4 5 6 - 1 2 3 * 0 C = %\".split(\" \")){\n JButton b=new JButton(s); \n b.addActionListener(this); \n add(b);\n }\n setSize(250,200); \n setVisible(true); \n setDefaultCloseOperation(3);\n }\n public void actionPerformed(ActionEvent e){\n String c=e.getActionCommand();\n if(c.matches(\"\\\\d\")) t.setText(t.getText()+c);\n else if(c.equals(\"C\")) t.setText(\"\");\n else if(c.equals(\"=\")){\n double b=Double.parseDouble(t.getText());\n t.setText(\"\"+(op.equals(\"+\")?a+b:op.equals(\"-\")?a-b:op.equals(\"*\")?a*b:a%b));\n } else{ \n a=Double.parseDouble(t.getText()); \n op=c; \n t.setText(\"\"); \n }\n }\n public static void main(String[] a){\n new SimpleCalculator();\n }\n}" },
  { "id": 29, "title": "Integer Division", "code": "import javax.swing.*; \nimport java.awt.*; \nimport java.awt.event.*;\n\nclass IntegerDivision extends JFrame implements ActionListener{\n JTextField x=new JTextField(5), y=new JTextField(5);\n IntegerDivision(){ \n setLayout(new FlowLayout());\n add(x); \n add(y); \n JButton b=new JButton(\"/\"); \n add(b);\n b.addActionListener(this); \n setSize(200,120); \n setVisible(true); \n setDefaultCloseOperation(3);\n }\n public void actionPerformed(ActionEvent e){\n try{\n int a=Integer.parseInt(x.getText()), b=Integer.parseInt(y.getText());\n JOptionPane.showMessageDialog(this,\"Result:\"+a/b);\n }catch(Exception ex){\n JOptionPane.showMessageDialog(this,\"Error\");\n }\n }\n public static void main(String[] a){\n new IntegerDivision();\n }\n}" },
  { "id": 30, "title": "Adapter Class Demo", "code": "import java.awt.*; \nimport java.awt.event.*;\n\nclass AdapterDemo extends Frame{\n AdapterDemo(){\n addMouseListener(new MouseAdapter(){\n public void mouseClicked(MouseEvent e){\n System.out.println(\"Click\");\n }\n });\n setSize(200,100); \n setVisible(true);\n addWindowListener(new WindowAdapter(){\n public void windowClosing(WindowEvent e){\n System.exit(0);\n }\n });\n }\n public static void main(String[] a){\n new AdapterDemo();\n }\n}" }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const programsContainer = document.getElementById('programsContainer');
const resultsCount = document.getElementById('resultsCount');
const copyNotification = document.getElementById('copyNotification');

// State
let filteredPrograms = [...programs];
let searchTimeout = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderPrograms(programs);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality with debouncing
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);
    });

    // Real-time search (more responsive)
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        if (query.length < 2 && query.length > 0) {
            // For short queries, update immediately
            clearTimeout(searchTimeout);
            handleSearch(query);
        }
    });
}

// Handle search functionality
function handleSearch(query) {
    if (!query.trim()) {
        filteredPrograms = [...programs];
        renderPrograms(filteredPrograms);
        updateResultsCount(filteredPrograms.length);
        return;
    }

    const searchTerm = query.toLowerCase();
    filteredPrograms = programs.filter(program =>
        program.title.toLowerCase().includes(searchTerm) ||
        program.code.toLowerCase().includes(searchTerm)
    );
    renderPrograms(filteredPrograms, searchTerm);
    updateResultsCount(filteredPrograms.length);
}

// Render programs to the DOM
function renderPrograms(programsToRender, searchTerm = '') {
    if (programsToRender.length === 0) {
        programsContainer.innerHTML = `<div class="no-results">No programs found. Try adjusting your search terms or browse all programs.</div>`;
        return;
    }

    programsContainer.innerHTML = programsToRender
        .map(program => {
            let highlightedTitle = program.title;
            if (searchTerm) {
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                highlightedTitle = program.title.replace(regex, '<span class="highlight">$1</span>');
            }

            return `
                <div class="program-item">
                    <div class="program-header">
                        <h3 class="program-title">${highlightedTitle}</h3>
                        <button class="copy-button" onclick="copyToClipboard('${escapeForButton(program.code)}')">
                            📋 Copy
                        </button>
                    </div>
                    <pre><code class="code-block">${escapeHtml(program.code)}</code></pre>
                </div>
            `;
        })
        .join('');
}

// Update results count
function updateResultsCount(count) {
    resultsCount.textContent = `${count} program${count !== 1 ? 's' : ''} found`;
}

// Copy to clipboard functionality
function copyToClipboard(code) {
    const decodedCode = decodeURIComponent(code);
    navigator.clipboard.writeText(decodedCode).then(() => {
        showCopyNotification();
    }).catch(() => {
        alert('Failed to copy to clipboard');
    });
}

// Show copy notification
function showCopyNotification() {
    copyNotification.style.display = 'block';
    setTimeout(() => {
        copyNotification.style.display = 'none';
    }, 2000);
}

// Escape HTML characters
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Escape for button onclick attribute
function escapeForButton(text) {
    return encodeURIComponent(text);
}
