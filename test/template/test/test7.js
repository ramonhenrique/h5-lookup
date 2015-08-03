this.TypeLookup = function (driver) {
    var keys = {
        DOWN: '\uE015',
        ENTER: "\uE007"
    }
    driver.findElement(By.cssSelector(".input")).sendKeys(keys.DOWN);
    driver.findElement(By.cssSelector(".input")).sendKeys(keys.ENTER);
};

var lookup = new TypeLookup(driver);



