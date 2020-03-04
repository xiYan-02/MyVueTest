Vue.component("test", {
    // 这里必须写template
    template: `<div>
    <h2>我的名字是：{{name}},今年{{age}}岁</h2>
    <button @click="changeName">改变</button></div>`,
    // 这里的data是一个方法，不是一个对象，是返回一个对象
    data() {
        return {
            name: "小王",
            age: 18
        }
    },
    methods: {
        changeName() {
            this.name = "小李"
        }
    }
});
new Vue({
    el: "#app-box"
})