import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    // 类似 vue 的 data
    state:{
        name:'oldName',
        txt:'我是默认内容',
        childCon:'我是子内容',
        food:'大米',
        radiotxt:'',
        inptxt:''
    },
    // 类似 vue 的 computed
    getters:{
        getReverseName(state){
           return state.name.split('').reverse().join("")
        },
        getChild(state){
            return state.childCon;
        },
    },
    // 类似 vue 里的 mothods(同步方法)
    mutations:{//更改store中的状态唯一方法
        updateName(state){
            state.name = 'newName'
        },
        getChildCon(state){
            state.txt = state.childCon;
        },
        getRadioCon(state){

            state.radiotxt = state.food + state.inptxt;
        },
       /* updateMessage (state, message) {
            state.food = message
        },*/
        updateMessage1(state, message) {
            state.inptxt = message
        },
        upRadioMessage(state,message){

            state.food = message
        }
    },
    // 类似 vue 里的 mothods(异步方法) --------Action 提交的是 mutation，而不是直接变更状态。
    //Action 可以包含任意异步操作   只要最后触发 mutation 就行
    actions: {
        updateNameAsync ({ commit }) {
            setTimeout(() => {
                commit('updateName')
            }, 1000)
        },
        updateRaioCon({commit}){
            setTimeout(() => {
                commit('getRadioCon')
            }, 1000)

        }
    }
})