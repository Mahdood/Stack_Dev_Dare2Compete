Assumptions in using the application:
----------------------------------------------------------------------------------------------------

1. Initally some seats are booked in the application.
2. Number of tickets can be between 1-7.
3. User cannot select any seat manually.
4. User cannot change the seat from booked to available, unless he resets all the seats.

Technologies Used in the Application:
--------------------------------------------------------------------------------------------------------

1. Node
2. Express
3. Angular JS
4. Tailwind CSS
5. Mongo DB | Atlas
6. Mongoose

Functions implemented in the application:
-------------------------------------------------------------------------------------------------------

1. User enters the url - https://tck-booking.herokuapp.com/
2. User lands on the page with UI representing the coach, with seat numbers indicated on the seats.
3. User enters the number of seats s/he wants to book, and clicks on "Find"
4. The color of selected seats changes to inform the user.
5. User clicks on "Book", the seats are booked.
6. If User wants to make all seats available (For Testing purpose) user clicks on "Reset", all seats are 
    available.