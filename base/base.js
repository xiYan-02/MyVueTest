new Vue({
    // 绑定DOM节点，只能在绑定的节点中使用Vue的选项
    el: "#app-box",
    // 绑定数据，可以在DOM中通过{{ key }}来引用中间的值
    data() {
        // key : value 格式
        return {
            name: "wangcong",
            age: 18,
            baidu: 'https://www.baidu.com',
            taobao: 'https://www.taobao.com',
            html: '<a href="https://www.baidu.com">baidu</a>'
        }
    },
    // 绑定方法，可以通过this关键字来引用data里面的字段
    methods: {
        // 这是es5的语法
        /* showTest: function (name, time) {
            return name + ",Good " + time;
         }*/
        // es6语法，不要用+拼接字符串
        showTest(name, time) {
            return `${name},Good ${time}`;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});