function scroll(){
  document.getElementsByClassName('listaanimationDropDown h_lookup_paper ')[0].addEventListener('scroll', function(){
    document.getElementsByClassName("input")[0].value = "houve o evento scroll";
  });
  var h_lookup_list = document.getElementsByClassName('listaanimationDropDown h_lookup_paper ')[0];
  h_lookup_list.scrollTop +=60;
}
scroll();
