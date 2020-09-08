import Vue from "vue"
import Vuex from "vuex"

// 将vuex注入到实例中
Vue.use(Vuex);

//将定义好的vuex导出
export default new Vuex.Store({
    state: {
        num: [10, 20]
    },
    mutations: {
        add_num: function (state, number) {
            state.num.push(number)
        }
    },
    getters: {
        rst: function (state) {
            let a = 0
            for (let n of state.num) {
                a += n;
            }
            return a
        }
    }
})
