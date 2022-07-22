# quoteGenerator

Steps to run server and get quote:
1.Run the node server from "QuoteGenerator.js"
2.Refresh and see results in "index.html"

Files Description
1.index.html->Main HTML file which will be running in browser.(No quote will be generated without Node server)
2.mainScript.js->This is the main script imported in 'index.html'. The code inside will fetch data from node server and display it in browser.
3.quoteGenerator.js->This is the backbone of the server as the server running code is within this file. It will fetch quote from JSON file and return randomly.
4.quotesWithAuthors.json->This is the database(JSON file) containing all quotes with authors.
5.style.css->This is the styling file for the 'index.html' with different components.
