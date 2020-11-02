import axios from "axios";

export default {
  methods: {
    getData() {
      let url = "http://swapi.dev/api/people/?page=" + this.$route.params.id;
      axios
        .get(url)
        .then((res) => {
          //add "id" ang "pagePath" for persons in data for double route realise
          res.data.results.forEach((item) => {
            let stringId = item.url
              .split("people")[1]
              .split("/")
              .splice(1, 1);
            item.id = stringId;
            item.pagePath = "/page/" + this.$route.params.id;
          });
          //create an array for 2 columns map on screen
          this.personalities = [];
          let people = [...res.data.results];
          let pair = [];
          while (people.length !== 0) {
            if (pair.length == 2) {
              this.personalities.push(pair);
              pair = [];
            }
            pair.push(people[0]);
            people.shift();
          }
          if (pair) {
            this.personalities.push(pair);
          }

          this.dataLoaded = true;
          //pagination size setup
          let totalPeople = res.data.count;
          let count = Math.floor(+totalPeople / 10);
          if (+totalPeople % 10 !== 0) {
            count++;
          }
          this.pageCount = count;
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
