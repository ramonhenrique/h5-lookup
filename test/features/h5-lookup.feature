  Funcionalidade: Componente para selecionar um registro de uma tabela
  Para permitir ao usuário escolher um registro existente
  Eu, como programador
  Desejo utilizar o componete h5-lookup

  Cenário: Renderização com lookup fechado - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  Então deverá ser exibido [spec]
  
  Exemplos:
    caso              | estado                   | spec
    -----------------------------------------------------------------------------------------------
    campo vazio       | id_pessoa:{              | container:
                      |    display:"",           |   contains: input_label, input, div_awesome_lupa
                      |    _id:null              | input_label:
                      | }                        |   text is: Default
                      |                          |   inside: container
                      |                          | input:
                      |                          |   text is:
                      |                          | div_awesome_lupa
                      |                          |   left of: input <0px
                      |                          | icon_lupa
                      |                          |   inside: div_awesome_lupa
    -----------------------------------------------------------------------------------------------
    campo com valor   | id_pessoa:{              | input
                      |   display:"Ana",         |   text is: Ana
                      |   _id:1001               | input_label:
                      | }                        |   text is: Default
    -----------------------------------------------------------------------------------------------
    verificar awesome |  id_pessoa:{             | icon_lupa:
                      |    display:"Maria",      |   css font-size is: 16px
                      |    _id:null              | icon_clear:
                      |  }                       |   css position is: absolute
                      |                          |   css font-size is: 14px
    -----------------------------------------------------------------------------------------------
    focus             | _autofocus: 'id_pessoa', | input:
                      | id_pessoa:{              |   text is:
                      |   display:"",            |   inside: container
                      |   _id:null               | input_label:
                      | }                        |   text is: Default
                      |                          |   inside: container
                      |                          |   css color is: rgba(0, 188, 212, 1)
                      |                          | input_placeholder:
                      |                          |   css color is: rgba(139, 139, 139, 1)
                      |                          |   text is: Selecione valor default
    -----------------------------------------------------------------------------------------------

  Cenário: Renderização pesquisando - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E digitar o texto [texto]
  Então deverá ser exibido [spec]
  
  Exemplos:
    caso          | estado        | spec                                   | texto
    ------------------------------------------------------------------------------
    pesquisa      | id_pessoa:{   | input_wrap:                            |  'a'
                  |   display:"", |  inside partly: container              |
                  |   _id:null    | divList:                               |
                  | }             |  inside partly: container              |
                  |               | container:                             |
                  |               |  inside partly: container              |
                  |               |  contains partly: list                 |
                  |               | input:                                 |
                  |               |  inside: input_wrap                    |
                  |               |  below: input -65px                    |
    ------------------------------------------------------------------------------
    com resultado | id_pessoa:{   | list:                                  |  'a'
                  |   display:"", |   contains: itemList                   |
                  |   _id:null    |   inside partly: input_wrap            |
                  | }             |   below: input                         |
                  |               | itemList:                              |
                  |               |   inside partly: divList               |
                  |               |   below: list -200px                   |
                  |               |   below: input                         |
    ------------------------------------------------------------------------------
    sem resultado | id_pessoa:{   | list:                                  | 'asd'
                  |  display:"",  |   contains: notFoundText               |
                  |  _id:null     |   inside: input_wrap                   |
                  | }             |   below: input                         |
                  |               | notFoundText:                          |
                  |               |   text is: Nenhum resultado encontrado |
                  |               |   below: list -19px                    |
                  |               |   below: input                         |
    ------------------------------------------------------------------------------

  Cenário: Clicando na icone pesquisar - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E clicar na lupa pra pesquisar
  Então deverá exibir [spec]

  Exemplos:
    caso            | estado          | spec
    -------------------------------------------------------------
    Campo em branco | id_pessoa:{     | dropDown:
                    |   display:"",   |   contains: loading
                    |   _id:null      |   inside partly: divList
                    | }               |   below: input
                    |                 | loading:
                    |                 |   inside partly: dropDown
                    |                 |   below: divList
                    |                 |   below: input
                    |                 | input:
                    |                 |   text is:
                    |                 | icon_lupa
                    |                 |   inside: input_wrap
                    |                 |   below: input_label
                    |                 |   above: dropDown
    -------------------------------------------------------------
    Campo com texto | id_pessoa:{     | dropDown:
                    |   display:"Be", |   contains: loading
                    |   _id:79        |   inside partly: divList
                    | }               |   below: input
                    |                 | loading:
                    |                 |   inside partly: dropDown
                    |                 |   below: divList
                    |                 |   below: input
                    |                 | input:
                    |                 |   text is: Be
    -------------------------------------------------------------

  Cenário: Clicando 1x no icone de limpar - [caso]
  Dado que o estado da estória é [estado]
  Quando  eu renderizar o [caso]
  E digitar o texto [texto]
  E quero apagar o texto digitado
  E eu clicar em limpar
  Então contecerá um rollback
  E deverá ser exibido [spec]

  Exemplos:
    caso                     | estado               | spec                                 | texto
    ----------------------------------------------------------------------------------------------
    Com valor pré cadastrado | id_pessoa:{          | input:                               | 'a'
                             |  display:"Bernardo", |   text is: Bernardo                  |
                             |  _id: 4              | container:                           |
                             | }                    |   contains partly: div_awesome_clear |
                             |                      | icon_clear                           |
                             |                      |   inside partly: div_awesome_clear   |
                             |                      |   below: input_label                 |
    ----------------------------------------------------------------------------------------------
    Sem valor pré cadastrado | id_pessoa:{          | input:                               | 'Ber'
                             |   display:"",        |   text is:                           |
                             |   _id:null           |                                      |
                             | }                    |                                      |
    ----------------------------------------------------------------------------------------------

  Cenário: limpar pressionando a tecla Esc - [caso]
  Dado que o estado da estória é [estado]
  Quando  eu renderizar o [caso]
  E digitar o texto [texto]
  E quero apagar o texto digitado
  E eu pressionar a tecla Esc
  Então contecerá um rollback
  E deverá ser exibido [spec]

  Exemplos:
    caso                     | estado               | spec       | texto
    --------------------------------------------------------------------
    Com valor pré cadastrado | id_pessoa:{          | input:     | 'aa'
                             |  display:"Bernardo", |   text is: |
                             |  _id: 4              |            |
                             | }                    |            |
    --------------------------------------------------------------------

  Cenário: Clicando 2 vezes no icone de limpar -  [caso]
  Dado que o estado da estória é [estado]
  Quando  eu renderizar o [caso]
  E digitar o texto [texto]
  E eu quero apagar o texto digitado junto com o item já cadastrado
  E clicar 2 vezes em limpar
  Então deverá ser exibido [spec]

  Exemplos:
    caso                     | estado               | spec      | texto
    -------------------------------------------------------------------
    Com valor pré cadastrado | id_pessoa:{          | input:    | "a"
                             |  display:"Bernardo", |  text is: |
                             |  _id: 4              |           |
                             | }                    |           |
    -------------------------------------------------------------------

  Cenário: Teclas seta pra cima e pra baixo pressionadas - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E digitar o texto [texto]
  E pressionar [tecla]
  Então deverá ser exibido [spec]

  Exemplos:
    caso           | estado        | spec                                              | texto | tecla
    -----------------------------------------------------------------------------------------------------
    seta pra cima  | id_pessoa:{   | input:                                            | 'Ber' | "\uE013"
                   |   display:"", |   text is: Ber                                    |       |
                   |   _id:null    |                                                   |       |
                   | }             |                                                   |       |
    -----------------------------------------------------------------------------------------------------
    seta pra baixo | id_pessoa:{   | input:                                            | 'A'   | "\uE015"
                   |   display:"", |   text is: A                                      |       |
                   |   _id:null    | selected:                                         |       |
                   | }             |   css background-color is: rgba(224, 224, 224, 1) |       |
    -----------------------------------------------------------------------------------------------------

  Cenário: Selecionar pressionando tecla Enter - [caso]
  Dado que eu tenho o lookup com o [estado]
  Quando eu renderizar o [caso]
  E digitar o texto [texto]
  E eu pressionar seta pra baixo
  E eu pressionar a tecla Enter
  Então deverá ser exibido [spec]

  Exemplos:
    caso  | estado        | spec                | texto
    ---------------------------------------------------
    enter | id_pessoa:{   | input:              | 'Ber'
          |   display:"", |   text is: Bernardo |
          |   _id:null    |                     |
          | }             |                     |
    ---------------------------------------------------

  Cenário: Selecionar com click do mouse - [caso]
  Dado que eu tenho o lookup com o [estado]
  Quando eu renderizar o [caso]
  E digitar o texto [texto]
  E o lookup exibir a lista com o resultado
  E eu clicar em um item da lista
  Então deverá ser exibido [spec]

  Exemplos:
    caso                  | estado        | spec             | texto
    ----------------------------------------------------------------
    selecoionar com click | id_pessoa:{   | input:           | 'a'
                          |   display:"", |   text is: Carol |
                          |   _id:null    |                  |
                          | }             |                  |
    ----------------------------------------------------------------

  Cenário: scroll - [caso]
  Dado que eu tenho o lookup com o [estado]
  Quando eu renderizar o [caso]
  E digitar o texto [texto]
  E girar o scroll do mouse
  Então deverá ser exibido [spec]

  Exemplos:
    caso           | estado        | spec                             | texto
    -------------------------------------------------------------------------
    fazendo scroll | id_pessoa:{   | input:                           | 'a'
                   |   display:"", |   text is: houve o evento scroll |
                   |   _id:null    |                                  |
                   | }             |                                  |
    -------------------------------------------------------------------------

  Cenário: validações semelhante ao h5-input - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E o campo for requerido
  E eu sair do focu
  Então deverá ser exibido [spec]

  Exemplos:
    caso                   | estado                   | spec
    -------------------------------------------------------------
    @only
    saindo do focu com TAB | _autofocus: 'id_pessoa', | input:
                           | id_pessoa:{              |  text is:
                           |   display:"",            |
                           |   _id:null               |
                           | },                       |
                           | validate:[requerido]     |
                           |                          |
    -------------------------------------------------------------



#Cenário: validação lookup requerido
#  Dado 
#  Quando
#  Então
















#Cenário: Renderização com lookup fechado com valor
#  Dado que eu tenho um estado em uma estoria
#  E tenho um valor ja cadastrado
#  Quando eu renderizar [render]
#  Entao validar [spec]

#Cenário: Renderização com lookup aberto - [caso]
#  Dado que o estado da estória é [estado]
#  Quando eu renderizar [render]
#  Entao exibirá o resultado
#  E validar [spec]

#Cenário: Renderização pesquisando não encontrou
#  Dado que eu tenho um estado em uma estoria
#  Quando não encontrar [item] com o [texto]
#  Então mostrará a [mensagem]
#


#testar required, dever estar no field
#if(field.validations){
#    var required = field.validations.some(function(v){
#        return v.name == 'required';
#    });
#}


# testar ESC
#if(!Object.keys(this.state.lookupDataBackup).length){
#    this.state.lookupDataBackup.display = lookupdata.display;
#    this.state.lookupDataBackup._id = lookupdata._id;
#}
