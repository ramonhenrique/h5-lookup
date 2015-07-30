var React = require('react');
var h5mixinprops = require('./mixins/h5mixinprops');
var h5dropdown = require('./mixins/h5dropdown');
var Icon = require('./icon');
require('./lookup.less');

var zIndex= 40;
var Lookup = React.createClass({
    mixins: [h5dropdown],
    propTypes: {
        store: React.PropTypes.object.isRequired,
        floatingLabelText: React.PropTypes.string.isRequired,
        hintText: React.PropTypes.string.isRequired,
        query: React.PropTypes.string.isRequired,
        field: React.PropTypes.string.isRequired,
        notFoundText: React.PropTypes.string
    },
    getInitialState: function () {
        return {
            tmSearch: null,
            _searching: false,
            searchingText: null,
            searchResult: [],
            searchResultIndex: -1,
            lookupDataBackup: {},
            zIndex: zIndex--,
            focus: false
        }
    },
    render: function () {
        var self = this;
        var state = this.props.store;
        var field=state.fields[this.props.field].value ? state.fields[this.props.field].value : state.fields[this.props.field];
        var lookupdata = field && field.display ? field : "";
        var p = /(\d+)/.exec(this.props.className); //Props TD
        var colspanx = p[1];
        var propstd = {colSpan: colspanx, className: 'h_lookup_td'};
        if (this.props.rowSpan)
            propstd.rowSpan = this.props.rowSpan;
        var notFoundText = this.props.notFoundText ? this.props.notFoundText : 'Nenhum resultado encontrado';
        var textAlignPaper = (this.state.searchResult && this.state.searchResult.length > 0)  ? '' : 'h_lookup_paper_center';
        var classPaper = this.isDropDown() ? ('animationDropDown h_lookup_paper ' + textAlignPaper) : ('h_lookup_paper ' + textAlignPaper);
        var classDivList = 'h_lookup_divList'
        var classList = 'h_lookup_list';

        var propsTextField = {};
        (function DefinePropsTextField(){
            propsTextField.fullWidth = true;
            propsTextField.value = lookupdata.display != '' ? lookupdata.display : null;
            propsTextField.errorText = field.error ? field.error : '';
            propsTextField.floatingLabelText = self.props.floatingLabelText;
            propsTextField.hintText = lookupdata.display == '' ? self.props.hintText : null;
            propsTextField.onChange = self.changed;
            propsTextField.onKeyUp = self.keyUp;
            propsTextField.onKeyDown = self.keyDown;
            propsTextField.ref = self.props.field;
            propsTextField.className = self.state.focus ? 'h_lookup_textField_focus input inputleft input_'+ self.props.field : 'h_lookup_textField input inputleft input_'+ self.props.field;
            propsTextField.onFocus = self.focus;
            propsTextField.autoFocus = state.fields._autofocus ? true : false;
            propsTextField.onBlur = self.blur;
        }());

        var classNameLabel = null;
        (function DefineClassNameLabel(){
            return classNameLabel = self.state.focus || propsTextField.value != null ?
                'h_lookup_LabelComValue ' + (self.state.focus ? field.error ? 'erro' : 'focus' :  field.error ? 'erro' : ''):
                  'h_lookup_LabelSemValue ' + (field.error ? 'erro' : '')
        }());

        var propsIconSearch = {};
        (function DefinePropsIconSearch(){
            return  propsIconSearch = {
              onClick : self.searchLupa.bind(self, ''),
              iconClassName : self.state._searching ? 'fa fa-search searching h_lookup_iconSearch' : 'fa fa-search h_lookup_iconSearch'
            }
        }());

        var propsIconClear = {};
        (function DefinePropsIconClear(){
            return propsIconClear = {
              onClick : self.clearAndSearch,
              iconClassName : 'fa fa-times-circle hoverRed h_lookup_iconClear'
            }
        }());

        var listResult=null;
        (function DefineListResult(){
            return listResult = self.state.searchResult ? <div className={classList} >{self.state.searchResult.length > 0 ?
                self.state.searchResult.map(function (item, index) {
                  var classItemList = 'h_lookup_itemList';
                  if(index == self.state.searchResultIndex){
                          classItemList = classItemList + ' selected';
                  }
                  var propsItemList={};
                  propsItemList.onTouchTap = function(e){
                              e.preventDefault();
                              self._click(index);
                  };
                  propsItemList.className = classItemList;
                  return React.createElement('div', propsItemList,
                           [React.createElement('span', {className: 'h_lookup_span_itemSearch'}, item.display)])
                }) : <span className='h_lookup_span_notFoundText'>{notFoundText}</span>
            }</div> : <span className="fa fa-repeat gira"></span>
        }());

        var listLookup = null;
        (function DefineLookup(){
            return listLookup = self.isDropDown() ?
                <div className={classDivList}>
                    <div ref="lookup" className={'lista'+ classPaper}>
                        {listResult}
                    </div>
                </div> : null;
        }());

        /*
          input_container - É uma div que engloba: input_label, input_placeholder, input, input_underline, icons_awesome, input_error
          input_label - label que recebe o atributo floatingLabelText
          placeholder - label recebe o atributo hintText
          input - input que recebe como propriedade o objeto propsTextField
          input_underline - hr que mudam de propriedades quando o input está ou não com foco ou vermelho se tiver erro
          icons_awesome - div's que possuem os icones de lupa(pesquisar) e clear(limpar)
          input_error - span que mostra a mensagem de erro caso tenha error
          input_wrap - É uma div que somente aparece quando o lookup está aberto e faz uma borda acinzetanda
        */
        var input_wrap = function(){
          return [
            self.isDropDown() ? React.createElement("div", {className: 'input_wrap h_lookup_div_wrap'}) : null
          ];
        };
        var input_label = function(){
          return [
            React.createElement('label', {className: 'input_label '+ classNameLabel}, [self.props.floatingLabelText])
          ]
        };
        var input_placeholder = function(){
          return [
            !propsTextField.value && self.state.focus || propsTextField.value == '' && self.state.focus ?
            React.createElement('label', {className: ('input_placeholder h_lookup_LabelSemValue '+ (field.error ? 'erro' : ''))}, [self.props.hintText]) : null
          ];
        };
        var input = function(){
          return [
            React.createElement('input', propsTextField)
          ];
        };
        var input_error = function(){
          return [
            field.error ? React.createElement('span', {className: 'input_error h_lookup_span_error'}, [field.error]) : null //css h_lookup_span_error -> msg_error
          ];
        };

        var icons_awesome = function(){
          return [
            React.createElement('div', {className:"div_awesome_lupa"}, React.createElement(Icon, {
              onClick : self.searchLupa.bind(self, ''),
              iconClassName : self.state._searching ? 'fa fa-search searching h_lookup_iconSearch' : 'fa fa-search h_lookup_iconSearch'
            })),
            (field.display != "" && field.display != null)  ? React.createElement('div', {className:"div_awesome_clear"}, React.createElement(Icon, propsIconClear)) : null
          ];
        };

        function input_container(){
          return React.createElement("td", propstd,
              React.createElement("div", {className: ('input_container h_lookup_div' + (self.state.zIndex))}, input_wrap().concat(input_label()).concat(input_placeholder()).concat(input()).concat(input_error()).concat(icons_awesome()), listLookup
              )
            )
        };

        return (
          input_container()
        );
    },
    componentClickAway: function componentClickAway() {
        this.closeDropDownlookup();
    },
    openDropDownlookup: function(){
       this.openDropDown();
       this.setState({
           keyUpScroll: 0
       });
    },
    closeDropDownlookup: function(){
       this.closeDropDown();
    },
    _click: function(index){
        this.state.searchResultIndex = index;
        this.selectItem();
    },
    scrollItemTop: function(){
      if(this.state.keyUpScroll > 1)
        this.state.keyUpScroll -= 1;
      else
        React.findDOMNode(this.refs.lookup).scrollTop -= 36;
    },
    scrollItemDown: function(){
      if(this.state.keyUpScroll < 5)
         this.state.keyUpScroll += 1;
      else
         React.findDOMNode(this.refs.lookup).scrollTop += 36;
    },
    keyDown: function(e){
        if (e.key == 'Tab') {
            this.cancelSelectItem();
        }
    },
    keyUp: function (e) {
        var self = this;
        e.preventDefault();
        if (e.key == 'ArrowUp' && !self.state._searching) {
            if(self.state.searchResultIndex > 0){
              this.scrollItemTop();
              self.state.searchResultIndex = self.state.searchResultIndex - 1;
              self.setState({});
            }
        }
        else if (e.key == 'ArrowDown'&& !self.state._searching) {
            if(self.state.searchResultIndex < self.state.searchResult.length - 1){
                this.scrollItemDown();
                self.state.searchResultIndex = self.state.searchResultIndex + 1;
                self.setState({});
            }
        }
        else if (e.key == 'Enter' && !self.state._searching) {
            this.selectItem();
        }
        else if (e.key == 'Escape') {
            this.cancelSelectItem();
        }
        else if((this.state.searchingText==null) || (this.state.searchingText.trim() != e.target.value.trim())){
            this.search(e);
        }
    },
    clearAndSearch: function(){
        React.findDOMNode(this.refs[this.props.field]).focus();
        var field = this.getEditingValue();

        if(field.display!= '' && field.display != field.value.display){
            field.value={
                display: field.display,
                _id: field._id
            }
        }
        else{
            field.display = '';
            field._id = null;
            this.search('');
        }
        this.setState({});
    },
    searchLupa: function(v){
        React.findDOMNode(this.refs[this.props.field]).focus();
        this.search(v);
    },
    search: function(v){
        var self = this;
        var valor;
        if(v.target)
            valor = v.target.value;
        else
           valor = v;

        self.setState({
                searchingText: valor
            });

            if (self.state._searching)
                scheduleSearch();
            else
                triggerSearch();

            function scheduleSearch() {
                setTimeout(function () {
                    if (self.state._searching)
                        scheduleSearch();
                    else
                        triggerSearch();
                }, 300);
            }

            function triggerSearch() {
                self.openDropDownlookup()
                self.setState({
                    searchResult: null
                });
                if (self.state.tmSearch)
                    clearTimeout(self.state.tmSearch);
                self.state.tmSearch = setTimeout(function () {
                    self.state.tmSearch = null;
                    self.state._searching = true;
                    self.setState({});
                    self.props.store[self.props.query](self.state.searchingText, function (err, dados) {
                        if(self.state._searching){
                          self.setState({
                              _searching: false,
                              searchResult: dados,
                              searchResultIndex: -1
                          });
                        }
                    });

                }, 350);
            }
    },
    changed: function (ev) {
        var field = this.getEditingValue();
        field.value={
            display : ev.target.value,
            _id : null
        }
        this.setState({});
    },
    validate: function(field, selected){
        var state = this.props.store;
        this.props.store.validate(this.props.field, selected.display)
    },
    selectItem: function(){
        this.closeDropDownlookup();
        var selected = this.state.searchResult[this.state.searchResultIndex];
        this.state.lookupDataBackup._id = selected._id;
        this.state.lookupDataBackup.display = selected.display;
        var field = this.getEditingValue()
        field.value._id = selected._id;
        field.value.display = selected.display;
        this.validate(field, selected);
        this.setState({
            searchingText: null,
            searchResult: [],
            searchResultIndex: null
        });
    },
    cancelSelectItem: function(){
        this.state._searching = false;
        var field = this.getEditingValue()
        field.value._id = this.state.lookupDataBackup._id;
        field.value.display = this.state.lookupDataBackup.display;
        this.closeDropDownlookup();
        this.setState({
            searchingText: null,
            searchResult: [],
            searchResultIndex: null
        });
    },
    getEditingValue(){
        var state = this.props.store;
        var field=state.fields[this.props.field];
        if(field && field.display)
           return field;
        else{
           field.value = {_id: null, display:null};
           return field;
        }
    },
    focus: function(e){
        this.setState({focus: true})
    },
    blur: function(e){
        var self = this;
        setTimeout(function(){
            self.closeDropDownlookup();
        }, 100);
        this.setState({focus: false})
    },
});

module.exports = Lookup;









