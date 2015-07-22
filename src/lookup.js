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
        var field=state[this.props.field];

        var lookupdata = field && field.value ? field : "";

        if(field.validations){
            var required = field.validations.some(function(v){
                return v.name == 'required';
            });
        }

        if(!Object.keys(this.state.lookupDataBackup).length){
            this.state.lookupDataBackup.display = lookupdata.display;
            this.state.lookupDataBackup._id = lookupdata._id;
        }

        //Props TD
        var p = /(\d+)/.exec(this.props.className);
        var colspanx = p[1];

        var propstd = {
            colSpan: colspanx,
            className: 'h_lookup_td'
        };

        if (this.props.rowSpan)
            propstd.rowSpan = this.props.rowSpan;


        var notFoundText = this.props.notFoundText ? this.props.notFoundText : 'Nenhum resultado encontrado';

        var propsTextField = {};

        propsTextField.fullWidth = true;
        propsTextField.value = lookupdata.display != '' ? lookupdata.display : null;
        propsTextField.errorText = error ? error : ''
        propsTextField.name = this.props.field;
        propsTextField.floatingLabelText = required ?  "* " + this.props.floatingLabelText  : this.props.floatingLabelText;
        propsTextField.hintText = this.props.hintText;
        propsTextField.onChange = this.changed;
        propsTextField.onKeyUp = this.keyUp;
        propsTextField.onKeyDown = this.keyDown;
        propsTextField.ref = this.props.field;
        propsTextField.className = 'inputleft h_lookup_textField';
        propsTextField.onFocus = this.focus;
        propsTextField.onBlur = this.blur;



        var propsIconSearch = {}

        propsIconSearch.onClick = this.searchLupa.bind(this, '');
        propsIconSearch.iconClassName = this.state._searching ? 'fa fa-search searching h_lookup_iconSearch' : 'fa fa-search h_lookup_iconSearch';

        var propsIconClear = {};
        propsIconClear.onClick = this.clearAndSearch;
        propsIconClear.iconClassName = 'fa fa-times-circle hoverRed h_lookup_iconClear';

        var textAlignPaper = (this.state.searchResult && this.state.searchResult.length > 0)  ? '' : 'h_lookup_paper_center';
        var classPaper = this.isDropDown() ? ('animationDropDown h_lookup_paper ' + textAlignPaper)
                                                : ('h_lookup_paper ' + textAlignPaper);

        var classDivList = 'h_lookup_divList'
        var classList = 'h_lookup_list';

        var classDivWrap = 'h_lookup_div_wrap';

        var classNameLabel = this.state.focus || propsTextField.value != null ?
             'h_lookup_LabelComValue ' + (this.state.focus ? error ? 'erro' : 'focus' :  error ? 'erro' : ''):
            'h_lookup_LabelSemValue ' + (error ? 'erro' : '')

        var listResult = this.state.searchResult ? <div className={classList} >{this.state.searchResult.length > 0 ?
            this.state.searchResult.map(function (item, index) {
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
              }) : <span className='h_lookup_span_notFoundText'>
                      {notFoundText}
                  </span>}</div>
              : <span className="fa fa-repeat gira"></span>


        var listLookup = this.isDropDown() ?
            <div className={classDivList}>
                <div ref="lookup" className={classPaper}>
                    {listResult}
                </div> </div>
                : null;

        return (React.createElement("td", propstd,
                        React.createElement("div", {className: ('h_lookup_div' + (this.state.zIndex))},

                        [this.isDropDown() ? React.createElement("div", {className: classDivWrap}) : null,

                         React.createElement('label', {className: classNameLabel}, [this.props.floatingLabelText]),

                      !propsTextField.value && this.state.focus || propsTextField.value == '' && this.state.focus ?
                         React.createElement('label', {className: ('h_lookup_LabelSemValue ' + (error ? 'erro' : ''))},
                         [this.props.hintText]) : null,

                         React.createElement('input', propsTextField),

                         React.createElement('hr', {className: 'h_lookup_hr'}),

                        this.state.focus ? React.createElement('hr', {className: 'h_lookup_hr_focus'}) : null ,

                        error ?
                        React.createElement('span', {className: 'h_lookup_span_error'}, [error]) : null ,

                         React.createElement('div', {}, React.createElement(Icon, propsIconSearch)),

                         listLookup,
                         this.getEditingField().value.display ?
                                  React.createElement('div', {},
                                     React.createElement(Icon, propsIconClear)) : null]
                        )
                    )
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
        var field = this.getEditingField();

        if(field.display != this.state.lookupDataBackup.display){
            field.display = this.state.lookupDataBackup.display;
            field._id = this.state.lookupDataBackup._id;
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
                    self.props.lookup[self.props.query](self.state.searchingText, function (err, dados) {
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
        var field = this.getEditingField();
        field.value={display : ev.target.value,
        _id : null}
        this.setState({});
    },
    validate: function(field, selected){
        var state = this.props.store.getState();
        this.props.store.validate(this.props.field, selected.display)
    },
    selectItem: function(){
        this.closeDropDownlookup();
        var selected = this.state.searchResult[this.state.searchResultIndex];
        this.state.lookupDataBackup._id = selected._id;
        this.state.lookupDataBackup.display = selected.display;
        var field = this.getEditingField()
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
        var field = this.getEditingField()
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
        var state = this.props.store.getState();
        var field=state[this.props.field];
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
