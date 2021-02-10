const functions = require('firebase-functions');
const quest = require('request');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const  ytpl = require('ytpl');
const runtimeOpts = {
    timeoutSeconds: 400,
    memory: '1GB'
  }

// firebase emulators:start --only functions

exports.BookScrape = functions.https.onRequest((request, response) => {
    console.log(request.query.name);
    
        quest(`https://b-ok.africa/s/${request.query.name}`, (error, _response, html) => {
            if (!error && _response.statusCode == 200) {
              const $ = cheerio.load(html);
              const bookArray = [];
              $('h3 > a').each((i,el) => {
                const title = $(el).text()
                const link = $(el).attr('href');
             bookArray.push({name:title, link:link})
              });
              response.set('Access-Control-Allow-Origin', '*');
              response.send(bookArray) 
            }
          })

 
    
});


function getdetails (link) {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({
                args: [
                  '--no-sandbox',
                  '--disable-setuid-sandbox',
                ],
              });
            const page = await browser.newPage();
            await page.goto(`https://b-ok.africa${link}`, {waitUntil: 'networkidle2'});
            await page.waitForSelector('.details-book-cover > img',{visible: true})
            
            let urls = await page.evaluate(() => {
                let results = {}
                if(document.querySelector('#bookDescriptionBox')){
                    let text = document.querySelector('#bookDescriptionBox').innerText;
                    let img = document.querySelector('.details-book-cover > img').getAttribute('src')
                    let size = document.querySelector('a.btn.btn-primary.dlButton.addDownloadedBook').innerText;
                     results ={description:text, image:img, size:size}
                }else{
                    let img = document.querySelector('.details-book-cover > img').getAttribute('src')
                    let size = document.querySelector('a.btn.btn-primary.dlButton.addDownloadedBook').innerText;
                    results = {image:img, size:size}
                }
                
               
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}

function DownloadBook (link) {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({
                args: [
                  '--no-sandbox',
                  '--disable-setuid-sandbox',
                ],
              });
            const page = await browser.newPage();
            await page.goto(`https://b-ok.africa${link}`, {waitUntil: 'networkidle2'});
            console.log('Clicking on "Download PDF" button');
            await page.on('response', response => {
                console.log(response.url());
                if (response.url().indexOf('dtoken') > -1){
                    console.log("response code: ", response.status(), response.url());
                    urls = response.url()
                    return resolve(urls);
                }
                  
              });
             
            await page.click('a.btn.btn-primary.dlButton.addDownloadedBook')
            await page.waitForNavigation({waitUntil: 'networkidle2'})
            browser.close();
            
            
        } catch (e) {
            return reject(e);
        }
    })
}

exports.GetDownloadLink = functions.runWith(runtimeOpts).https.onRequest((request, response) => {
    console.log(request.query.link);
    getdetails(request.query.link).then((data)=>{
        response.set('Access-Control-Allow-Origin', '*');
        response.send(data) 
    }).catch(console.error);
})

exports.DownloadBook = functions.runWith(runtimeOpts).https.onRequest((request, response) => {
    console.log(request.query.link);
    DownloadBook(request.query.link).then((data)=>{
        console.log(data);
        response.set('Access-Control-Allow-Origin', '*');
        response.send(data) 
    }).catch(console.error);
})


exports.YT = functions.runWith(runtimeOpts).https.onRequest((request, response) => {
    ytpl.validateID(string)
    const options = {
        method: 'POST',
        url: 'https://youtube-video-grabber1.p.rapidapi.com/api/ytGrab_v1',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'x-rapidapi-key': '6cedc0a274msha4551a746200733p16f995jsn7c8703feb374',
          'x-rapidapi-host': 'youtube-video-grabber1.p.rapidapi.com',
          useQueryString: true
        },
        form: {url_: 'https://www.youtube.com/watch?v=oAzwClT1GRQ&list=PLOAuB8dR35oft2ZLc1sHseypNMAiG_TeJ&index=1'}
      };
      quest(options, function (error, _response, body) {
        if (error) throw new Error(error);
        if (!error && _response.statusCode == 200) {
            response.set('Access-Control-Allow-Origin', '*');
            response.send(body) 
        }
       
    });
})
 