<template>
  <div class="top-box">
    <router-view></router-view>
    <Toaster></Toaster>
  </div>
</template>

<script>
import store from 'store'
import Toaster from './Toaster'

export default {
  store,
  components:{ Toaster }
}
</script>
