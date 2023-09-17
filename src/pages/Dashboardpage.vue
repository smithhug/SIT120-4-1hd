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
    <h1 :style="{'text-align': 'center', 'color': 'hsla(160, 100%, 37%, 1)', 'margin-top':'15px'}">Big things coming soon</h1>
    <div :class="{'container': true}">
        <iframe :class="{'iframestyle' : true}" :width=iframeWidth :height=iframeHeight src="https://www.youtube.com/embed/nbmJnCHXaW8?si=1USEvG7KpzxXOEZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <p :style="{'text-align': 'center'}">The sheets chart below reflects the total number of video games I have played/completed sorted by release year.</p>
    <div :class="{'container': true}">
        <iframe :class="{'chartstyle' : true}" :width=iframeWidth :height=iframeHeight frameborder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzDZLhfWJnpNrdoOCgjzTxiDwMcfjL8ydIIZbp6ilECOwr9XC-N6Qu7GjFUTbJRNr3AupiZ2Mx_Tau/pubhtml?gid=1664243763&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
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
    .chartstyle {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
