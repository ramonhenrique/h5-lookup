/* jslint node: true */

module.exports = function (library, expect, h5_test) {
    library
    .given('que o estado da estória é ([^\u0000]*)', function (estado, next) {
        expect(estado, 'estado').to.be.an('string');
        h5_test.replace('___fields___', estado);
        next();
    })
    .given('que eu tenho o lookup com o ([^\u0000]*)', function (estado, next) {
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
    .then('deverá ser exibido ([^\u0000]*)', function (spec, next) {
        h5_test.wait('1s');
        expect(spec).to.be.an('string');
        h5_test.replace('___spec___', spec);
        h5_test.check('test/test.spec');
        next();
    })
    .then('deverá exibir ([^\u0000]*)', function (spec, next) {
        expect(spec).to.be.an('string');
        h5_test.replace('___spec___', spec);
        h5_test.check('test/test.spec');
        next();
    })
    .when('clicar no (.*)', function (componente, next) {
      h5_test.replace("___componente___", componente);
      h5_test.run("test/test.js");
      next();
    })
    .when('digitar o texto(.*)', function (texto, next) {
      h5_test.replace("___texto___", texto);
      h5_test.run("test/test2.js");
      next();
    })
    .when('clicar na lupa pra pesquisar', function (next) {
      h5_test.run("test/test.js");
      next();
    })
    .when('quero apagar o texto digitado', function (next) {
      next();
    })
    .when('eu clicar em limpar', function (next) {
      h5_test.run("test/test3.js");
      next();
    })
    .when('eu pressionar a tecla Esc', function (next) {
      h5_test.run("test/test4.js");
      next();
    })
    .then('contecerá um rollback', function (next) {
      next();
    })
    .when('eu quero apagar o texto digitado junto com o item já cadastrado', function (next) {
      next();
    })
    .when('clicar 2 vezes em limpar', function (next) {
      h5_test.run("test/test5.js");
      next();
    })
    .when('pressionar (.*)', function (tecla, next) {
      h5_test.replace("___tecla___", tecla);
      h5_test.wait('3s');
      h5_test.run("test/test6.js");
      next();
    })
    .when('eu pressionar seta pra baixo', function (next) {
      next();
    })
    .when('eu pressionar a tecla Enter', function (next) {
      h5_test.wait('1s');
      h5_test.run("test/test7.js");
      next();
    })
    .when('girar o scroll do mouse', function (next) {
      h5_test.wait('2s');
      h5_test.inject('test/test8.js');
      next();
    })
    .when('o lookup exibir a lista com o resultado', function (next) {
      next();
    })
    .when('eu clicar em um item da lista', function (next) {
      h5_test.wait('2s');
      h5_test.run('test/test9.js');
      next();
    })
    .when('o campo for requerido', function (next) {
      next();
    })
    .when('eu sair do focu', function (next) {
      h5_test.run('test/test10.js');
      next();
    })
};




