new Vue({
    el: "#app-box",
    data: {
        a: 0,
        b: 0,
        age: 30
    },
    methods: {
        addA() {
            this.a += 1;
            console.log("method>>>>>>add to a");
        },
        addB() {
            this.b += 1;
            console.log("method>>>>>>add to b");
        },
        aToAge() {
            console.log("method>>>>>>a to age");
            return this.a + this.age;
        },
        bToAge() {
            console.log("method>>>>>>b to age");
            return this.b + this.age;
        },
        logAge() {
            console.log("method>>>>>>log age");
        }
    },
    computed: {
        aToAgeC() {
            console.log("computed>>>>>>a to age");
            return this.a + this.age;
        },
        bToAgeC() {
            console.log("computed>>>>>>b to age");
            return this.b + this.age;
        },
        logAgeC() {
            console.log("computed>>>>>>log age");
            return "";
        }
    }
})