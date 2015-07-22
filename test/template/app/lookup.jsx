import FluxEasy from 'flux-easy';
import Hlookup from '../../../src/lookup.js';
var Flux = require('flux');
var React = require('react/addons');
require('../../../src/font/css/font-awesome.min.css');
require('../../../src/style/style.less');

window.React = React;

window.hsession = {
    language: "pt_br"
};

var dispatcher = new Flux.Dispatcher();

class lookupStore extends FluxEasy.Store {

    constructor() {
        this.state.editing = {};
        this.state.editing_errors = {};
        this.state.db = [
        {
            _id: 1,
            name: "Ana",
            doc: '123',
            mae: null,
            sexo: 'F'
            },
        {
            _id: 2,
            name: "Maria",
            doc: '456',
            mae: 1,
            sexo: 'F'
            },
        {
            _id: 3,
            name: "Carol",
            doc: '789',
            mae: 1,
            sexo: 'F'
            },
        {
            _id: 4,
            name: "Bernardo",
            doc: '',
            mae: 3,
            sexo: 'M'
            },
        {
            _id: 5,
            name: "Julieta",
            doc: '',
            mae: 2,
            sexo: 'F'
            }
        ];
    }

    query(searchText, callback) {
        setTimeout(function(){
            callback(null, this.state.db.reduce(function (ret, item) {
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
}
class AppLookup extends FluxEasy.View {

    constructor() {
        AppLookup.lookup = lookupStore.createStoreReference(dispatcher);
    }

    render() {
        return (
            <table>
                <td>
                  <Hlookup store={this.lookup}
                      floatingLabelText = "Default"
                      hintText = "Selecione valor default"
                      field = 'default'
                      className = 'hcol6'
                      query = 'query'
                      lookup = {this.lookup}/>
                </td>
            </table>
        );
    }
}

var view = AppLookup.createViewReference(dispatcher);

React.render(React.createElement(view.Class), document.getElementById('app'));
