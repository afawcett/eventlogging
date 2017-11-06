({
	handleMessage : function(cmp, event, helper) {
    	var payload = event.getParam("payload");
        $A.createComponent(
            "aura:html", { "tag" : "p", "body" : JSON.stringify(payload), 
            HTMLAttributes: { "class" : "slds-p-vertical_xx-small" }},
            function(newMessage, status, errorMessage){
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.unshift(newMessage);
                    cmp.set("v.body", body);
                }
            }
        );        		
	}
})