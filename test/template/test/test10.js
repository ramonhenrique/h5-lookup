this.TypeLookup = function (driver) {
    var keys = {
        TAB: '\uE004'
    }
    return driver.findElement(By.cssSelector(".input")).sendKeys(keys.TAB);
};

var lookup = new TypeLookup(driver);
