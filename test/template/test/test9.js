this.TypeLookup = function (driver) {
    GalenPages.extendPage(this, driver, {
        componente: 'id: 2'
    });
};

var lookup = new TypeLookup(driver);
lookup.componente.click();
