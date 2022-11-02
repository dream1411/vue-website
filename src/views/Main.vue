<template>
  <!--begin::Dashboard-->
  <div
    class="content flex-row-fluid mt-10 w-100"
    style="background-color: rgba(209, 230, 233, 0.4);"
  >
    <div class="row gy-5 g-xl-8">
         <button
          type="button"
          hidden
          data-bs-toggle="modal"
          id="modal-show"
          data-bs-target="#kt_view_modal"
        ></button>
      <div class="row">
        <div class="col-9">
          <span
            style="font-size: 30px; font-weight: 700; margin-left: 35px;text-decoration: none;"
          >
            แนะนำ</span
          >
        </div>
        <div class="col-3" style="text-align: right;">
          <a
            href="more-detail-introduce.html"
            style="font-size: 14px; font-weight: 500"
            >ดูทั้งหมด</a
          >
        </div>
      </div>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="mb-10">
        <Slide v-for="itemPin in listSortPin" :key="itemPin.id">
          <div class="carousel__item item-hover" @click="showModal(itemPin.id)">
            <img
              class="gallery-cel"
              :src="imageUrl + itemPin.thumbnailsPath"
              :alt="itemPin.thumbnailsPath"
              @error="setAltImg"
              style="object-fit: cover; width: 173px; height: 237px; padding: 10px"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
  <div class="content flex-row-fluid my-10 w-100">
    <div class="row gy-5 g-xl-8">
      <div class="row">
        <div class="col-9">
          <span
            style="font-size: 30px; font-weight: 700; margin-left: 35px;text-decoration: none;"
          >
            มาใหม่</span
          >
        </div>
        <div class="col-3" style="text-align: right;">
          <a
            href="more-detail-introduce.html"
            style="font-size: 14px; font-weight: 500"
            >ดูทั้งหมด</a
          >
        </div>
      </div>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="mb-10">
        <Slide v-for="itemNew in listSortNew" :key="itemNew.id">
          <div class="carousel__item item-hover"  @click="showModal(itemNew.id)">
            <img
              class="gallery-cel"
              :src="imageUrl + itemNew.thumbnailsPath"
              :alt="itemNew.thumbnailsPath"
              @error="setAltImg"
              style="object-fit: cover; width: 173px; height: 237px; padding: 10px"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
  <div
    class="content flex-row-fluid my-10 w-100"
    style="background-color: rgba(209, 230, 233, 0.4);"
  >
    <div class="row gy-5 g-xl-8">
      <div class="row">
        <div class="col-9">
          <span
            style="font-size: 30px; font-weight: 700; margin-left: 35px;text-decoration: none;"
          >
            ยอดนิยม</span
          >
        </div>
        <div class="col-3" style="text-align: right;">
          <a
            href="more-detail-introduce.html"
            style="font-size: 14px; font-weight: 500"
            >ดูทั้งหมด</a
          >
        </div>
      </div>
      <Carousel :settings="settings" :breakpoints="breakpoints" class="mb-10">
        <Slide v-for="itemTop in listSortTop" :key="itemTop.id">
          <div class="carousel__item item-hover" @click="showModal(itemTop.id)">
            <img
              class="gallery-cel"
              :src="imageUrl + itemTop.thumbnailsPath"
              :alt="itemTop.thumbnailsPath"
              @error="setAltImg"
              style="object-fit: cover; width: 173px; height: 237px; padding: 10px"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
  <div class="content flex-row-fluid mt-10 w-100">
    <div class="row gy-5 g-xl-8">
      <div>
        <div class="row">
          <div
            class="col-lg-6 reposition"
            style="background-color: rgba(161, 161, 189, 0); padding-bottom: 10%;padding-left: 5%;"
            align="center"
          >
            <!---align="center"-->
            <span
              ><img
                src="media/imageApp/Frame.png"
                alt=""
                style="max-width: 160px; max-height: 360px; padding-top: 60px;"
            /></span>

            <span style="padding-left: 0%;"
              ><img
                src="media/imageApp/Frame (1).png"
                alt=""
                style="max-width: 160px; height: auto; padding-top: 102px; "
            /></span>
          </div>

          <div class="col-lg-6 reposition">
            <div class="row">
              <div class="col-12" style="margin-top: 6px; padding-left: 25%;">
                <span
                  ><img
                    src="media/imageApp/Group 2241-2.png"
                    alt=""
                    style="max-width: 236px; max-height: 173px;"
                /></span>
              </div>
            </div>
            <div class="row" style="margin-top: 16px;">
              <div
                class="col-12 font-style-content-4"
                style="padding-left: 20%; padding-right: 20%;"
              >
                <span style="font-size: 16px;"
                  >แอปพลิเคชัน I-EA-T
                  eLibraryเป็นแอปสำหรับห้องสมุดการนิคมอุตสาหกรรม</span
                >
                <span
                  >แห่งประเทศไทยเพื่อพัฒนาองค์กรให้เป็นองค์กรแห่งการเรียนรู้ซึ่งเป็นหัวใจ</span
                >
                <span
                  >แห่งความสำเร็จก้าวหน้าขององค์กร สอดรับกับยุทธศาสตร์ประเทศไทย
                  4.0</span
                >
                <span
                  >และดิจิทัลไทยแลนด์ของรัฐบาล I-EA-T
                  eLibraryหรือห้องสมุดดิจิทัลทำหน้า</span
                >
                <span
                  >ที่เป็นศูนย์กลางในการรวบรวมและจัดเก็บทรัพยากรการเรียนรู้ดิจิทัลที่ผู้ใช้</span
                >
                <span
                  >สามารถเรียกดู สืบค้น และเข้าถึงได้ตามความต้องการทุกที่
                  ทุกเวลา</span
                >
                <span>ผ่านแอปพลิเคชัน</span>
              </div>
            </div>
            <div class="row">
              <div
                class="col-12 font-style-content-4-bottom"
                style="padding-left: 20%; padding-top: 16px;"
              >
                <p>ดาวน์โหลดฟรีได้แล้ววันนี้ บน Android และ iOS</p>
              </div>
            </div>
            <div class="row" style="margin-bottom: 15%;">
              <div class="col-6" style="padding-top: 16px;padding-left: 19%;">
                <span>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zealtech.eureka"
                    target="_blank"
                  >
                    <img
                      src="media/imageApp/googlePlay.svg"
                      alt=""
                      style="max-width: 235px; max-height: 70px;"
                    />
                  </a>
                </span>
              </div>
              <div
                class="col-6 container"
                style="padding-top: 16px;padding-right: 22%;"
              >
                <span>
                  <a
                    href="https://apps.apple.com/us/app/eureka-plus/id1606137342"
                    target="_blank"
                  >
                    <img
                      src="media/imageApp/appStore.svg"
                      alt=""
                      style="max-width: 235px; max-height: 70px;"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div
    class="modal fade show"
    id="kt_view_modal"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body" style="padding: 0px; border-radius: 30px;">
          <div class="row">
            <img
              :src="imageUrl + listdata.thumbnailsPath"
              alt=""
              class="h-400px w-100"
              style="object-fit: cover;position: relative; filter: blur(20px);"
            />

            <div class="row" style="position: absolute;">
              <div class="row mt-5">
                <div class="col-11"></div>
                <div class="col-1">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    style="background-color: white; border-radius: 25px;"
                  ></button>
                </div>
              </div>
              <div class="col-lg-6 ">
                <img
                  class="mx-auto d-block setpositiionimg"
                  :src="imageUrl + listdata.thumbnailsPath"
                  style="box-shadow: 3px 3px 0px rgb(0, 0, 0); -moz-box-shadow: 5px 5px 2px rgb(0, 0, 0);
                                -webkit-box-shadow: 0px 0px 40px rgb(0, 0, 0);"
                />
              </div>
              <div
                class="col-lg-6"
                style="text-align: center; padding-top: 9%;"
              >
                <span
                  class="setfont-title"
                  style="font-size: 28px; font-style: normal; font-weight: 400;"
                  >{{ listdata.title }}</span
                ><br />
                <span
                  class="bottom-title"
                  style="font-size:16px; font-wright:400; font-style:normal;"
                  >รายงานประจำปี {{ formatYear(listdata.createDate) }}</span
                ><br />
                <div style="margin-top: 80px;">
                  <span class="font-style-ggap">
                    ท่านสามารถอ่านสื่อได้ผ่านแอพพลิเคชั่น </span
                  ><br />
                </div>
                <div style="margin-top:9px;padding-bottom:50px;">
                  <span>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.zealtech.eureka"
                      target="_blank"
                    >
                      <img
                        src="media/imageApp/googlePlay.svg"
                        style="width: auto; height: auto;max-widht:123.76px;max-hight:36.72px;"
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://apps.apple.com/us/app/eureka-plus/id1606137342"
                      target="_blank"
                    >
                      <img
                        src="media/imageApp/appStore.svg"
                        style="width: auto; height: auto;max-widht:123.76px;max-hight:36.72px;"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="row row-des" style="padding: 30px">
              <div class="col-lg-7">
                <span class="head-dec">คำอธิบาย</span>
                <p>{{ listdata.description }}</p>
              </div>
              <div class="col-lg-5 paddingModal">
                <p class="head-dec">รายละเอียด</p>
                <span>ผู้เเต่ง : {{ listdata.writer }}</span
                ><br />
                <span>สำนักพิมพ์ : {{ listdata.publisher }}</span
                ><br />
                <span
                  >จำนวนหน้า : {{ listdata.page ? listdata.page : "-" }}</span
                ><br />
                <span
                  >หมวดหมู่ :
                  {{ rederCategory(listdata.categoryProfile) }}</span
                ><br />
                <span>ขนาด : {{ listdata.size }}</span
                ><br />
                <span>ประเภทหนังสือ : {{ listdata.title }}</span
                ><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import $ from "jquery";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import axios from "axios";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "",
  components: {
    Carousel,
    Navigation,
    Slide,
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
  data() {
    return {
      listSortNew: [],
      listSortPin: [],
      listSortTop: [],
      listdata:[],
      imageUrl: process.env.VUE_APP_API_URL_IMAGE,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  mounted() {
    this.getKnowledgePin();
    this.getKnowledgeNew();
    this.getKnowledgeTop();
  },
  methods: {
     showModal(id) {
      this.$nextTick(() => {
        $("#modal-show").click();
        this.getKnowledgeId(id);
      });
    },
    setAltImg(event) {
      event.target.src = "media/imageApp/no-image.jpg";
    },
    getKnowledgeNew() {
      axios
        .get(process.env.VUE_APP_API_URL + "getKnowledge?sort=3", {
          headers: { token: localStorage.getItem("id_token") },
        })
        .then((response) => {
          console.log(response);
          this.listSortNew = response.data.data.content;
          console.log(this.listSortNew);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getKnowledgeTop() {
      axios
        .get(process.env.VUE_APP_API_URL + "getKnowledge?sort=2", {
          headers: { token: localStorage.getItem("id_token") },
        })
        .then((response) => {
          console.log(response);
          this.listSortTop = response.data.data.content;
          console.log(this.listSortTop);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getKnowledgePin() {
      axios
        .get(process.env.VUE_APP_API_URL + "getKnowledge?sort=1", {
          headers: { token: localStorage.getItem("id_token") },
        })
        .then((response) => {
          console.log(response);
          this.listSortPin = response.data.data.content;
          console.log(this.listSortPin)
           })
        .catch((error) => {
          console.log(error);
        });
    },
       getKnowledgeId(id) {
      axios
        .get(process.env.VUE_APP_API_URL + `getKnowledge?id=${id}`, {
          headers: { token: localStorage.getItem("id_token") },
        })
        .then((response) => {
          this.listdata = response.data.data.content[0];
          console.log(this.listdata);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    rederCategory(data) {
      let txt = "";
      if (data && data.length > 0) {
        for (let index = 0; index < data.length; index++) {
          const loopData = data[index];
          if (index == data.length.length - 1) {
            txt += loopData.categoryName;
          } else {
            txt += loopData.categoryName + " , ";
          }
        }
      } else {
        txt = "-";
      }
      return txt;
    },
      formatYear(date) {
      const event = new Date(date);
      return (
        event.toLocaleDateString("th-TH", {
          year: "numeric",
        }) 
      );
    },
  },
});
</script>
<style scoped>
@media (min-width: 319px) {
    .row-des {
      margin-top: 30vh;
    }
}
@media (min-width: 992px) {
    .row-des {
      margin-top: 0px;
    }
}
body {
  font-size: 16px !important;
}
p {
  font-size: 16px !important;
}
span {
  font-size: 16px !important;
}
.gallery-cel {
  height: 467px;
  width: 100%;
}
.box--6 {
  background: #fff;
  background-clip: padding-box;
  border: 2rem solid gold;
  border-image: radial-gradient(
      hsla(0, 0%, 50%, 0.65) 35%,
      hsla(0, 0%, 50%, 0) 60%
    )
    22%;
  color: orangered;
}
.item-hover:hover {
   scale: 1.05;
}
.blur {
  position: relative;
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: 100%;
  filter: blur(20px);
  z-index: 0;
}

.blur row {
  position: relative;
  z-index: 1;
}
.setpositiionimg {
  width: auto;
  max-width: 238px;
  height: auto;
  max-height: 321px;
  margin-top: 5%;
  border-radius: 20px;
}
</style>