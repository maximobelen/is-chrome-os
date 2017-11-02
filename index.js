function isChromeOS () {
    if (/\bCrOS\b/.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

module.exports = isChromeOS;