<template>
  <!--begin::Footer-->
  <div
    class="footer py-4 d-flex flex-lg-column"
    id="kt_footer"
    style="background: linear-gradient(175.73deg, #6C67BC 51.41%, #4F4B98 94.89%);"
  >
    <!--begin::Container-->
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-between"
      :class="{
        'container-fluid': footerWidthFluid,
        container: !footerWidthFluid,
      }"
    >
      <!--begin::Copyright-->
      <div class="text-dark  text-center  text-lg-left order-2 order-md-1">
        <div  style="color: white">
          <span style="font-size: 35px;"
            ><img
              src="media/imageApp/Group 2241-1.png"
              alt=""
              style="max-width: 163px; max-height: 119px; margin-bottom: 12px;"/></span
          ><br />
          <span style="font-size: 16px; font-weight: 300;"
            >238/15 ซ.อยู่เจริญ 29 ถ.รัชดาภิเษก</span
          ><br />
          <span style="font-size: 16px; font-weight: 300;"
            >แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310</span
          >
        </div>
      </div>
      <!--end::Copyright-->
      <div class="text-dark text-center text-lg-left order-2 order-md-1">
        <div style="color: white">
          <p style="font-size: 16px; font-weight: 700;">ติดต่อเรา</p>
          <span>E-mail : support@teachingtoys.co.th</span> <br />
          <span>Phone : 0-2274-1341-8</span><br />
          <span>Fax : 0-2274-1340</span>
        </div>
      </div>
      <!--begin::Menu-->
      <div class="text-dark order-2 order-md-1">
        <div style="color: white;">
          <p>แผนผังเว็บไซต์</p>
          <ul>
            <li>
              <router-link to="/main">หน้าแรก</router-link>
            </li>
              <li>
              <router-link to="/eBook">E-Book</router-link>
            </li>
              <li>
              <router-link to="/multimedia">Multimedia</router-link>
            </li>
              <li>
              <router-link to="/contact">ติดต่อเรา</router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--end::Menu-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KTFooter",
  setup() {
    return {
      footerWidthFluid,
    };
  },
});
</script>
