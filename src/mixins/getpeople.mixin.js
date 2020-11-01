import axios from 'axios'

export default {
    methods: {
        getData() {
            let url = "http://swapi.dev/api/people/?page=1" 
            if(+this.$route.params.id) {
                url = "http://swapi.dev/api/people/?page="+this.$route.params.id 
            }
            axios.get(url)
            .then(res=>{
                //create an array for 2 columns map on screen
                this.personalities = []
                let people = [...res.data.results]
                let pair = []
                while (people.length !== 0) {
                    if(pair.length == 2) {
                        this.personalities.push(pair)
                        pair = []
                    }
                    pair.push(people[0])
                    people.shift()
                }
                if(pair) { this.personalities.push(pair) }

                this.dataLoaded = true  
                //pagination size setup
                let totalPeople = res.data.count
                let count = Math.floor(+totalPeople/10)
                if(+totalPeople%10 !==0 ) { count++ }
                this.pageCount = count
            })
            .catch(err=>{throw(err)}) 
        }
    }
}      