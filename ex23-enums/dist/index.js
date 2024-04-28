"use strict";
// ----------
// enums 101
// ----------
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
function addTicket(details, priority) {
    switch (priority) {
        case Priority.Lowest:
            break;
        case Priority.Low:
            break;
        case Priority.Medium:
            break;
        case Priority.High:
            break;
        case Priority.Urgent:
            break;
        default:
            break;
    }
}
addTicket('fix computer', Priority.Urgent);
