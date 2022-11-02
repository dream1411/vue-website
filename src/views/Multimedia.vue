<template>
  <div class="content flex-row-fluid" style="min-height: 408px;">
    <div class="row gy-5 g-xl-8 my-10">
       <div class="row">
        <div class="col-12 col-md-6">
          <h1 style="color: rgba(68, 89, 186, 1);" class="m-5">E-book</h1>
        </div>
        <div class="col-12 col-md-3">
           <el-select v-model="category" class="d-block"  @change="getKnowledge"  placeholder="หมวดหมู่">
              <el-option
                        v-for="c in listCategory"
                        :key="c.id"
                        :value="c.categoryCode"
                        :label="c.categoryName"
                      />
            </el-select>
        </div>
        <div class="col-12 col-md-3">
          <el-select v-model="sort" class="d-block"  @change="getKnowledge"  placeholder="เรียงตาม">
              <el-option value="1" label="เรียงตามการแนะนำ" />
              <el-option value="2" label="เรียงตามค่าความนิยม" />
              <el-option value="2" label="เรียงตามวันที่สร้าง" />
              <el-option value="2" label="เรียงตามหัวข้อ" />
            </el-select>
        </div>
      </div>
      <div class="col-12 row">
        <button
          type="button"
          hidden
          data-bs-toggle="modal"
          id="modal-show"
          data-bs-target="#kt_view_modal"
        ></button>
        <div
          class="col-lg-3 col-md-4 col-sm-6 item-hover"
          style="text-align: center;"
          v-for="item in listKnowledge"
          :key="item.id"
          @click="showModal(item.id)"
        >
          <img
            class="gallery-cel box--6"
            :src="imageUrl + item.thumbnailsPath"
            alt="img no.${no}"
            style="background-color: white;object-fit: cover; max-width: 235px; max-height: 366px; margin:0;"
            data-id=""
          />
          <p style="text-align: center; margin-top: 19px; margin-bottom: 49px">
            {{ item.title }}
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        รายการจาก {{ pre }} ถึง {{ next }} มีจำนวน {{ all }}
      </div>
      <div class="col-12 col-md-6" style="text-align: right;">
        <el-pagination
          v-model:currentPage="page"
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="getKnowledge"
        />
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
            <div class="row row-des" style="padding: 30px;">
              <div class="col-lg-7" style="padding-left: 10%; padding-top:5%;">
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
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "",
  components: {},
  data() {
    return {
      page: 1,
      total: 0,
      pre: 1,
      next: 8,
      all: 0,
      sort: "",
      sizeContents: 8,
      category: "",
      imageUrl: process.env.VUE_APP_API_URL_IMAGE,
      listKnowledge: [],
      listdata: [],
      listCategory: [],
    };
  },
  mounted() {
    this.getKnowledge();
    this.getCategory();
  },
  methods: {
    showModal(id) {
      this.$nextTick(() => {
        $("#modal-show").click();
        this.getKnowledgeId(id);
      });
    },
    getKnowledge() {
      axios
        .get(process.env.VUE_APP_API_URL +`getKnowledge?sort=${this.sort}&orderBy=2&page=${this.page -1}&sizeContents=${this.sizeContents}&mediaType=3&enable=1`,
          {
            headers: { token: localStorage.getItem("id_token") },
          }
        )
        .then((response) => {
          this.total = response.data.data.totalPages * 10;
          this.all = response.data.data.totalElements;
          this.listKnowledge = response.data.data.content;
          this.pre = this.page * this.sizeContents - (this.sizeContents - 1);
          this.next = this.page * this.sizeContents;
          if (this.next > this.all) {
            this.next = this.all;
          }
          console.log(this.listKnowledge);
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
      getCategory() {
      axios
        .get(process.env.VUE_APP_API_URL + 'category', {
          headers: { token: localStorage.getItem("id_token") },
        })
        .then((response) => {
          this.listCategory = response.data.data;
          console.log(this.listCategory);
        })
        .catch((error) => {
          console.log(error);
        });

      // debugger
    },
  },
};
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
