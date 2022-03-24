<template>
     <div class="botones">
      <!--dispatch llama a actions y commit a las mutations-->

      <!--<button @click="bajarContador()">-</button>
      <button @click="subirContador()">+</button>-->
      <button @click="$store.dispatch('bajarContador')">-</button>
      <!--<button @click="$store.commit('subirContador')">+</button>-->
      <button @click="$store.dispatch('subirContador')">+</button>
    </div>
</template>

<script>
export default{
    name : 'Botones',
}
</script>