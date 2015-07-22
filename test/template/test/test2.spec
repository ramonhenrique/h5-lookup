===========================================
input        css  input[name="default"]
body        xpath   /html/body
label         css  label[class="h_lookup_label h_lookup_focus"]
hr            css  hr[class="h_lookup_hr_focus"]
===========================================
body:
  contains: input 
  
input: 
  text is: maria
  
label:  
#  color is: rgb(0, 188, 212)                  
  text is: Selecione valor default
  
hr:
#  border-color: rgb(0, 188, 212)
                