// Java programs data
const programs = [
    {
        "id": 1,
        "title": "Fibonacci Series up till a given number",
        "code": "import java.util.Scanner;\n\npublic class FibonacciSeries {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Enter limit: \");\n        int n = sc.nextInt();\n        int a = 0, b = 1;\n        System.out.print(\"Fibonacci: \");\n        while (a <= n) {\n            System.out.print(a + \" \");\n            int temp = a + b;\n            a = b;\n            b = temp;\n        }\n    }\n}"
    },
    {
        "id": 2,
        "title": "Bitwise Operators",
        "code": "public class BitwiseDemo {\n    public static void main(String[] args) {\n        int num = 8; \n        System.out.println(\"Original: \" + num);\n        System.out.println(\"Left shift: \" + (num << 1));\n        System.out.println(\"Right shift: \" + (num >> 1));\n        System.out.println(\"Unsigned Right shift: \" + (num >>> 1));\n    }\n}"
    },
    {
        "id": 3,
        "title": "Prime Number Check",
        "code": "import java.util.Scanner;\n\npublic class PrimeCheck {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        boolean prime = true;\n        if (n <= 1) prime = false;\n        else {\n            for (int i = 2; i <= Math.sqrt(n); i++) {\n                if (n % i == 0) {\n                    prime = false;\n                    break;\n                }\n            }\n        }\n        System.out.println(n + (prime ? \" is Prime\" : \" is Not Prime\"));\n    }\n}"
    },
    {
        "id": 4,
        "title": "Pattern",
        "code": "public class PatternDemo {\n    public static void main(String[] args) {\n        for (int i = 5; i >= 1; i--) {\n            for (int j = 5; j >= 6 - i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}"
    },
    {
        "id": 5,
        "title": "Jump Statement in Matrix",
        "code": "public class MatrixJump {\n    public static void main(String[] args) {\n        int[][] matrix = {{10, 20}, {30, 60}, {40, 25}};\n        outer: for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                if (matrix[i][j] > 50) {\n                    System.out.println(\"Found number > 50: \" + matrix[i][j]);\n                    break outer;\n                }\n            }\n        }\n    }\n}"
    },
    {
        "id": 6,
        "title": "Matrix Multiplication",
        "code": "public class MatrixMultiplication {\n    public static void main(String[] args) {\n        int[][] a = {{1,2},{3,4}};\n        int[][] b = {{5,6},{7,8}};\n        int[][] c = new int[2][2];\n\n        for(int i=0;i<2;i++){\n            for(int j=0;j<2;j++){\n                for(int k=0;k<2;k++){\n                    c[i][j]+=a[i][k]*b[k][j];\n                }\n            }\n        }\n\n        System.out.println(\"Result:\");\n        for(int[] row:c){\n            for(int val:row){\n                System.out.print(val+\" \");\n            }\n            System.out.println();\n        }\n    }\n}"
    },
    {
        "id": 7,
        "title": "Fahrenheit to Celsius",
        "code": "import java.util.Scanner;\n\npublic class TempConvert {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double f = sc.nextDouble();\n        double c = (5.0/9) * (f - 32);\n        System.out.println(\"Celsius: \" + c);\n    }\n}"
    },
    {
        "id": 8,
        "title": "Max in Array",
        "code": "public class MaxArray {\n    public static void main(String[] args) {\n        int[] arr = {10, 25, 99, 45, 88};\n        int max = arr[0];\n        for (int n : arr) {\n            if (n > max) max = n;\n        }\n        System.out.println(\"Max = \" + max);\n    }\n}"
    },
    {
        "id": 9,
        "title": "Box with Constructor Overloading",
        "code": "class Box {\n    double length, width, height;\n\n    Box() { this.length = this.width = this.height = 1; }\n    Box(double side) { this.length = this.width = this.height = side; }\n    Box(double l, double w, double h) { this.length = l; this.width = w; this.height = h; }\n\n    double volume() { return length * width * height; }\n}\n\npublic class BoxDemo {\n    public static void main(String[] args) {\n        Box b1 = new Box();\n        Box b2 = new Box(5);\n        Box b3 = new Box(2,3,4);\n\n        System.out.println(\"b1 volume: \" + b1.volume());\n        System.out.println(\"b2 volume: \" + b2.volume());\n        System.out.println(\"b3 volume: \" + b3.volume());\n    }\n}"
    },
    {
        "id": 10,
        "title": "Abstract Shape",
        "code": "abstract class Shape {\n    int a, b;\n    abstract void printArea();\n}\n\nclass Rectangle extends Shape {\n    Rectangle(int x, int y) { a = x; b = y; }\n    void printArea() { System.out.println(\"Rectangle Area: \" + (a*b)); }\n}\n\nclass Triangle extends Shape {\n    Triangle(int x, int y) { a = x; b = y; }\n    void printArea() { System.out.println(\"Triangle Area: \" + (0.5*a*b)); }\n}\n\nclass Circle extends Shape {\n    Circle(int r) { a = r; }\n    void printArea() { System.out.println(\"Circle Area: \" + (Math.PI*a*a)); }\n}\n\npublic class ShapeDemo {\n    public static void main(String[] args) {\n        new Rectangle(5,6).printArea();\n        new Triangle(5,6).printArea();\n        new Circle(5).printArea();\n    }\n}"
    },
    {
        "id": 11,
        "title": "Inheritance, super, overriding",
        "code": "class Animal {\n    String name = \"Animal\";\n    void sound() { System.out.println(\"Some sound\"); }\n}\n\nclass Dog extends Animal {\n    String name = \"Dog\";\n    void sound() {\n        super.sound();\n        System.out.println(\"Bark\");\n    }\n    void showNames() {\n        System.out.println(\"Child: \" + name);\n        System.out.println(\"Parent: \" + super.name);\n    }\n}\n\npublic class InheritanceDemo {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n        ((Dog)a).showNames();\n    }\n}"
    },
    {
        "id": 12,
        "title": "Multilevel Inheritance",
        "code": "class A {\n    A() { System.out.println(\"A constructor\"); }\n}\nclass B extends A {\n    B() { super(); System.out.println(\"B constructor\"); }\n}\nclass C extends B {\n    C() { super(); System.out.println(\"C constructor\"); }\n}\n\npublic class MultiLevel {\n    public static void main(String[] args) {\n        new C();\n    }\n}"
    },
    {
        "id": 13,
        "title": "Multiple Inheritance via Interface",
        "code": "interface Flyer { void fly(); }\n\nclass Bird {\n    void eat() { System.out.println(\"Eating...\"); }\n}\n\nclass Sparrow extends Bird implements Flyer {\n    public void fly() { System.out.println(\"Flying...\"); }\n}\n\npublic class MultipleInheritance {\n    public static void main(String[] args) {\n        Sparrow s = new Sparrow();\n        s.eat();\n        s.fly();\n    }\n}"
    },
    {
        "id": 14,
        "title": "String Methods",
        "code": "public class StringMethods {\n    public static void main(String[] args) {\n        String s = \" Hello Java \";\n        System.out.println(s.length());\n        System.out.println(s.trim());\n        System.out.println(s.toUpperCase());\n        System.out.println(s.toLowerCase());\n        System.out.println(s.substring(1,6));\n        System.out.println(s.indexOf(\"Java\"));\n        System.out.println(s.replace(\"Java\",\"World\"));\n        System.out.println(s.equals(\"hello\"));\n        System.out.println(s.equalsIgnoreCase(\" hello java \"));\n    }\n}"
    },
    {
        "id": 15,
        "title": "Doubly Linked List",
        "code": "class Node {\n    int data;\n    Node prev, next;\n    Node(int d) { data = d; }\n}\n\nclass DoublyLinkedList {\n    Node head;\n\n    void append(int d) {\n        Node n = new Node(d);\n        if (head == null) { head = n; return; }\n        Node temp = head;\n        while (temp.next != null) temp = temp.next;\n        temp.next = n;\n        n.prev = temp;\n    }\n\n    void remove(int d) {\n        Node temp = head;\n        while (temp != null) {\n            if (temp.data == d) {\n                if (temp.prev != null) temp.prev.next = temp.next;\n                if (temp.next != null) temp.next.prev = temp.prev;\n                if (temp == head) head = temp.next;\n                return;\n            }\n            temp = temp.next;\n        }\n    }\n\n    void display() {\n        Node temp = head;\n        while (temp != null) {\n            System.out.print(temp.data+\" \");\n            temp = temp.next;\n        }\n        System.out.println();\n    }\n}\n\npublic class DLLDemo {\n    public static void main(String[] args) {\n        DoublyLinkedList list = new DoublyLinkedList();\n        list.append(10); list.append(20); list.append(30);\n        list.display();\n        list.remove(20);\n        list.display();\n    }\n}"
    },
    {
        "id": 16,
        "title": "Packages",
        "code": "// mypack1/MyClass.java\npackage mypack1;\npublic class MyClass {\n    protected void show() { System.out.println(\"Protected method in MyClass\"); }\n}\n\n// mypack2/Test.java\npackage mypack2;\nimport mypack1.MyClass;\n\npublic class Test extends MyClass {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.show(); // Accessible since protected and subclass\n    }\n}"
    },
    {
        "id": 17,
        "title": "Static Members",
        "code": "class StaticDemo {\n    static int count = 0;\n    int id;\n\n    StaticDemo(int id) {\n        this.id = id;\n        count++;\n    }\n\n    static void showCount() {\n        System.out.println(\"Count = \" + count);\n        // Cannot access 'id' here (non-static)\n    }\n\n    void showId() {\n        System.out.println(\"ID = \" + id);\n        System.out.println(\"Static count accessible: \" + count);\n    }\n}\n\npublic class StaticTest {\n    public static void main(String[] args) {\n        StaticDemo d1 = new StaticDemo(1);\n        StaticDemo d2 = new StaticDemo(2);\n\n        d1.showId();\n        StaticDemo.showCount();\n        System.out.println(\"Accessing static from outside: \" + StaticDemo.count);\n    }\n}"
    },
    {
        "id": 18,
        "title": "Final Keyword",
        "code": "final class FinalClass {\n    final int x = 10;\n    final void display() { System.out.println(\"Final method in final class\"); }\n}\n\n// class Child extends FinalClass {} // Not allowed\n\nclass Demo {\n    final int y;\n    Demo(int val) { y = val; }\n}\n\npublic class FinalDemo {\n    public static void main(String[] args) {\n        FinalClass f = new FinalClass();\n        f.display();\n        Demo d = new Demo(100);\n        System.out.println(\"Final variable y = \" + d.y);\n    }\n}"
    }
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
        programsContainer.innerHTML = `
            <div class="no-results">
                <h3>No programs found</h3>
                <p>Try adjusting your search terms or browse all programs.</p>
            </div>
        `;
        return;
    }

    programsContainer.innerHTML = programsToRender.map(program => 
        createProgramHTML(program, searchTerm)
    ).join('');

    // Add copy button event listeners
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', handleCopy);
    });
}

