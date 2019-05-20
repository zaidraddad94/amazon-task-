const selectors = require('./selectors').selectors;

describe('Amazon Task', () => {
    let finalCart = []
    let keys = ['bags', 'hats', 'sun glass']

    beforeAll(() => {
        browser.get('https://www.amazon.com/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
    });

  
        keys.forEach(async (key) => {
            it('should search for keys', async() => {
             browser.get('https://www.amazon.com/');
            selectors.searchInput.sendKeys(key);
            selectors.searchButton.click();
            selectors.firstBag.click();
            var x = await selectors.addToCart.isDisplayed()
            console.log("xxxxxxxxxxx", x)
            if (x) {
                selectors.addToCart.click()
                var y = await selectors.tickIcon.isDisplayed()
                console.log("yyyyyyyyyyyy",y)
                if (y) {
                    browser.navigate().back();

                    selectors.firstBagIndex.getAttribute('data-asin').then((value) => {
                        finalCart.push(value);

                    })
                }

            }
        })

    })


    it(`should display--  --number of items added to the cart`, () => {
        expect(selectors.itemsInCart.getText()).toEqual(`${finalCart.length}`);
    });

    it(`should have items in the cart`, () => {
        selectors.cart.click()
        console.log(finalCart.length)
        expect(selectors.cartItemsCount.count()).toEqual(finalCart.length);
    });

    // it('should verify the first item is added successfully', () => {
    //     expect(finalCart[1]).toEqual(selectors.firstItemId.getAttribute('data-asin'));
    // });

    // it('should verify the second item is added successfully', () => {
    //     expect(finalCart[0]).toEqual(selectors.secondItemId.getAttribute('data-asin'));

    // });
});
