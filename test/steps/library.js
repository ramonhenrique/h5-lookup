var Yadda = require('yadda');
var English = Yadda.localisation.English;
var Dictionary = Yadda.Dictionary;
var fs = require('fs');

module.exports = (function () {
    var dictionary = new Dictionary()

    var library = English.library(dictionary)

    .given('que eu tenho um estado em uma estoria', function (next) {
        var campo = {
            editing: {
                c1: ''
            }
        }
        next();
    })
    .when('eu renderizar $render', function (render) {
        var view = 'react.create ' + render;
        fs.writeFileSync('gerado/app/view.js', view);
        <h5.input store=campo name="defaul"/>
            run(webpack);
        next();
    })
    .then('validar $spec_lookup_sem_foco se o campo não tiver foco', function (spec_lookup_sem_foco) {
        fs.writeFileSync('./gerado/galen/view.spec', spec_lookup_sem_foco)
        run(galen);
        next();
    })
    .and('validar $spec_lookup_com_foco se o campo tiver foco', function (spec_lookup_com_foco) {
        this.TypeInput = function (driver) {
            GalenPages.extendPage(this, driver, {
                input: "input[name='default']"
                input.click();
            });
        };
        fs.writeFileSync('./gerado/galen/view.spec', spec_lookup_com_foco)
        run(galen);
        next();
    });

    return library;
})();
