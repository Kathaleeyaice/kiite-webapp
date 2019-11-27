<template>
  <div class="Landing">
    <div Class="logo">
      <div id="circle"> </div>
      <div id="Ki"> Kiite </div>
    </div>
    <div Class="Boxtext">
      <div class="desktopBox">
      <div id="Better"> Better </div>
      <div> with </div>
      </div>
      <div> Stranger </div>
    </div>

    <div Class="BL">
      <img src="./assets/1.png" id="bg1">
      <img src="./assets/7 1.png" id="bg2">
    </div>

    <div id="talking">
      Talking to a stranger  makes you feel better.  Come to join with us!
    </div>

    <div id="buttonBox">
      <router-link to="/login"><button id="buttonText">Get Start</button></router-link>
    </div>

    <div class="ar">
      <img src="./assets/arrow.png" id="arrow">
    </div>

    <div class="BG">
      <img src="./assets/8 1.png" id="bg3">
      <img src="./assets/9 1.png" id="bg4">
      <img src="./assets/6 4.png" id="bg5">
    </div>
    <div class="propertyBox">
    <div id="textbox">
      <div id="box1"> Anonymous Chat room ! </div>
      <div class="lineBox">
      <hr class="line">
      </div>
      <div id="box2">
        Kiite makes everyone absolutely anonymous. You can find helper to talk about whatever is on your mind or be
        helper to make them better.Venting to strangers anonymously can really help provide a sense of relief. </div>
        <div>
      <img src="./assets/kid1.png" id="kid1">
      <img src="./assets/phone1.png" id="phone1">
      </div>
    </div>

    <div id="textbox">
      <div id="box1"> Anonymous Timeline ! </div>
      <div class="lineBox">
      <hr class="line">
      </div>
      <div id="box2">
        Letting out your feelings through status. It would make your world brighter. </div>
        <div>
      <img src="./assets/kid2.png" id="kid2">
      <img src="./assets/phone2.png" id="phone2">
      </div>
    </div>
    </div>

    <div class="propertyBox">
    <div id="textbox">
      <div id="box1"> Secure and Private </div>
      <div class="lineBox">
      <hr class="line">
      </div>
      <div id="box2">
        Every conversations are encrypted and no stored. Your conversation will be a secret forever. </div>
        <div>
      <img src="./assets/secure.png" id="secure">
      <img src="./assets/private.png" id="private">
      </div>
    </div>

    <div id="textbox">
      <div id="box1"> Sentiment Analysis </div>
      <div class="lineBox">
      <hr class="line">
      </div>
      <div id="box2">
        To give you an overview of chat and make conversations better, Kiite uses AI to analyze your conversations and
        show them in stat.
      </div>
      <div>
      <img src="./assets/sentiment.png" id="sentiment">
      <img src="./assets/analysis.png" id="analysis">
      </div>
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Landing'
}

