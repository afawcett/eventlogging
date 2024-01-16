@IsTest
private class LogTest {

    @IsTest
    public static void logTest() {
        Test.startTest();
        Log.push('MyClass.methodA');
        insert new Account(Name = 'Test');
        Log.push('MyClass.methodB');
        Log.message('Doing something');
        insert new Account(Name = 'Test');
        Log.pop();
        List<Account> accounts = [select Id from Account];
        Log.message('Doing something more');        
        Log.pop();
        Log.emit();
        EventBus.publish(new Log__e(
                Title__c = ' Data Upload Statistics',
                Data__c = DateTime.now() + 'hello'));
        Test.stopTest();
    		
	}
}
