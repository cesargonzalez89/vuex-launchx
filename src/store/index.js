import { createStore } from 'vuex'

export default createStore({
  state: {
    contador : 0
  },
  //recuperar datos en el estado
  getters: {
    cuadrado(state){
      return state.contador * state.contador;
    }
  },
  //no se deben llamar directo desde los componentes
  mutations: {
    subirContador(state, random){
      state.contador+=random;
    },
    bajarContador(state, random){
      state.contador-=random;
    }
  },
  //lo mismo que las mutaciones pero con codigo asincrono, consumir apis, se llaman desde los componentes
  actions: {
    async subirContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("subirContador", results)
    },
    async bajarContador({commit}){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const results = await res.json();
      console.log(results);
      commit("bajarContador", results)
    }
  },
  //si queremos usar cirtas cosas solo para un componente, como partes con login
  modules: {
  }
})
