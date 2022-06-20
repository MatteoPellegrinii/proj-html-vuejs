<template>
<div class="contenitore">
  <div class="jumbotron">
    <div class="left">
      <div class="red">Certified fitness professional</div>
      <div class="white">Take control of your health</div>
      <div class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
      <div class="buttons">
        <div class="bluebutton"><a href="#"><font-awesome-icon icon="fa-brands fa-youtube" />Visit my youtube channel</a></div>
        <div class="transparentbutton"><a href="#">Buy Avada today <font-awesome-icon icon="fa-solid fa-right-long" /></a> </div>
      </div>
    </div>
    <div class="play">
      <font-awesome-icon class="playbutton" icon="fa-solid fa-play" />
      <div class="cardtop"></div>
      <div class="cardbot"></div>
    </div>

  </div>
  <div class="blueredpart">
    <div class="card first">
      <h5>Crossfit workout</h5>
      <h6>Push your limits</h6>
    </div>
        <div class="card second">
      <h5>Crossfit workout</h5>
      <h6>Push your limits</h6>
    </div>
        <div class="card third">
      <h5>Crossfit workout</h5>
      <h6>Push your limits</h6>
    </div>
    <h2>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro mollitia molestias quis, ut dolorem!"</h2>
    <div class="author">
      <img src="../assets/images/avatar-1-2x.jpg" alt="">
      <h6 class="name">Brad Jhonson</h6>
      <h6 class="position">Las Vegas</h6>
    </div>
  </div>
  <section class="video">
    <div class="videoleft"><font-awesome-icon class="playbutton" icon="fa-solid fa-play" /></div>
    <div class="textvideo">
      <h5>Tune up your workouts</h5>
      <h3>The best health & fitness advice online</h3>
      <div class="youtube">
        <img src="../assets/images/unnamed.jpg">
        <div class="sub">
          <h6>ThemeFusion</h6>
          <div class="youtubebutton">
            <div class="redy"><font-awesome-icon icon="fa-brands fa-youtube" />YouTube</div>
            999+
          </div>
        </div>
      </div>
      <div class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit repellat similique atque beatae nulla nihil</div>
      <div class="redbutton"><a href="#"><font-awesome-icon icon="fa-brands fa-youtube" />Visit my youtube channel</a></div>
    </div>

  </section>
</div>

</template>

<script>
export default {
  name: 'MainProject',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contenitore{
  font-family: sans-serif;
}
.jumbotron{
  width: 100%;
  height: 450px;
  background-image: url(../assets/images/slider82x-scaled.jpg);
  background-size: cover;
  display: flex;
  position: relative;
}
.left{
  width: 55%;
  height: 100%;
  padding-top: 100px;
  background-color: black;

  .red{
    width: 100%;
    color: red;
    margin-left: 200px;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .white{
    width: 100%;
    color: white;
    margin-left: 200px;
    font-size: 40px;
      margin-bottom: 15px;
  }
  .grey{
    color: grey;
    width: 100%;
    margin-left: 200px;
      margin-bottom: 15px;
  }
  .buttons{
    margin-top: 15px;
    display: flex;
    width: 100%;
    margin-left: 200px;
    a{
      text-decoration: none;
      color: white;
    }
    .bluebutton{
      background-color: blue;
      padding: 10px;
      border-radius: 20px;
      margin-right: 30px;
    }
    .transparentbutton{
      background-color: transparent;
      border: solid 2px white;
      padding: 10px;
      border-radius: 20px;
      margin-right: 30px;
    }
  }
}
  .play{
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .playbutton{
    color: blue;
    background-color: white;
    padding: 20px 22px;
    border-radius: 50%;
    cursor: pointer;
  }
  .cardtop, .cardbot{
    width: 50px;
    height: 50px;
    background-color: white;
    position: absolute;
    border-radius: 10px;
    cursor: pointer;
  }
  .cardtop{
    right: 5px;
    top: 30px;
  }
  .cardbot{
    right: 5px;
    top: 90px;
  }

.blueredpart{
  width: 100%;
  height: 550px;
  background-image: linear-gradient( to right bottom, blue , red);
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .card{
    width: 250px;
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2px 2px 20px 2px;
    top: -90px;
    position: relative;
    margin: 0px 25px;
    cursor: pointer;
    padding-top: 150px;
      h6{
    width: 100%;
    margin-left: 40px;
    color: yellow;
    font-size: 20px;
  }

  }
  .first{
        background-image: url(../assets/images/service6-2x.jpg);
        
  }
  .second{
    background-image: url(../assets/images/box1-2x.jpg);
  }
  .third{
    background-image: url(../assets/images/box3-2x.jpg);
  }
  h5{
    width: 100%;
    margin-left: 40px;
    font-size: 25px;
    color: white;
  }

  h2{
    width: 50%;
    margin: auto;
    text-align: center;
    margin-top: -90px;
    color: white;
    font-size: 30px;
  }
  .author{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -90px;
    height: min-content;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .name{
      color: white;
      font-size: 14px;
      margin: 0 15px;
    }
    .position{
      color: lightgrey;
    }

  }
}
.video{
  display: flex;
}
.videoleft{
  position: relative;
  width: 70%;
  height: 550px;
  background-image: url(../assets/images/service15-2x.jpg);
  background-size: cover;
  border-radius: 2px 2px 20px 2px;
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.textvideo{
  margin-left: 80px;
  margin-top: 80px;
  margin-right: 60px;
  h5{
    color: blue;
    font-size: 18px;
  }
  h3{
    font-size: 40px;
    margin-top: 30px;
  }
  .youtube{
    margin-top: 30px;
    .youtubebutton{
      display: flex;
      border: solid 1px grey;
      color: gray;
      align-items: center;
      font-size: 11px;
      width: 100px;
    }
    .redy{
      background-color: red;
      color: white;
      font-size: 12px;
      padding: 3px;
    }
    img{
      width: 30px;
    }
    h6{
      color: grey;
      font-size: 10px;
    }
    display: flex;
    align-items: center;
  }
  .lorem{
    color: grey;
    margin-top: 30px;
  }
  .redbutton{
      background-color: red;
      padding: 10px 30px;
      border-radius: 20px;
      width: fit-content;
      margin-top: 30px;
      a{
        text-decoration: none;
        color: white;
        width: min-content;
        font-size: 15px;
      }
  }
  
}
</style>