Funcionalidade: Componente para selecionar um registro de uma tabela
  Para permitir ao usuário escolher um registro existente
  Eu, como programador
  Desejo utilizar o componete h5-lookup

Cenário: Renderização com lookup fechado sem foco
  Dado que o estado da estória é [estado]
  Quando eu renderizar o [caso]
  Entao validar [spec]
  
  Exemplos:
    caso                  | estado          | spec
    ------------------------------------------------------------
    campo vazio sem erros |  id_pessoa:{    | input:
                          |     display:"", |   text is:
                          |     _id:null    | label:
                          |     }           |   text is: Default
                          |                 |
    ------------------------------------------------------------

#  Cenário: Renderização com lookup fechado
#  Dado que o estado da estória é [estado]
#  Quando eu renderizar o [caso]
#  Entao se o campo não tiver foco, validar [spec_lookup_sem_foco]
#  E se o campo tiver foco, validar [spec_lookup_com_foco]
#
#Exemplos:
#  caso                          | estado                |  spec_lookup_sem_foco                         |  spec_lookup_com_foco
#  -------------------------------------------------------------------------------------------------------------------------------
#  campo vazio sem erros         | { campo:              |  input[name="default"]                        | label[class="h_lookup_label h_lookup_focus"]~spam
#                                |     editing:{         |    text is:                                   |   color: rgb(0, 188, 212)
#                                |       c1:""           |                                               |   text is: Selecione valor default
#                                |     }                 |  label[class="h_lookup_label semValue"]~spam  |
#                                | }                     |    color: rgba(0, 0, 0, 0.298039)             | hr[class="h_lookup_hr_focus"]
#                                |                       |    text is: Default                           |   border-color: rgb(0, 188, 212)
#                                |                       |                                               |
#  -----------------------------------------------------------------------------------------------------------------------------------
  
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
#  
#
#
#
#
#
#
