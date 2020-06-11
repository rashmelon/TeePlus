
import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth';
import moduleUser from './user/moduleUser';
import modulePackage from './package/modulePackage';
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions';
import moduleAgency from "./agency/moduleAgency";
import moduleNotification from "./notification/moduleNotification";
import moduleCategory from "./category/moduleCategory";


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
        user: moduleUser,
        package: modulePackage,
        rolesAndPermissions: moduleRolesAndPermissions,
        agency: moduleAgency,
        notification: moduleNotification,
        category: moduleCategory,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
