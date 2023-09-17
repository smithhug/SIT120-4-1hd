<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  },
  computed: {
    iframeWidth() {
      return this.windowWidth * 0.75 + "px";
    },
    iframeHeight() {
      return this.windowHeight * 0.75 + "px";
    },
  },
  created() {
    window.addEventListener("resize", this.updateWindowDimensions);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  },
  methods: {
    updateWindowDimensions() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.windowWidth = newWidth;
    },
    windowHeight(newHeight) {
      this.windowHeight = newHeight;
    },
  },
};
</script>

<template>
    <h1 :style="{'text-align': 'center', 'color': 'hsla(160, 100%, 37%, 1)', 'margin-top':'15px'}">We will be at PAX Melbourne 2023</h1>
    <div :class="{'container': true}">
        <iframe :class="{'iframestyle' : true}" :width=iframeWidth :height=iframeHeight src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=1%20Convention%20Centre%20Pl,%20South%20Wharf%20VIC%203006+(Melbourne%20Convention%20and%20Exhibition%20Centre%20(MCEC))&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    .iframestyle {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
