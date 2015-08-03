this.TypeLookup = function (driver) {
    var keys = {
        tecla: ___tecla___
    }
    driver.findElement(By.cssSelector(".input")).sendKeys(keys.tecla);
};

var lookup = new TypeLookup(driver);
