# js-password-generator
For this assignment, I had to do a lot of planing. I separated out the function of the site into the sections: password customization, interpreting the customization, and generating the password.

The first part was fairly simple. All I had to do was declare the different sets of characters (lowercase, uppercase, numbers, and special characters), and set them to a boolean based on
what the user chooses in the alerts.

Interpreting the choices was where I ran into a bit of trouble. After a considerable amount of googling, I found the concat method. I used concat in a few if statements to create the final set of 
characters based on the user's choices, and threw all of those characters into the reqCharSet variable.

Finally, after gathering all of the necessary info, I used a for loop to generate a random character from the reqCharSet variable, sent the newly generated password to the newPass variable, and returned newPass so it could be logged to the page.