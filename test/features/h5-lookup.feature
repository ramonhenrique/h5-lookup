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
                  |   _id:null    |   inside: input_wrap                   |
                  | }             |   below: input                         |
                  |               | itemList:                              |
                  |               |   inside partly: divList               |
                  |               |   below: list -180px                   |
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
  Então deverá ser exibido [spec]

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

  Cenário: Clicando 1x no icone de limpar ou pressionando a tecla Esc - [caso]
  Dado que o estado da estória é [estado]
  Quando  eu renderizar o [caso]
  E digitar o [texto]
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
    @only
    Apagando com tecla Esc   | id_pessoa:{          | input:                               | 'aa'
                             |  display:"Bernardo", |   text is: Bernardo                  |
                             |  _id: 4              | container:                           |
                             | }                    |   contains partly: div_awesome_clear |
                             |                      | icon_clear                           |
                             |                      |   inside partly: div_awesome_clear   |
                             |                      |   below: input_label                 |
    ----------------------------------------------------------------------------------------------

  Cenário: Clicando 2 vezes no icone de limpar -  [caso]
  Dado que o estado da estória é [estado]
  Quando  eu renderizar o [caso]
  E eu quero apagar o texto digitado junto com o item já cadastrado
  E clicar 2 vezes em limpar
  Então E deverá ser exibido [spec]

  Exemplos:
    caso                     | estado               | spec      | texto
    -------------------------------------------------------------------
    Com valor pré cadastrado | id_pessoa:{          | input:    | "a"
                             |  display:"Bernardo", |  text is: |
                             |  _id: 4              |           |
                             | }                    |           |
    -------------------------------------------------------------------

  Cenário: Teclas pressionadas
  Dado lookup exibindo [estado]
  Quando eu pressionar [caso]
  Então ser exibido [spec]

  Exemplos:
    caso           | estado   | spec
    ----------------------------------
    seta pra cima  | [estado] | [spec]
                   |          |
                   |          |
                   |          |
    ----------------------------------
    seta pra baixo | [estado] | [spec]
                   |          |
                   |          |
                   |          |
    ----------------------------------
    scroll         | [estado] | [spec]
                   |          |
                   |          |
                   |          |
    ----------------------------------
    enter          | [estado] | [spec]
                   |          |
                   |          |
                   |          |
    ----------------------------------



#Cenário: seta pra cima, seta pra baixo e scroll
#  Dado que eu tenho o lookup exibindo o [registro_existente]
#  Quando eu pressionar a tecla pra cima
#  Então mudar o foco de seleção dos itens exibidos no lookup
#
#Cenário: Tecla Enter
#  Dado que eu tenho o lookup exibindo o [registro_existente]
#  E algum item do lookup estiver com foco de seleção
#  Quando eu pressionar a tecla Enter
#  Então o [texto] passará a ser o item selecionado
#
#Cenário: Selecionar com click do mouse
#  Dado que eu tenho o lookup exibindo uma lista com [registro_existente]
#  Quando eu clicar em um item da lista 
#  Então o [texto] passará a ser o item selecionado
#
#Cenário: validações semelhante ao h5-input
#  Dado 
#  Quando
#  Então
#
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
