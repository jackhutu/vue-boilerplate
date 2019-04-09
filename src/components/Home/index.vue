<template>
  <div>
    Hello World
  </div>
</template>
<script>

import { mapState,mapActions } from 'vuex'

export default {
  components:{ Sidebar,Footerbar,Tags,Articles,Loadmore },
  computed: {
    ...mapState({
      indexImg: ({globalVal}) => globalVal.indexImg,      
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