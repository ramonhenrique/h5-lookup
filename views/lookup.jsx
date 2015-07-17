import FluxEasy from 'flux-easy';
import lookup from '../stores/lookup.js';
require('../style.less')

import H from '../libs/h5mobile/h5frontend.js';


class AppLookup extends FluxEasy.View {

    constructor() {
        AppLookup.lookup = lookup.createStoreReference(dispatcher);
        this.state.errorTextName = this.lookup.getState().errorTextName;
        this.state.errorDocument = this.lookup.getState().errorDocument;
    }

    render() {
        return (
            <H.Form labelText = {{pt_br: "lookup"}} >
                <H.Row>
                  <H.Lookup store={this.lookup}
                      floatingLabelText = "Default"
                      hintText = "Selecione valor default"
                      field = 'default'
                      className = 'hcol6'
                      query = 'queryMaes'
                      lookup = {this.lookup}/>
               </H.Row>
            </H.Form>
        );
    }
}

export default AppLookup;
