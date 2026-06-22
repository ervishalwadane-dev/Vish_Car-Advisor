import {test, expect} from '@playwright/test';


test('Get the Screenshot of the page', async ({page}) => {

await page.goto('https://car-advisor-app.onrender.com/');
await page.screenshot({path:'tests/screenshot/'+ Date.now()+'Homepage.png'});

});


test('Get the FullPageScreenshot of the page', async ({page}) => {

await page.goto('https://car-advisor-app.onrender.com/');
await page.screenshot({path:'tests/screenshot/'+ Date.now()+'Fullpage.png',fullPage:true});

});

test('Get the ElementScreenshot of the page', async ({page}) => {

await page.goto('https://car-advisor-app.onrender.com/');
await page.locator('//*[@id="root"]/div/div/main/div/div[7]/div[1]').screenshot({path:'tests/screenshot/'+ Date.now()+'ElementPage.png'});

});