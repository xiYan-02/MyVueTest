new Vue({
    el: "#vue-app",
    data: {
        todos: [],
        todo: {
            title: "",
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
        axios.get("http://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.data)
            this.todos = res.data;
        }).catch(error => {
            // 发生错误时调用
        })
    },
    methods: {
        submit() {
            // fetch POST请求
            // fetch("http://jsonplaceholder.typicode.com/todos", {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'// 设置请求头数据类型
            //     },
            //     body: JSON.stringify(this.todo)//设置参数，转化为json格式在提交
            // }).then(res => {
            //     return res.json()
            // }).then(res => {
            //     console.log(res)
            //     this.postRes = res;
            // }).catch(error => {
            // 发生错误时调用
            // })

            axios.post('http://jsonplaceholder.typicode.com/todos', this.todo)
                .then(res => {
                    console.log(res.data)
                    this.postRes = res.data;
                }).catch(error => {
                    // 发生错误时调用
                })

        }
    }
})