import React from 'react';
import { useState } from 'react';
export function Mobile({brandname,brandprice}){
  
    return(
    <>
    <div class="card" >
  <img src="https://upload.wikimdia.org/wikipedia/commons/a/a5/Flower_poster_2.jpg" class="card-img-top" alt="..." ></img>
  <div class="card-body">
    <h5 class="card-title">{brandname}</h5>
    <p>{brandprice}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://github.com/muthu1809/Web-Designing-Materials/blob/main/React%20JS%20in%20Tamil%202" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </>
    )
}

