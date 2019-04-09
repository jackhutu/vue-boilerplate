<template>
  <div class="home-box">
    Hello World
    <div class="cover-img" :style="{ backgroundImage: 'url(' + indexImg + ')' }"></div>
  </div>
</template>
<script>

import { mapState,mapActions } from 'vuex'
import './index.less'

export default {
  computed: {
    ...mapState({
      indexImg: ({local}) => local.indexImg,      
    })
  },  
  created(){
    if(this.indexImg === ''){
      this.getIndexImage()
    }
  },
  methods:{
    ...mapActions([
      'getIndexImage',
    ]),    
    handleChange(){

    }
  }
}
</script>