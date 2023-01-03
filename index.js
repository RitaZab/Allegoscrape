const { default: mongoose } = require('mongoose');
const playwright = require('playwright');
const uri = 'mongodb+srv://allegroscraper:Allegro10@allegroscrap.d5ei0v4.mongodb.net/?retryWrites=true&w=majority' // of course this is only public becaus that code is not for bussiness just for trainign purposes
const headphonesSchema = new mongoose.Schema({
    name: String,
    price: String,
    url: String

})
const testModel = mongoose.model("testowy",headphonesSchema)
async function connect() {
        try {
            await mongoose.connect(uri);
            console.log("MongoDB is connected")
        } catch (error) {
            console.log(error);
        }
}
    
async function addItem() {
    await testModel.create({
        name:"testowa nazwa"
    })
}
connect();
addItem();


(async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://allegro.pl/kategoria/sluchawki-66887');
    await page.waitForTimeout(1000);
    await page.locator('button:text("OK, ZGADZAM SIĘ")').click();
    await page.waitForTimeout(5000);

    for (let y = 0; y < 10; y++) {
        for (let i = 1; i < 69; i++) {
            const title = await page.textContent(`//article[${i}]/div/div/div[2]/div[1]/h2/a`)
            const price = await page.textContent(`//article[${i}]/div/div/div[2]/div[2]/div/div/span`)
            const hrefElement = await page.$(`//article[${i}]/div/div/div[2]/div[1]/h2/a`);
            const href = await hrefElement.getAttribute('href');
            console.log(`nr:${y * 68 + i},name:${title},\nprice: ${price},\nurl: ${href}`) //this line can be deleted later - only to help at development process
            async function addItem() {
                await testModel.create({
                    name: title,
                    price: price,
                    url: href,
                })
            }
            addItem()

        }
        
        await page.waitForTimeout(10000)
        console.log(`${y + 1} site is done`)
        
        if (y==0){await page.locator('//*[@id="search-results"]/div[2]/div[4]/div/div/div/a').click(); }
        else { await page.locator('//*[@id="search-results"]/div[2]/div[4]/div/div/div/a[2]').click(); }
        await page.waitForTimeout(5000);
    
    
        
        
    }
    }) (); 
