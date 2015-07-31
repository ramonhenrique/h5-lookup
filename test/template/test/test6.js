this.TypeLookup = function (driver) {
    var keys = {
        DOWN: "\uE015"
    }
    driver.findElement(By.cssSelector(".input")).sendKeys(keys.DOWN);
};

var lookup = new TypeLookup(driver);
