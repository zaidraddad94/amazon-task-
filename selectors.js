const selectors = {
    addToCart: element(by.css('#add-to-cart-button')),
    cart: element(by.css("#nav-cart")),
    cartItemsCount: element.all(by.css('div[data-encoded-offering]')),
    firstBag: element.all(by.css(".s-image")).first(),
    firstBagIndex: element.all(by.css("#cerberus-data-metrics")),
    firstItemId: element.all(by.css('div[data-asin]')).first(),
    itemsInCart: element(by.css("#nav-cart-count")),
    productTitle: element.all(by.css("#productTitle")),
    searchButton: element.all(by.css(".nav-input")).first(),
    searchInput: element(by.css("#twotabsearchtextbox")),
    secondBag: element.all(by.css(".s-image")).get(1),
    secondBagIndex: element.all(by.css(".s-result-list")).first().$$("div[data-index]").get(1),
    secondItemId: element.all(by.css('div[data-asin]')).get(1),
    text: element(by.css("h1")),
    tickIcon: element(by.css("#huc-v2-order-row-with-divider")),
};

module.exports = {
    selectors
};
