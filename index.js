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
})();
