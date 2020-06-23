const SEARCH_TYPE_GOOGLE_BANG = "google_bang";
const SEARCH_TYPE_DDG = "ddg";

var storedStats = browser.storage.local.get();

storedStats.then(results => {

    let ddgSearchDiv = document.getElementById("ddgSearchCountDiv");
    let googleBangSearchDiv = document.getElementById("googleBangSearchDiv");
    let percentageStatsDiv = document.getElementById("percentageStatsDiv");

    if (results == null || results.searchType == null || results.searchType.length === 0) {

        const ddgSearchCountItem = document.createTextNode("h6");
        ddgSearchCountItem.textContent = "Nothing to show at the moment.";
        ddgSearchDiv.appendChild(ddgSearchCountItem);

        return;
    }

    var ddgSearchCount = results.searchType[SEARCH_TYPE_DDG];
    var googleBangSearchCount = results.searchType[SEARCH_TYPE_GOOGLE_BANG];

    if (results.searchType[SEARCH_TYPE_DDG] > 0) {
        ddgSearchCount = results.searchType[SEARCH_TYPE_DDG];
    } else {
        ddgSearchCount = 0;
    }

    if (results.searchType[SEARCH_TYPE_GOOGLE_BANG] > 0) {
        googleBangSearchCount = results.searchType[SEARCH_TYPE_GOOGLE_BANG];
    } else {
        googleBangSearchCount = 0;
    }

    // Set DDG search count text
    const ddgSearchCountItem = document.createTextNode("h6");
    ddgSearchCountItem.textContent = "DDG Searches: " + ddgSearchCount;
    ddgSearchDiv.appendChild(ddgSearchCountItem);

    // Set Google bang search count text
    const googleBangSearchCountItem = document.createTextNode("h6");
    googleBangSearchCountItem.textContent = "!g Searches: " + googleBangSearchCount;
    googleBangSearchDiv.appendChild(googleBangSearchCountItem);

    // Set use percentage text
    var percentageStat = (ddgSearchCount/(ddgSearchCount + googleBangSearchCount)) * 100;

    const percentageStatItem = document.createTextNode("h6");
    percentageStatItem.textContent = "Your DDG usage is " + percentageStat.toFixed(2) + "%";
    percentageStatsDiv.appendChild(percentageStatItem);
});