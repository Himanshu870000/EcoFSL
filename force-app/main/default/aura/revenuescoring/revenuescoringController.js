({
    doInit : function(component, event, helper) {
        var recordId = component.get('v.recordId');
        console.log(recordId)
        helper.getCaseDetails(component,recordId);
    }
})