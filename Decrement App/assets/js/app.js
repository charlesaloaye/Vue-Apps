// App Component
let counter = Vue.component('counter', {
    template: `<div>
    <h3>Count: {{this.count}}</h3>
    
    <button class='counter-btn' @click='decrement'>Decrease by {{this.subNum}}</button>
    </div>`,

    props: {
        subNum: {
            type: Number,
            default: 1,
        }
    },

    data() {
        return {
            count: 500000
        }
    },

    methods: {
        decrement() {
            this.count -= this.subNum
        }
    }
});
// App Instance
let app = new Vue({
    el: '#app',
    data: {
        appname: 'Decrement App',
    },

    components: {
        counter
    }


});
