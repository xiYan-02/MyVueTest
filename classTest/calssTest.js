new Vue({
    el: "#app-box",
    data: {
        isClick1: false,
        isClick2: false,
        isTxt: false
    },
    methods: {
        spanClick1() {
            this.isClick1 = !this.isClick1;
            console.log("spanClick1");
        },
        spanClick2() {
            this.isClick2 = !this.isClick2;
            this.isTxt = !this.isTxt;
            console.log("spanClick2:isTxt:" + this.isTxt);
        }
    },
    // computed是带缓存的，只有其引用的响应式属性发生改变时才会重新计算，
    // 而methods里的函数在每次调用时都要执行。
    computed: {
        computedClass() {
            return {
                btnClick: this.isClick2,
                change: this.isTxt
            }
        }
    }
})