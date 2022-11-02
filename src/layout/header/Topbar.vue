<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="topbar d-flex align-items-stretch flex-shrink-0">
      <form 
        style="border: 1px solid #ffffff;border-radius: 15px;background-color: #f5f8fa;"
        data-kt-search-element="form"
        class="w-100 position-relative mb-3 d-none d-lg-block"
        autocomplete="off"
      >
        <!--begin::Icon-->
        <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
        <span
          class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.5"
              x="17.0365"
              y="15.1223"
              width="8.15546"
              height="2"
              rx="1"
              transform="rotate(45 17.0365 15.1223)"
              fill="currentColor"
            ></rect>
            <path
              d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <!--end::Svg Icon-->
        <!--end::Icon-->
        <!--begin::Input-->
        <input
          type="text"
          class="search-input form-control form-control-flush ps-10"
          name="search"
          value=""
          placeholder="ค้นหา..."
          data-kt-search-element="input"
        />
        <!--end::Input-->
        <!--begin::Spinner-->
        <span
          class="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
          data-kt-search-element="spinner"
        >
          <span
            class="spinner-border h-15px w-15px align-middle text-gray-400"
          ></span>
        </span>
        <!--end::Spinner-->
        <!--begin::Reset-->
        <span
          class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
          data-kt-search-element="clear"
        >
          <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
          <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.5"
                x="6"
                y="17.3137"
                width="16"
                height="2"
                rx="1"
                transform="rotate(-45 6 17.3137)"
                fill="currentColor"
              ></rect>
              <rect
                x="7.41422"
                y="6"
                width="16"
                height="2"
                rx="1"
                transform="rotate(45 7.41422 6)"
                fill="currentColor"
              ></rect>
            </svg>
          </span>
          <!--end::Svg Icon-->
        </span>
        <!--end::Reset-->
        <!--begin::Toolbar-->
        <div
          class="position-absolute top-50 end-0 translate-middle-y"
          data-kt-search-element="toolbar"
        ></div>
        <!--end::Toolbar-->
      </form>
      <!--begin::User-->
      <div
        class="d-none align-items-center me-n3 ms-1 ms-lg-3"
        id="kt_header_user_menu_toggle"
      >
        <!--begin::Menu-->
        <div
          class="btn btn-icon btn-active-light-primary w-50px h-50px w-md-50px h-md-50px"
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          <img
            src="media/avatars/150-25.jpg"
            alt="metronic"
            class="h-50px w-50px rounded"
          />
        </div>
        <KTUserMenu></KTUserMenu>
        <!--end::Menu-->
      </div>
      <!--end::User -->

      <!--begin::Heaeder menu toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-2 me-n3"
        title="Show header menu"
      >
        <div
          class="btn btn-icon btn-active-light-primary"
          id="kt_header_menu_mobile_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="media/icons/duotone/Text/Toggle-Right.svg" />
          </span>
        </div>
      </div>
      <!--end::Heaeder menu toggle-->
    </div>
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
// import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    // KTNotificationsMenu,
    // KTQuickLinksMenu,
    KTUserMenu,
  },
});
</script>
