<template>
  <div class="home">
    <duhButton >默认按钮</duhButton>
    <duhButton disabled :loading="flag" @click="handleSubmit" size="medium" type="primary"  >成功按钮</duhButton>
    <duhButton type="danger" >危险按钮</duhButton>
    <duhButton type="warning" >警告按钮</duhButton>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      flag: false
    }
  },
  components: {
    duhButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit () {
      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>