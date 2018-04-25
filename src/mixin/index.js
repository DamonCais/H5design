import Vue from 'vue';
import { mapGetters } from 'vuex';

Vue.mixin({
    methods: {
        _(value, path) {
            return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path).reduce((o, k) => (o || {})[k], value) || undefined;
        }
    },
    filters: {
        // _(value, path) {
        //     return (!Array.isArray(path) ? path.replace(/\[/g, '.').replace(/\]/g, '').split('.') : path).reduce((o, k) => (o || {})[k], value) || undefined;
        // }
    },
    computed: {
        ...mapGetters(['language', 'editlang', 'shoppingMallId'])
    },
});