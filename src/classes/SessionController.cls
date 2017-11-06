public class SessionController {

    @AuraEnabled
    public static String getSessionId() {
        return UserInfo.getSessionId();
    }
    
}