<template>
  <!--begin::Toolbar-->
  <div class="toolbar pb-5 pb-lg-15" id="kt_toolbar">
    <!--begin::Container-->
    <!-- :class="{
        'container-fluid': toolbarWidthFluid,
        container: !toolbarWidthFluid
      }" -->
    <div id="kt_toolbar_container" style="width: 100%;">
      <!-- carouselExampleIndicators -->
      <div v-if="path.fullPath.indexOf('main') > -1">
        <div
          id="carouselExampleIndicators"
          v-if="listBanner"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              v-for="(item, i) in listBanner"
              :key="i"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              :data-bs-slide-to="i"
              :class="i == 0 ? 'active' : ''"
              aria-current="true"
              :aria-label="'Slide ' + i"
            ></button>
          </div>
          <div class="carousel-inner">
            <div
              v-for="(item, i) in listBanner"
              :key="i"
              :class="i == 0 ? 'carousel-item active' : 'carousel-item'"
            >
              <img
                :src="imageUrl + item.imageBanner"
                class="d-block w-100 h-auto h-md-500px"
                style="object-fit: cover;"
                alt=""
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div v-else class="container mt-10">
        <div v-for="(item, i) in pageList" :key="i">
          <div class="title-card" v-if="path.fullPath.indexOf(item.route) > -1">
            <div class="row">
              <div class="col-12 font-style-title">
                <span
                  ><img
                    class="image-title"
                    src="media/imageApp/pana.svg "
                    alt=""
                /></span>
                <span class="page-title">{{ item.heading }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";
import axios from "axios";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import router from "@/router";
export default defineComponent({
  name: "KToolbar",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  components: {
    // Dropdown1
  },
  data() {
    return {
      listBanner: [],
      path: router.currentRoute,
      imageUrl: process.env.VUE_APP_API_URL_IMAGE,
    };
  },
  setup() {
    const pageList = MainMenuConfig[0].pages
    return {
      toolbarWidthFluid,
      MainMenuConfig,
      pageList
    };
  },
  mounted() {
    this.getBanner();
    console.log(this.path);
  },
  methods: {
    getBanner() {
      axios
        .get(process.env.VUE_APP_API_URL + "getBanner", {
          headers: { token: localStorage.getItem("id_token") },
        })
        .then((response) => {
          console.log(response);
          this.listBanner = response.data.data.content;
          console.log(this.listBanner);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
<style scoped>
.title-card {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    linear-gradient(90.01deg, #6965b9 27.62%, #4f4b98 128.97%);
  border-radius: 16.83px;
}
.image-title {
  width: 100%;
  width: auto;
  height: auto;
  padding-left: 4%;
  padding-top: 22px;
}
.page-title {
  font-family: "IBM Plex Sans Thai", sans-serif;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
  font-size: 35px;
  padding-left: 5%;
  padding-top: 50px;
}
</style>
