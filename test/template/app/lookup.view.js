import Hlookup from '../../../src/lookup.js';
var React = require('react/addons');

window.React = React;
window.hsession = {
    language: "pt_br"
};
var mock_store_pessoas={
  peoples:[
      {_id: 1, name: "Ana", doc: '123', mae: null, sexo: 'F'},
      {_id: 2, name: "Maria", doc: '456', mae: 1, sexo: 'F'},
      {_id: 3, name: "Carol", doc: '789', mae: 1, sexo: 'F'},
      {_id: 4, name: "Bernardo", doc: '', mae: 3, sexo: 'M'},
      {_id: 5, name: "Julieta", doc: '', mae: 2, sexo: 'F'},
      {_id: 6, name: "Teresa", doc: '', mae: 1, sexo: 'F'},
      {_id: 7, name: "Julian", doc: '', mae: 2, sexo: 'M'}
    ]
};

var mock_store =  {
    fields: {___fields___},
    query: function(searchText, callback) {
        setTimeout(function(){
            callback(null, mock_store_pessoas.peoples.reduce(function (ret, item) {
                var itemName = item.name.toUpperCase();
                var searchTextaux = searchText.toUpperCase();
                if (searchText === '' || itemName.indexOf(searchTextaux) >= 0 || item._id == searchText) {
                    ret.push({
                        _id: item._id,
                        name: item.name,
                        sexo: item.sexo,
                        display: item.name
                    });
                }
                return ret;
            }, []));
        }, 200);
    }
};

var View = React.createClass({
    render: function () {
        return (
            React.createElement(Hlookup, {
                store:mock_store,
                floatingLabelText:"Default",
                hintText:"Selecione valor default",
                field:'id_pessoa',
                className:'hcol6',
                query:'query',
                lookup:mock_store_pessoas,
                ref: 'btn'
                }
            )
        )
    }
});

React.render(<table><td><View/></td></table>, document.body);











//class lookupStore extends FluxEasy.Store {
//
//    constructor() {
//        this.state.editing = {};
//        this.state.editing_errors = {};
//        this.state.db = [
//        {
//            _id: 1,
//            name: "Ana",
//            doc: '123',
//            mae: null,
//            sexo: 'F'
//            },
//        {
//            _id: 2,
//            name: "Maria",
//            doc: '456',
//            mae: 1,
//            sexo: 'F'
//            },
//        {
//            _id: 3,
//            name: "Carol",
//            doc: '789',
//            mae: 1,
//            sexo: 'F'
//            },
//        {
//            _id: 4,
//            name: "Bernardo",
//            doc: '',
//            mae: 3,
//            sexo: 'M'
//            },
//        {
//            _id: 5,
//            name: "Julieta",
//            doc: '',
//            mae: 2,
//            sexo: 'F'
//            }
//        ];
//    }
//
//    query(searchText, callback) {
//        setTimeout(function(){
//            callback(null, this.state.db.reduce(function (ret, item) {
//                var itemName = item.name.toUpperCase();
//                var searchTextaux = searchText.toUpperCase();
//                if (searchText === '' || itemName.indexOf(searchTextaux) >= 0 || item._id == searchText) {
//                    ret.push({
//                        _id: item._id,
//                        name: item.name,
//                        sexo: item.sexo,
//                        display: item.name
//                    });
//                }
//                return ret;
//            }, []));
//        }, 200);
//    }
//}
