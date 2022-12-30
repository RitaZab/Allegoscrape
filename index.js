const playwright = require('playwright');
(async () => {
    const browser = await playwright.chromium.launch({
        headless: false // Show the browser. 
    });
    
    const page = await browser.newPage();
    await page.goto('https://allegro.pl/kategoria/sluchawki-66887');
    await page.waitForTimeout(1000); // wait for 1 seconds
    await page.locator('button:text("OK, ZGADZAM SIĘ")').click();
    await page.waitForTimeout(5000);
    const title1 = await page.textContent("//article[1]/div/div/div[2]/div[1]/h2/a")
    console.log(title1)
    const title2 = await page.textContent("//article[2]/div/div/div[2]/div[1]/h2/a")
    console.log(title2)
    const title3 = await page.textContent("//article[3]/div/div/div[2]/div[1]/h2/a")
    console.log(title3)
    const title4 = await page.textContent("//article[70]/div/div/div[2]/div[1]/h2/a")
    console.log(title4)
    const title5 = await page.textContent("//article[68]/div/div/div[2]/div[1]/h2/a")
    console.log(title5)
    for (let i = 1; i < 71; i++) {
        const title = await page.textContent(`//article[${i}]/div/div/div[2]/div[1]/h2/a`)
        console.log(title,i)
    }
})();
