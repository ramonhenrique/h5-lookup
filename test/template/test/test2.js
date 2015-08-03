this.Input = function (driver) {
    GalenPages.extendPage(this, driver, {
        input: '.input'
    });
};
var lookup = new Input(driver);

lookup.input.typeText(___texto___);
