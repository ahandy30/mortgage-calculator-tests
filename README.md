# mortgage-calculator-tests

Hello and Welcome to my Github!

I created two tests based on the Zillow Mortgage Calculator: https://www.zillow.com/mortgage-calculator/. 

The first test is a user going through the calculator inputting the following:
Home price of $500,000
Down payment of $100,000 (this changes when home price changes)
Loan period of 15 year fixed 
Interest rate of 4.25%

This spits out a monthly payment that is shown on a circle diagram on the right side of the screen as well as a breakdown of the payment. 

The second test runs through the first test as well as testing that changing the interest rate to 5% will increase the monthly payment. The new payment is also shown in the circle diagram on the right with the new breakdown.

How to run:
Download tests in compressed zip folder from Github
Open directory in a text editor (like Visual Studio Code)
If Playwright is not install you can use npm init playwright@1.17.123 to initialize 
Make sure you’re in the mortgage interest rate folder
Type npm test, this runs a total of 6 tests (4 of my tests in chrome and mobile and 2 skipped tests)


Notes of how to make these test better in the future
If I were to go back to improve these tests, I would allow user input for the home price, down payment loan period and interest rate instead of hard coding them. This way the test would be able to type in any value. I would read the monthly payment from the breakdown section instead of hard coding it. Finally I would add my rainy day (negative) scenarios in and compare the results with the sunny (positive) tests.
