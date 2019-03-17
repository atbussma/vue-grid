import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// State Store Singleton
//   - all data is maintained in the store
//   - all data is changed in the store via mutations
export default new Vuex.Store({
    state: {
        // Single instance Grid Component data (unnamed)
        gridData: {
            numberOfColumns: 3,
            gridCells: [
              'G', 'G', 'G',
              'G', 'G', 'G',
              'G', 'G', 'G'
            ],
            computeCustomClasses: function() {
              return "active"
            },
        },
    },
    mutations: {
    },
});