Funcionalidade: Componente para selecionar um registro de uma tabela
  Para permitir ao usuário escolher um registro existente
  Eu, como programador
  Desejo utilizar o componete h5-lookup

Cenário: Renderização com lookup fechado - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  Entao validar [spec]
  
  Exemplos:
    caso              | estado              | spec
    ---------------------------------------------------------------------------------
    @only
    campo vazio       | id_pessoa:{         | input:
                      |    display:"",      |   text is:
                      |    _id:null         | span_semValue:
                      | }                   |   text is: Default
                      |                     | container:
                      |                     |
    ---------------------------------------------------------------------------------
    campo com valor   | id_pessoa:{         | input:
                      |   display:"Ana",    |   text is: Ana
                      |   _id:1001          | span_comValue:
                      | }                   |   text is: Default
    ---------------------------------------------------------------------------------
    verificar awesome |  id_pessoa:{        | icon_lupa:
                      |    display:"Maria", |   css font-size is: 14px
                      |    _id:null         |   width: 14px
                      |  }                  |   css color is:  rgba(158, 158, 158, 1)
                      |                     |   css left is: 0px
                      |                     | icon_clear:
                      |                     |   css right is: 10px
                      |                     |   width: 10px
                      |                     |   css color is: rgba(158, 158, 158, 1)
                      |                     |   css position is: absolute
                      |                     |   css bottom is: 18px
                      |                     |   css font-size is: 14px
    ---------------------------------------------------------------------------------

Cenário: Renderização com lookup fechado com foco - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  E clicar no [componente]
  Entao validar [spec]

  Exemplos:
    caso                  | estado            | spec                                            | componente
    --------------------------------------------------------------------------------------------|------------------------
    campo vazio sem erros | id_pessoa:{       | label_comValueFocus:                            | input[name="id_pessoa"]
                          |   display:"",     |   color: rgb(0, 188, 212)                       |
                          |   _id:null        |   text is: Default                              |
                          | }                 |   position: absolute                            |
                          |                   |   line-height: 22px                             |
                          |                   |   opacity: 1                                    |
                          |                   | hr                                              |
                          |                   |   border-bottom: solid 1px rgb(224, 224, 224)   |
                          |                   |   position: absolute                            |
                          |                   |   width: 100%                                   |
                          |                   |   bottom: 8px                                   |
                          |                   |   margin: 0                                     |
                          |                   |   box-sizing: content-box                       |
                          |                   |   height: 0                                     |
                          |                   | hr_focus                                        |
                          |                   |   border-style: none none solid                 |
                          |                   |   border-bottom-width: 2px                      |
                          |                   |   position: absolute                            |
                          |                   |   width: 100%                                   |
                          |                   |   bottom: 8px                                   |
                          |                   |   margin: 0px                                   |
                          |                   |   box-sizing: content-box                       |
                          |                   |   height: 0px                                   |
                          |                   |   border-color: rgb(0, 188, 212)                |
                          |                   |   transform: scaleX(1)                          |
                          |                   | span_semValue:                                  |
                          |                   |   position: absolute                            |
                          |                   |   line-height: 22px                             |
                          |                   |   opacity: 1                                    |
                          |                   |   color: rgba(0, 0, 0, 0.298039)                |
                          |                   |   top: 38px                                     |
                          |                   |   left: 18px                                    |
                          |                   |   text is: Selecione valor default              |
    ---------------------------------------------------------------------------------------------------------------------
  
#Cenário: Renderização com lookup fechado com valor
#  Dado que eu tenho um estado em uma estoria
#  E tenho um valor ja cadastrado
#  Quando eu renderizar [render]
#  Entao validar [spec]
#
#Cenário: Renderização com lookup aberto 
#  Dado que eu tenho um estado em uma estoria
#  Quando eu renderizar [render]
#  Entao exibirá o resultado
#  E validar [spec]
#  
#Cenário: Renderização pesquisando encontrou
#  Dado que eu tenho um estado em uma estoria
#  Quando encontrar [item] com o [texto]
#  Então mostrará o [registro_existente]
#
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

# if(field.validations){
#            var required = field.validations.some(function(v){
#                return v.name == 'required';
#            });
#        }


# testar ESC


#        if(!Object.keys(this.state.lookupDataBackup).length){
#            this.state.lookupDataBackup.display = lookupdata.display;
#            this.state.lookupDataBackup._id = lookupdata._id;
#        }
