let counter = Vue.component('counter', {
    template: `<div>
    <h3>Count: {{this.count}}</h3>
    
    <button class='counter-btn' @click='increment'>Decrease by {{this.subNum}}</button>
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
        increment() {
            this.count -= this.subNum
        }

    }
})



let app = new Vue({
    el: '#app',
    data: {
        appname: 'Decrement App',
    },

    components: {
        counter
    }


})