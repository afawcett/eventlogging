({
	init : function(cmp, event, helper) {
       	var logData = cmp.get('v.log');
        if(logData!=null) {
			helper.parseLog(cmp, logData);                    
        }
	}
})