new Vue({
    el: "#vue-app",
    data: {
        age: 30,
        x: 0,
        y: 0,
        v1: '',
        v2: '',
        v3: '',
        testWatch: '0'
    },
    // methods中所有在h5中通过{{ }}的方式调用的方法在
    // data中的值发生变化时都会调用一次，性能消耗较大
    methods: {
        addAge(num) {
            this.age += num;
        },
        jianAge(num) {
            this.age -= num;
        },
        updateTxt(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        logName() {
            alert("姓名输入成功！")
        },
        logAge() {
            alert("年龄输入成功！")
        },
        testRef() {
            // console.log(this.$refs)
            // 通过this.$refs.key 来管理所有的ref组件
            this.v3 = this.$refs.v3.value;
        }
    },
    // 用来监控data中值的变化
    watch: {
        testWatch(val, oldVal) {
            console.log(`new value:${val} === old value:${oldVal}`);
        }
    },
    // computed属性中的方法当data中的属性值发生变化时会自动调用相应的方法
    //  -->每个方法都必须返回值
    // 对性能消耗不大
    // 不能作为事件处理函数,因为是属性
    // 计算属性中的函数只有在data中对应的数据发生变化才会调用
    computed: {
        computedTest() {
            console.log("computed");
            return this.age++;
        }
    }
});