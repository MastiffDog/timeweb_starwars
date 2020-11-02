<template>
  <div>
    <div class="content">
      <div v-for="item in personalities" :key="item.id">
        <div class="md-layout md-gutter">
          <div class="md-layout-item personalTable">
            <Card v-bind:person="item[0]" v-bind:dataIsLoaded="dataLoaded" />
          </div>
          <div class="md-layout-item">
            <Card v-bind:person="item[1]" v-bind:dataIsLoaded="dataLoaded" />
          </div>
        </div>
      </div>
      <paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="setupPagination"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
      >
      </paginate>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import axios from "axios";
import pagination from "../mixins/pagination.mixin";
import getpeople from "../mixins/getpeople.mixin";

export default {
  data: () => {
    return {
      personalities: [],
      dataLoaded: false,
      pageCount: 0,
    };
  },
  components: {
    Card,
  },
  mixins: [pagination, getpeople],
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.content {
  width: 1300px;
  padding: 10px;
  margin: auto;
}
.content-paginate {
  margin: auto;
  border: solid 1px black;
}
</style>
