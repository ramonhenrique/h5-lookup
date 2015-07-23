this.TypeLookup = function (driver) {
    GalenPages.extendPage(this, driver, {
        componente: ___componente___
    });
};

var lookup = new TypeLookup(driver);
lookup.componente.click();
