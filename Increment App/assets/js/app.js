// Increment App
var counter = Vue.component('counter', {
    template: `
    <div>
    <div>
    Count {{this.count}}
    </div>
    <button class='counter-btn' @click='increment'> Add {{this.addNum}}
    </div>                
    </div>`,
    props: {
        addNum: {
            type: Number,
            default: 1,
        }
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count += this.addNum
        }
    },
})
let app = new Vue({
    el: '#app',
    data: {
        appname: 'Increment App',
    },
    components: {
        counter
    }
})