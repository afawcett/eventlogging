@IsTest
private class LogTest {

    @IsTest
    public static void logTest() {
        Log.push('MyClass.methodA');
        insert new Account(Name = 'Test');
        Log.push('MyClass.methodB');
        Log.message('Doing something');
        insert new Account(Name = 'Test');
        Log.pop();
        List<Account> accounts = [select Id from Account];
        Log.message('Doing something more');        
        Log.pop();        
	}
}