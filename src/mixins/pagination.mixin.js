
export default {
  
  data() {
    return {
      page: +this.$route.params.id || null,
      pagecount: 0,
    }
  },

  methods: {
    setupPagination() {
        this.$router.push(`${this.page}`)    
       }
    }
}