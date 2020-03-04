new Vue({
    el: "#box",
    data: {
        flag: false
    },
    methods: {
        // 钩子函数中的el就是关联的DOM元素
        // beforeEnter：动画入场之前，此时动画尚未开始，可以设置动画开始之前的起始样式
        beforeEnter(el) {
            console.log("beforeEnter");
            el.style.transform = "translate(0px,0px)";
        },
        // 这enter中可以设置持续的时间和达到的效果
        enter(el, done) {
            // 这个属性必须要加，不然没有动画，我也很奇怪
            el.offsetWidth;
            el.style.transition = "all 1s ease";
            el.style.transform = "translate(150px,450px)";
            console.log("Enter");
            // 第二个参数表示afterEnter函数
            // 你如果在enter中写了第二个参数，那么afterEnter函数你不调用就不会执行
            // 你如果没写第二个参数，则afterEnter函数在延迟一会后会自动执行
            done();
        },
        // 动画完成之后会调用afterEnter
        afterEnter(el) {
            this.flag = false;
            console.log("afterEnter");
        },
        // 这个函数我也不知道什么时候调用
        cancelled(el) {
            console.log("EnterCancelled");
        }
    }
})