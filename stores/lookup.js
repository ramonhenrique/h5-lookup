import FluxEasy from 'flux-easy';
import V from './validations';

window.hsession = {
    language: "pt_br"
};

function DB() {
    
    var db = [
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
            },
        {
            _id: 6,
            name: "Mariana",
            doc: '',
            mae: 5,
            sexo: 'F'
            },
        {
            _id: 7,
            name: "Pedrito",
            doc: '',
            mae: 6,
            sexo: 'M'
            },
        {
            _id: 8,
            name: "José",
            doc: '',
            mae: 5,
            sexo: 'M'
            },
        {
            _id: 9,
            name: "Dilma",
            doc: '',
            mae: 10,
            sexo: 'F'
            },
        {
            _id: 10,
            name: "Lula",
            doc: '',
            mae: 9,
            sexo: 'M'
            },
        {
            _id: 11,
            name: "George W. Bush",
            doc: '',
            mae: 9,
            sexo: 'M'
            },
        {
            _id: 12,
            name: "Neide",
            doc: '123123',
            mae: 9,
            sexo: 'F'
            },
        ];

    this.find = function (id, callback) {
        setTimeout(function(){
            var dado = db.reduce(function (ret, item) {
                if (!ret && item._id == id)
                    return item;
                return ret;
            }, null);
            if (dado.mae)
                dado={
                    _id: dado._id,
                    name: dado.name,
                    doc: dado.doc,
                    sexo: dado.sexo,
                   mae : {
                      _id: dado.mae,
                      display: db.reduce(function (ret, item) {
                          if (!ret && item._id == dado.mae)
                              return item.name+' '+item.doc;
                          return ret;
                      }, null)
                   }
                };
            callback(null, dado);
        }, 1000);
    };

    this.search = function (searchText, callback) {
        setTimeout(function(){
            callback(null, db.reduce(function (ret, item) {
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
        }, 1000);
    }

    this.save = function (listing, editing, callback) {
        setTimeout(function () {
            if (editing._id) {
                for (var i = 0; i < db.length; i++)
                    if (db[i]._id == editing._id) {
                        db[i].name = editing.name;
                        db[i].doc = editing.doc;
                        db[i].mae = editing.mae._id
                    }
                for (var i = 0; i < listing.length; i++)
                    if (listing[i]._id == editing._id) {
                        listing[i].name = editing.name;
                    }
            } else {
                editing._id = db.reduce(function (maior, d) {
                    if (d._id > maior)
                        return d._id;
                    else
                        return maior;
                }, 0) + 1;
                db.push(editing);
                listing.push({
                    _id: editing._id,
                    name: editing.name
                });
            }
            callback(null);
        }, 400);
    }
}

var postgres = new DB();

var steps = {
    lista: require('bundle?lazy!../views/lookup.jsx')
};


class lookupStore extends FluxEasy.Store {

    constructor() {
        this.state.step = steps.lista;

        this.state.listing = [];
        this.state.editing = {};
        this.state.editing_errors = {};
        this.state.validations = {
            name: [V.required],
            mae: [V.required],
            doc: [V.required, function(field, value){
        if (value=='123')
          return "Necessario ser diferente";
        }]
        };
    }

    queryPais(text, callback) {
        postgres.search(text, function (err, resp) {
            callback(null, resp.filter((r)=>r.sexo=='M'));
        }.bind(this));
    }

    queryMaes(text, callback) {
        postgres.search(text, function (err, resp) {
            callback(null, resp.filter((r)=>r.sexo=='F'));
        }.bind(this));
    }
    validate(field, value){
        return this.state.validations[field].some(function(v){
            var erro = v(field, value);
            if(erro){
                this.state.editing_errors[field]=erro;
                this.emit("RefreshEdit")
                return true;
            }
            else delete this.state.editing_errors[field];
        });
    }
}

export default lookupStore;
