const SEARCH_TYPE_GOOGLE_BANG = "google_bang";
const SEARCH_TYPE_DDG = "ddg";

var storedStats = browser.storage.local.get();

storedStats.then(results => {

    if (!results.stats) {
        results = {
            searchType: {}
        };
    }

    const filter = {
        url:
        [
          {hostContains: "duckduckgo.com"}
        ]
    }
    
    function logDataOnCompleted(details) {

        console.log("URL: " + details.url);
    
        const subStringOne = "%21g";
        const subStringTwo = "!g%20";
        const subStringThree = "?q=";
        const subStringFour = "&q=";
    
        if (details.url.includes(subStringOne) || details.url.includes(subStringTwo)) {
           
            results.searchType[SEARCH_TYPE_GOOGLE_BANG] = results.searchType[SEARCH_TYPE_GOOGLE_BANG] || 0;
            results.searchType[SEARCH_TYPE_GOOGLE_BANG]++;

            console.log("!g Count: " + results.searchType[SEARCH_TYPE_GOOGLE_BANG]);
        } else if (details.url.includes(subStringThree) || details.url.includes(subStringFour)){

            results.searchType[SEARCH_TYPE_DDG] = results.searchType[SEARCH_TYPE_DDG] || 0;
            results.searchType[SEARCH_TYPE_DDG]++;

            console.log("ddg Count: " + results.searchType[SEARCH_TYPE_DDG]);
        }

        browser.storage.local.set(results);
    }

    browser.webNavigation.onCompleted.addListener(logDataOnCompleted, filter);
});