</script>
<style scope>
  .Landing {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f8f8f8;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
  }
  div#circle {
    position: absolute;
    height: 10.6666666667vw;
    width: 10.6666666667vw;
    background: #2FC4B2;
    border-radius: 26.6666667vw;
    top: 5.5vw;
    left: 5.06666667vw;
  }
  div#Ki {
    position: absolute;
    left: 9.6vw;
    top: 6.13333333vw;
    font-size: 7.2vw;
    font-style: normal;
    font-weight: normal;
  }
  .Boxtext {
    text-align: center;
    font-size: 9.74512743628vh;
    font-weight: bold;
    margin: auto;
    margin-top: 11.9940029985vh;
  }
  div#Better {
    color: #2FC4B2;
  }
  #bg1 {
    position: absolute;
    height: 37.8830584708vh;
    right: 0;
    top: 28vh;
    z-index: -1;
  }
  #bg2 {
    position: absolute;
    left: 0;
    z-index: -1;
    top: 58.9205397301vh;
    height: 37.8695652174vh;
  }
  div#talking {
    /* width: 29.9850074963vh; */
    width: 53.3333333333vw;
    margin: auto;
    margin-top: 6.74662668666vh;
    font-size: 2.99850074963vh;
    font-weight: normal;
    text-align: center;
  }
  #buttonBox {
    width: 25.0374812594vh;
    height: 5.99700149925vh;
    margin: auto;
    margin-top: 11.6941529235vh;
  }
  #buttonText {
    width: 25.0374812594vh;
    height: 5.99700149925vh;
    margin: auto;
    font-size: 2.3988005997vh;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.89955022488vh;
    border: none;
    background-color: #8DE5DE;
  }
  .ar{
    margin: auto;
    margin-top: 7.74512743628vh;
    width: 3.44827586207vh;
    height: 3.44827586207vh;
  }
  #arrow{
    margin: auto;
    width: 3.44827586207vh;
    height: 3.44827586207vh;
    cursor: pointer;
  }
  #bg3 {
    position: absolute;
    width: 44.9775112444vh;
    height: 37.8695652174vh;
    right: 0;
    top: 144.977511244vh;
    z-index: -1;
  }
  #bg4 {
    position: absolute;
    width: 44.9775112444vh;
    height: 37.8695652174vh;
    left: 0;
    top: 228.485757121vh;
    z-index: -1;
  }
  #bg5 {
    position: absolute;
    width: 29.9850074963vh;
    height: 40.2458770615vh;
    right: 0;
    bottom: 0;
    top: 305.542728636vh;
    z-index: -1;
  }
  #textbox {
    /* position: absolute; */
    margin: auto;
    width: 49.6251874063vh;
    height: 51.9055472264vh;
    margin-top: 9.14542728636vh;
    background-color: #EDEDED;
    border-radius: 0.89955022488vh;
  }
  #box1 {
    font-style: normal;
    font-weight: bold;
    font-size: 4.19790104948vh;
    padding-left: 0.89955022488vh;
    padding-top: 1.79910044978vh;
  }
  .lineBox{
    width:14.9925037481vh;
  }
  hr.line {
    border: solid #2FC4B2;
    width: 14.9925037481vh;
    margin-left: 0.89955022488vh;
  }
  #box2 {
    font-style: normal;
    font-weight: normal;
    font-size: 2.3988005997vh;
    margin-left: 0.89955022488vh;
    margin-top: 2.29835082459vh;
  }
  #kid1 {
    position: absolute;
    width: 12.7436281859vh;
    height: 19.52036vh;
    margin-top: 3.54872563718vh;
    margin-left: 11.2443778111vh;
  }
  #phone1 {
    position: absolute;
    width: 14.4122938531vh;
    height: 10.9805097451vh;
    margin-left: 24.7376311844vh;
  }
  #kid2 {
    position: absolute;
    width: 12.7436281859vh;
    height: 19.52036vh;
    margin-top: 10.6446776612vh;
    margin-left: 21.8890554723vh;
  }
  #phone2 {
    position: absolute;
    width: 16.0419790105vh;
    height: 13.4932533733vh;
    margin-top: 3.89805097451vh;
    margin-left: 9.44527736132vh;
  }
  #secure {
    position: absolute;
    width: 23.8875562219vh;
    height: 19.7901049475vh;
    margin-top: 5.84707646177vh;
    margin-left: 1.04947526237vh;
  }
  #private {
    position: absolute;
    width: 18.7406296852vh;
    height: 18.7406296852vh;
    margin-top: 6.29685157421vh;
    margin-left: 27.1364317841vh;
  }
  #sentiment {
    position: absolute;
    width: 19.7901049475vh;
    height: 20.7331334333vh;
    margin-top: 3.89805097451vh;
    margin-left: 2.69865067466vh;
  }
  #analysis {
    position: absolute;
    width: 23.8380809595vh;
    height: 20.8395802099vh;
    margin-top: 3.89805097451vh;
    margin-left: 22.7886056972vh;
  }
  @media only screen and (min-width: 768px) {
  /* For desktop: */
    div#circle {
    height: 5.6666666667vw;
    width: 5.6666666667vw;
    background: #2FC4B2;
    border-radius: 50%;
    z-index: -1;
    top: 2.54872563718vh;
    left:2.84857571214vh;
  }
  div#Ki {
    font-size: 3.6vw;
    font-style: normal;
    font-weight: normal;
    top: 3.44827586207vh;
    left: 7.39730134933vh;
  }
  .Boxtext {
    font-size: 15.94512743628vh;
  }
  .desktopBox{
    display: inline-flex;
  }
  #Better{
    margin-right: 1.47945205479vw;
  }
  #talking{
    width: 53.3333333333vw;
  }
  .ar{
    margin-top: 10.74512743628vh;
  }
  .propertyBox{
    display: inline-flex;
    margin: auto;
    width: 100%;
  }
  #bg1{
    height: 40.8830584708vh;
    top: 7vh;
  }
  #bg2{
    top:58vh
  }
  #bg3{
    top:90vh;
  }
  #bg4{
    top:150vh;
  }
  #bg5{
    top:185vh;
  }
}
</style>
