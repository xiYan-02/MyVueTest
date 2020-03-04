new Vue({
    el: "#box",
    data: {
        flag: false,
        flag1: false
    },
    methods: {
        test() {
            this.flag = !this.flag;
            console.log(this.flag);
        }
    }
});