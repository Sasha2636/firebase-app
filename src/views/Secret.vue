<template>

  
<div>

<Editor v-model="data" :image-provider="imageProvider" />
<div v-html="data"></div>
<button >Отправить</button>



</div>




</template>


<script>
import Editor from '@baoshishu/vue-editor'
export default {
  components: {
    Editor,
  },
  data() {
    return {
      data: '',
      imageProvider: {
        name: 'qiniu', // provider name
        token:
          '-qWchT63mkZEJch0ygm3bN9h3peInHqCcSAEMtvV:9YAz4dCiB3EAdYuoDVO0YvObtqY=:eyJzY29wZSI6InRlc3QiLCJkZWFkbGluZSI6MTkwMjAyODY1NX0=', // upload token
        domain: 'cdn-testing.zanquan.net', // upload domain
        modifier: ({ width, url }) => {
          if (width < 750) {
            return url
          } else {
            return `${url}?imageMogr2/thumbnail/750x/`
          }
        },
      },
    }
  },
}  

</script>

<style  >
p{
 margin:30px;
 opacity: 0.8;
 text-align: justify;
}

</style>