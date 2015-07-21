import FluxEasy from 'flux-easy';

window.hsession = {
    language: "pt_br"
};

class lookupStore extends FluxEasy.Store {

    constructor() {
        this.state.editing = {
            default:{
                display: "maria",
                _id: null
            }
        };
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

export default lookupStore;
