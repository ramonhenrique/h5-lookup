this.TypeLookup = function (driver) {
    GalenPages.extendPage(this, driver, {
        componente: '.h_lookup_iconClear'
    });
};

var lookup = new TypeLookup(driver);
lookup.componente.click();
lookup.componente.click();
