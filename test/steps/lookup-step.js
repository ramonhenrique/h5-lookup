/* jslint node: true */

module.exports = function (library, expect, h5_test) {
    library
    .given('que o estado da estória é ([^\u0000]*)', function (estado, next) {
        expect(estado, 'estado').to.be.an('string');
        h5_test.replace('___fields___', estado);
        next();
    })
    .when('eu renderizar o (.*)', function (caso, next) {
        h5_test.replace('___caso___', caso);
        h5_test.file('app/lookup.view.js');
        h5_test.serve('app/index.html');
        h5_test.pack('app', next);
    })

    .then('validar ([^\u0000]*)', function (spec, next) {
        expect(spec).to.be.an('string');
        h5_test.replace('___spec___', spec);
        h5_test.check('test/test.spec');
        // chamar o galen
        next();
    });
};

//    .and('validar $spec_lookup_com_foco se o campo tiver foco', function (spec_lookup_com_foco) {
//        this.TypeInput = function (driver) {
//            GalenPages.extendPage(this, driver, {
//                input: "input[name='default']"
//                input.click();
//            });
//        };
//        fs.writeFileSync('./gerado/galen/view.spec', spec_lookup_com_foco)
//        run(galen);
//        next();
//    });



