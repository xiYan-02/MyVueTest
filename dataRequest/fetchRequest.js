new Vue({
    el: "#vue-app",
    data: {
        todos: [],
        users: [],
        todo: {
            name: "",
            completed: false
        },
        postRes: {}
    },
    // 自动执行，在加载js之前,一般用来开始加载网络数据
    mounted() {
        // fetch(费起) GET请求
        // fetch("http://jsonplaceholder.typicode.com/users")
        //     .then(res => {
        //         return res.json();
        //     }).then(res => {
        //         this.todos = res;
        //         console.log(this.todos);
        //     }).catch(error => {
        // 发生错误时调用
        // });

        // Axios(哎可修斯) GET请求
        axios.get(" https://api.apiopen.top/getWangYiNews").then(res => {
            console.log(res.data.result)
            this.todos = res.data.result;
        }).catch(error => {
            // 发生错误时调用
        });

        this.$http.get("http://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(`数据：${res.data}`)
            })
    },
    methods: {
        submit() {
            var data = JSON.stringify({ count: 3 });
            console.log("data:" + data);
            var dd = new FormData();
            dd.append("count", 3);
            // fetch POST请求
            // 对于x-www-form-urlencoded提交的数据类型
            // 1、设置请求头后，把参数写在同get请求
            // 2、new 一个FormData()，然后在append键值对
            fetch("https://api.apiopen.top/getWangYiNews", {
                method: 'POST',
                body: dd
            }).then(res => {
                return res.json()
            }).then(res => {
                console.log(res)
            }).catch(error => {
                发生错误时调用
            })

            // axios.post('https://api.apiopen.top/getWangYiNews', dd)
            //     .then(res => {
            //         console.log(res.data)
            //     }).catch(error => {
            //         // 发生错误时调用
            //     })

        },
        vuePost() {

            // 手动发起的post请求，有些服务器错误不了，
            // 所以一般会加上第三个参数{ emulateJSON: true }, 设置为form-data形式
            this.$http.post('https://api.apiopen.top/getWangYiNews', { count: 3 }, { emulateJSON: true })
                .then(res => {
                    console.log(res)
                }, error => {
                    // 发生错误时回调
                })

        }
    }
})