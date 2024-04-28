// ----------
// enums 101
// ----------

enum Priority {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Urgent = 4

}

function addTicket(details: string, priority: Priority) {
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

addTicket('fix computer', Priority.Urgent)