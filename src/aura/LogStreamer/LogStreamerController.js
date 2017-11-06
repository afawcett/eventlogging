({
    handleMessage : function(cmp, event, helper) {
    	var payload = event.getParam("payload");
        $A.createComponent(
            "c:LogViewer", { "log": payload.Data__c },
            function(newLogViewer, status, errorMessage){
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.unshift(newLogViewer);
                    cmp.set("v.body", body);
                }
            }
        );        
    }    
})