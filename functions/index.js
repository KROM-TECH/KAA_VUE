const functions = require('firebase-functions');
const quest = require('request');
const cheerio = require('cheerio');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    
    quest('https://b-ok.africa/s/Vue', (error, _response, html) => {
        
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);
          const bookArray = [];
          
                   const title = $('h3 > a').text()
                //    console.log(title);
                //    response.send()
          $('h3 > a').each((i, el) => {
              
            const title = $(el).text()
            const link = $()
              bookArray.push({name:title})



            //   .replace(/\s\s+/g, '');
            // const link = $(el)
            //   .find('a')
            //   .attr('href');
            // const date = $(el)
            //   .find('.post-date')
            //   .text()
            //   .replace(/,/, '');
      
              
          });


          response.send(bookArray)
      
          console.log('Scraping Done...');
        }
      });


//   response.send("Hello from Firebae");
});
 