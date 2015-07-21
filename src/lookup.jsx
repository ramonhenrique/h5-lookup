import FluxEasy from 'flux-easy';
import lookup from './lookup.js';
import Hlookup from '../libs/h5mobile/components/lookup.js';
require('../style.less');

class AppLookup extends FluxEasy.View {

    constructor() {
        AppLookup.lookup = lookup.createStoreReference(dispatcher);
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

export default AppLookup; 
