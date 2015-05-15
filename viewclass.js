var _ = require('underscore');

function viewObject() {

    // this.template = function(template) {
    //  $("#logs").append(template);
    //console.log(template);
    this.logEntryTemplate = _.template("<form class='form-horizontal'><div class='row oneRowForm'> \
                   <div class='row form-group col-lg-5'>  \
                            <label class='sr-only'>Log Entry</label> \
                            <div class='input-group'> \
                              <div class='input-group-addon'> <span class='glyphicon glyphicon-time' aria-hidden='true'></span></div>\
                              <input type='text' class='form-control' value='<%- time %>'> \
                              <div class='input-group-addon'><%- EventDescription %></div>  \
                            </div>  \
                          </div>  \
                          <div class='row form-group col-lg-12'>  \
                            <div class='input-group'> \
                              <div class='input-group-addon'>Latitude</div>    \
                              <input type='text' class='form-control' value='<%- Lat %>'> \
                            </div>  \
                          </div>  \
                        </div></form>");




    // }
    this.imeiButtonsTemplate = _.template('<li> \
          <button class="btn btn-primary" type="button" value="<%- imeiNumber %>" onclick="selectImei(this)"> \
          <%- imeiNumber %>(<%- imeiCount %>)</button></li>');

    this.imeibuttons = function(imeiList) {
        var tempList = Object.keys(imeiList);
        for (var i in tempList) {
            $("#imeiNumbers").append(viewObject.imeiButtonsTemplate({
                imeiNumber: tempList[i],
                imeiCount: imeiList[tempList[i]]
            }));
        }
    };

    this.showLogEntries = function(imei, logEntries) {
        var headerTemplate = _.template("<p><strong>IMEI Number:</strong><%- imei %></p>");
        $("#headerCrap").html(headerTemplate({
            imei: imei
        }));

        $("#logs").html("");
        for (var i = 0; i < logEntries.length - 1; i++) {
            //viewObject.template(logEntries[i]);
            $("#logs").append(viewObject.logEntryTemplate(logEntries[i]));
          // $("#logs1").append(logEntries[i].time);
        }

    }

};