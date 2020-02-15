new Vue({
    el: "#app-box",
    data: {
        res: false,
        val: 100
    },
    methods: {
        call() {
            console.log(">>" + this.val)
            this.val -= 10;
            if (this.val <= 0) {
                this.res = true;
            }
        },
        reset() {
            this.val = 100;
            this.res = false;
        }
    }
})