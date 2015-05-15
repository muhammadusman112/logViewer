global.$ = $;
var options;

var modelObject = new modelObject();
var viewObject = new viewObject();

$(document).ready(function() {
    modelObject.getFile(viewObject.imeibuttons);
    $("#refreshButton").click(function() {
        modelObject.getFile(viewObject.imeibuttons);
    });
});


function selectImei(obj) {
    $("#logs").html("");

    modelObject.loadLogEntries(obj.value, viewObject.showLogEntries);

    $("#datefilter").change(function() {
      console.log(obj.value);
        var res = datefilter.value.toUpperCase();
        modelObject.loadLogEntriesTimeFilter(res, obj.value, viewObject.showLogEntries);

    });
}