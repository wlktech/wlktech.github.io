<script setup>
import {ref, onMounted, computed, watch} from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b)=>{
  return a.createdAt = b.createdAt
}))

watch(name, (newVal)=>{
  localStorage.setItem('name', newVal)
})
</script>

<template>
  <main class="app">
  <section class="greeting">
  <h2 class="title">
  What's up, <input type="text" placeholder = "Name Here" v-model="name" />
  </h2>
  </section>
  </main>
</template>

<style scoped>

</style>
