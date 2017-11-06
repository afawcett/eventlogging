({
	parseLog : function(cmp, log) {
        var items = [];
        var logLines = log.split('/n');
        this.buildTreeItems(
            { logLines : logLines, 
              logLineIdx : 1, 
              expandAll : cmp.get('v.expandAll') }, items);
        cmp.set('v.header', 'Log: ' + logLines[0]);
		cmp.set('v.items', items);
	},
	buildTreeItems : function(ctx, items) {
        while (true) {
	        var logLineParts = ctx.logLines[ctx.logLineIdx].split(':');
            var logLineIndent = parseInt(logLineParts[0]);
            var item = 
                { name: ctx.logLineIdx, 
                  label: logLineParts[1],
                  expanded : ctx.expandAll, 
                  items: []};
            items.push(item);
            ctx.logLineIdx++;
            if(ctx.logLineIdx>ctx.logLines.length-1) {
                return -1;
            }
	        var peeklogLineParts = ctx.logLines[ctx.logLineIdx].split(':');
            var peeklogLineIndent = parseInt(peeklogLineParts[0]);            
            if(peeklogLineIndent > logLineIndent) {
                peeklogLineIndent = this.buildTreeItems(ctx, item.items);
                if(peeklogLineIndent == -1) {
                    return -1;
				}
            }                           
            if(peeklogLineIndent < logLineIndent) {
                return peeklogLineIndent;
            }
        }                 
	}
})