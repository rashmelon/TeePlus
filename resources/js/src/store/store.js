
import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth';
import moduleEmployee from './employee/moduleEmployee';
import modulePackage from './package/modulePackage';
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions';
import moduleAgency from "./agency/moduleAgency";
import moduleNotification from "./notification/moduleNotification";


const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        employee: moduleEmployee,
        package: modulePackage,
        rolesAndPermissions: moduleRolesAndPermissions,
        agency: moduleAgency,
        notification: moduleNotification,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
