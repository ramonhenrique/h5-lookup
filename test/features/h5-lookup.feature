  Funcionalidade: Componente para selecionar um registro de uma tabela
  Para permitir ao usuário escolher um registro existente
  Eu, como programador
  Desejo utilizar o componete h5-lookup

  Cenário: Renderização com lookup fechado - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  Entao validar [spec]
  
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
                      |    _id:null              |
                      |  }                       |
                      |                          | icon_clear:
                      |                          |   css position is: absolute
                      |                          |   css font-size is: 14px
                      |                          |
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
  Então validar [spec]

  Exemplos:
    caso                   | estado        | spec                   | texto
    ---------------------------------------------------------------------------
    pesquisa com resultado | id_pessoa:{   | container:             | 'a'
                           |   display:"", |   contains: input_wrap |
                           |   _id:null    |                        |
                           | }             |                        |
    ---------------------------------------------------------------------------
  
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
#  
#  Exemplos:
#    caso              | estado                   | spec
#    -----------------------------------------------------------------------------------------------

#Cenário: Renderização pesquisando não encontrou
#  Dado que eu tenho um estado em uma estoria
#  Quando não encontrar [item] com o [texto]
#  Então mostrará a [mensagem] 
#
#Cenário: Clicando na icone pesquisar
#  Dado que eu não digitei o [texto]
#  Quando eu clicar no icone pesquisar 
#  Então o componente mostrará por completo o [registro_existente]
#
#Cenário: Clicando 1x no icone de limpar ou pressionando a tecla Esc
#  Dado que eu digitei o [texto]
#  E eu quero apagar o [texto]
#  Quando eu clicar em limpar
#  E eu tiver um [intem] ja cadastrado anteriormento
#  Então contecerá um rollback
#
#Cenário: Clicando 2x no icone de limpar 
#  Dado que eu digitei o [texto]
#  E eu quero apagar o [texto] digitado junto com o item já cadastrado
#  Quando eu clicar 2x em limpar
#  Então o campo ficará em branco
#  E o componente lookup exibirá por completo o [registro_existente]
#
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
