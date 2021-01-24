const functions = require('firebase-functions');
const quest = require('request');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

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

function getdetails (link) {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`https://b-ok.africa${link}`, {waitUntil: 'networkidle2'});
            await page.waitForSelector('.details-book-cover > img',{visible: true})
            let urls = await page.evaluate(() => {
                let results = [];
                let text = document.querySelector('#bookDescriptionBox').innerText;
                let img = document.querySelector('.details-book-cover > img').getAttribute('src')

                results.push({description:text, image:img})
            
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
function downloadBook (link) {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`https://b-ok.africa${link}`, {waitUntil: 'networkidle2'});
            await page.waitForSelector('.details-book-cover > img',{visible: true})
            let urls = await page.evaluate(() => {
                let results = [];
                let text = document.querySelector('#bookDescriptionBox').innerText;
                let img = document.querySelector('.details-book-cover > img').getAttribute('src')

                results.push({description:text, image:img})
            
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}

exports.GetDownloadLink = functions.https.onRequest((request, response) => {
    console.log(request.query.link);
    getdetails(request.query.link).then((data)=>{
        response.send(data) 
    }).catch(console.error);
})

exports.DownloadBook = functions.https.onRequest((request, response) => {
    console.log(request.query.link);
    downloadBook(request.query.link).then((data)=>{
        response.send(data) 
    }).catch(console.error);
})
 