this.TypeLookup = function (driver) {
    GalenPages.extendPage(this, driver, {
        componente: '.h_lookup_iconSearch'
    });
};

var lookup = new TypeLookup(driver);
lookup.componente.click();
