const functions = require('firebase-functions');
const quest = require('request');
const cheerio = require('cheerio');

// Create and Deploy Your First Cloud Functions
// firebase emulators:start --only functions

exports.BookScrape = functions.https.onRequest((request, response) => {
    console.log(request.query.name);
    quest(`https://b-ok.africa/s/${request.query.name}`, (error, _response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const bookArray = [];

          $('h3 > a').each((i, el) => {
              
            const title = $(el).text()
            const link = $(el).attr('href');
                    bookArray.push({name:title, link:link})
                    // ${request.query.name}
                    // bookArray.push({name:title, link:link})
          });
          response.send(bookArray) 
      
          console.log('Scraping Done...');
        }
      });
});
 