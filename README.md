import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;
public class FactorialApplet extends Applet implements ActionListener {
 TextField t1,t2; Button b;
 public void init() {
 t1=new TextField(5); t2=new TextField(20);
 b=new Button("Compute");
 add(t1); add(b); add(t2);
 b.addActionListener(this);
 }
 public void actionPerformed(ActionEvent e){
 int n=Integer.parseInt(t1.getText());
 int f=1;
 for(int i=1;i<=n;i++) f*=i;
 t2.setText("Factorial is: "+f);
 }
}
