this.TypeLookup = function (driver) {
    var keys = {
        Escape: "\uE00C"
    }
    driver.findElement(By.cssSelector(".input")).sendKeys(keys.Escape);
};

var lookup = new TypeLookup(driver);
