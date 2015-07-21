this.TypeLookup = function (driver) {
    GalenPages.extendPage(this, driver, {
        input: "input[name='default']",
        typeText: function (text) {
            this.input.typeText(text);
        }
    });
};

var lookup = new TypeLookup(driver);
lookup.typeText("maria");