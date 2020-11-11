public class Test extends Thread
{
    public  void run(){
        System.out.println("run");
    }
}
class MyThreadTest{
	public static void main(String[] args) throws Exception{
		Test test = new Test();
	    test.run();
	    System.out.println(test.getState());
	    test.start();
	    test.join();
	    System.out.println(test.getState());
	    
		System.out.println("Hello World");
	}
}