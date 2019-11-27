<template>
    <div class="FindingComp">
        <div class="back">
            <router-link to="/messenger/type"><img src="../assets/back.png" class="iconBack"></router-link>
        </div>
        <div v-if="isLoading">
            <div class="Text">Finding User</div>
            <div class="Queue"></div>
        </div>
        <div v-else>
            <div class="Text">Matched!</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FindingComp'
}
</script>

<style scope>
.FindingComp{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #2FC4B2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    color: #f8f8f8;
}
.Text{
    font-size: 2.0989vh;
    font-weight: bold;
    text-align: center;
    margin-top: 22.4887vh;
}
</style>
