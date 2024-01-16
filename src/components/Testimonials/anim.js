import React from 'react'
import "./anim.css"
import ANIM from "../../img/Image1.webp"
function anim() {
    
  return (
    <div>
        
      

<div id="app">
  <div class="title">
    <div class="title-inner">
      <div class="cafe">
        <div class="cafe-inner">Keyframé</div>
      </div>
      <div class="mozart">
        <div class="mozart-inner">Artistes</div>
      </div>
    </div>
  </div>

  <div class="image">
    <img src={ANIM} alt=''/>
  </div>
</div>

<a href="https://youtu.be/mBY62jtbMYM" target="_blank" data-keyframers-credit></a>
<script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>
    </div>
  )
}

export default anim