// Create HTML for a single program
function createProgramHTML(program, searchTerm = '') {
    const highlightedTitle = highlightText(program.title, searchTerm);
    const highlightedCode = highlightText(program.code, searchTerm);

    return `
        <article class="program-item" data-id="${program.id}">
            <header class="program-header">
                <div>
                    <h2 class="program-title">${highlightedTitle}</h2>
                    <div class="program-number">Program ${program.id}</div>
                </div>
                <button class="copy-button" data-code="${encodeURIComponent(program.code)}">
                    Copy Code
                </button>
            </header>
            <div class="code-block">${highlightedCode}</div>
        </article>
    `;
}

// Highlight search terms in text
function highlightText(text, searchTerm) {
    if (!searchTerm) return escapeHtml(text);
    
    const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
    return escapeHtml(text).replace(regex, '<span class="highlight">$1</span>');
}

// Escape HTML characters
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Handle copy button click
async function handleCopy(event) {
    const button = event.target;
    const code = decodeURIComponent(button.dataset.code);
    
    try {
        // Disable button temporarily
        button.disabled = true;
        button.textContent = 'Copying...';

        // Try using the modern Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(code);
        } else {
            // Fallback for older browsers
            copyToClipboardFallback(code);
        }

        // Show success notification
        showCopyNotification();
        
        // Reset button
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy Code';
            button.disabled = false;
        }, 2000);

    } catch (error) {
        console.error('Failed to copy code:', error);
        button.textContent = 'Copy Failed';
        setTimeout(() => {
            button.textContent = 'Copy Code';
            button.disabled = false;
        }, 2000);
    }
}

// Fallback copy method for older browsers
function copyToClipboardFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } catch (err) {
        document.body.removeChild(textarea);
        throw err;
    }
}

// Show copy notification
function showCopyNotification() {
    copyNotification.classList.remove('hidden');
    
    setTimeout(() => {
        copyNotification.classList.add('hidden');
    }, 3000);
}

// Update results count
function updateResultsCount(count) {
    resultsCount.textContent = count;
}

// Smooth scroll to top when searching
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + K to focus search
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    
    // Escape to clear search
    if (event.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        handleSearch('');
        searchInput.blur();
    }
});

// Add loading state for slow connections
function showLoadingState() {
    programsContainer.innerHTML = `
        <div class="loading">
            <p>Loading programs...</p>
        </div>
    `;
}

// Performance optimization: Intersection Observer for lazy loading
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe program items when they're rendered
function observeProgramItems() {
    document.querySelectorAll('.program-item').forEach(item => {
        observer.observe(item);
    });
}