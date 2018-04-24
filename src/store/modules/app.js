import Cookies from 'js-cookie';

const app = {
    state: {
        language: Cookies.get('language') || 'en',
        editlang: 'en'
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            Cookies.set('language', language);
        },
        SET_EDITLANG: (state, editlang) => {
            state.editlang = editlang;
        },
    },
    actions: {

        setLanguage({ commit }, language) {
            commit('SET_LANGUAGE', language);
        },
        setEditlang({ commit }, editlang) {
            commit('SET_EDITLANG', editlang);
        }
    }
};

export default app;