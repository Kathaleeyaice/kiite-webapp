<template>
<div class="BeforeLogin">
    <div class="KiiteHeaderLoadingPage">
      <div class="circle"></div>
      <div class="head">
        <div class="Kiite">
          Kiite
        </div>
        <div class="text">
          I'm always here for you
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'BeforeLogin'

}
</script>

<style scope>
.BeforeLogin{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f8f8f8;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
}
.KiiteHeaderLoadingPage{
    width:100%;
    margin: auto;
    margin-top: 38.5307346327vh;
    display: inline-flex;
}
.circle {
    background-color: #2FC4B2;
    width: 18.290854vh;
    height: 18.290854vh;
    border-radius: 50%;
    position: absolute;
    right: 53.333vw;
    z-index: -1;
}
.head {
  margin: auto;
}
.Kiite {
  font-size: 11.9940vh;
  height: 11.9940vh;
}
.text {
  font-size: 1.799100vh;
  text-align: center;
  margin-top: 1.349325vh;
}
</style>
