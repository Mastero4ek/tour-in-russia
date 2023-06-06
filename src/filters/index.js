import Vue from "vue";

Vue.filter('cutText', (str) => {
    if (str.length >= 400) {
        return str.slice(0, 403);
    } else {
        return str
    }
})