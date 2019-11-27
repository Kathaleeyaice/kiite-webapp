<template>
    <div class="ShowStatic">
        <div class="back">
            <router-link to="/messenger/type"><img src="../assets/back.png" class="iconBack"></router-link>
        </div>
        <div class="ShowStaticBox">
            <div class="imgProfile">
            </div>
            <div class="nameProfile">{{name}}</div>
            <div class="typeMood">{{mood}}</div>
            <div class="staticBox">
                <b-progress :max="max">
                    <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`" class="pos">
                        <div class="textPos">pos</div>
                    </b-progress-bar>
                </b-progress>
            </div>
            <div class="textLastday">last 7 days</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowStatic',
  data () {
    return {
      isLoading: true,
      name: 'พี่เสือ',
      mood: ''
    }
  }
}
</script>

<style scope>
.ShowStatic{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #2FC4B2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
}
.back{
    margin-top: 3.44827vh;
}
.ShowStaticBox{
    width: 46.02698vh;
    height: 41.52923vh;
    background-color: #f8f8f8;
    margin: auto;
    margin-top: 23.5382vh;
    border-radius: 0.89955vh;
    padding-top: 3.29835vh;
}
.imgProfile{
    width: 22.48875vh;
    height: 22.48875vh;
    border-radius: 50%;
    background-color: #BFBFBF;
    margin: auto;
}
.nameProfile{
    text-align: center;
    font-size: 2.0989vh;
    font-weight: bold;
    margin-top: 2.54872vh;
}
.typeMood{
    width: 28.335832084vh;
    margin:auto;
    margin-top:1.04947526237vh;
    font-size:1.34932533733vh;
}
.staticBox{
  width: 28.335832084vh;
  height: 2.99850074963vh;
  background-color: #c4c4c4;
  margin: auto;
  font-size: 1.49925037481vh;
}
.textLastday{
    width: 28.335832084vh;
    color: rgba(0, 0, 0, 0.4);
    font-size:1.34932533733vh;
    right:0;

}
</style>
