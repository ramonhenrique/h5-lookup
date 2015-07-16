Funcionalidade: Componente para selecionar um registro de uma tabela
  Para permitir ao usuário escolher um registro existente 
  Eu, como programador  
  Desejo utilizar o componete h5-lookup 
 
Cenário: Renderização com lookup aberto
  Dado que eu tenho um estado em uma estoria
  Quando eu renderizar [render]
  Entao validar [spec]
  E mostrar o estado 

Cenário: Renderização com lookup fechado
  Dado que eu tenho um estado em uma estoria
  Quando eu renderizar [render]
  Entao validar [spec]

Cenário: Renderização pesquisando
  Dado 
  Quando encontrou/não encontrou
  Então

Cenário: Clicando na icone pesquisar
  Dado que eu não digitei o [texto]
  Quando eu clicar no icone pesquisar 
  Então o componente mostrará por completo um registro existente 

Cenário: Clicando no icone de limpar
  Dado que eu digitei o [texto]
  E eu quero apagar
  Quando eu clicar em 
  Então

Cenário: Tecla pra cima
  Dado 
  Quando
  Então

Cenário: Tecla pra baixo
  Dado 
  Quando
  Então

Cenário: Tecla Enter
  Dado 
  Quando
  Então

Cenário: Tecla Esc
  Dado 
  Quando
  Então

Cenário: Scroll com teclado
Dado 
Quando
Então

Cenário: Scroll com mouse
Dado 
Quando
Então

Cenário: Scroll com mouse
Dado 
Quando
Então

Cenário: Selecionar com click do mouse
Dado 
Quando
Então

Cenário: validações semelhante ao h5-input
Dado 
Quando
Então



#verificar 
# validações, se é requerido 




