<!-- Users -->

There are two user levels to this application: Students of the Master of Science (Marshall) program, and the staff (administrators). For this project, I will be building the front-end as it will be viewed by the administrators. The view will be very similar to the studet view but will contain added administrator functionality. 


<!-- Problem -->

The project is an branch of a project I have already been working on. The program currently communicates primarily via email which has made it difficult for students to keep track of announcements from the program as well as resources specific to their major. The general USC student portals do not fulfill these requirements for the students of the MSF program. The goal is to create a web-based portal to allow students access to program-specific communications and resources. The skills I have learned in this class can help improve the user-experience of the portal as well as allow some features on my backlog.


<!-- Fulfilling ITP 404 Requirements -->

The three client side routes will be: calendar (program events information), home (will be like a dashboard for users), and announcements (which will contain the communication from the program).

The AJAX request component will be fulfilled via the announcements feature where the administrator can the portal pulls from existsing announcements, and the administrator can add, edit or delete announcements.
-- GET: url/announcements. Requesting JSON file with all anouncements
-- POST: url/announcements/{id}. Adding a new announcement child to the JSON file with the specific id
-- PUT: url/announcements/{id}. Editing an existing announcement with id={id}
-- DELETE: url/announcements/{id}. Deleting an announcement with id={id}

I will be integrating the calendar using the Google calendar API. I am unsure about the testing at the moment.