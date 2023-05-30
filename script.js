 

 
  var flag=1;
 
 document.querySelector(".cus>button").addEventListener("click",function(){

  
   if(flag==1){
    document.querySelector(".cus>button").style.backgroundColor="white"
    document.querySelector(".cus>button").style.color="black"
    document.querySelector(".cus>button").style.backgroundImage="url(./okk.png)"
    // document.querySelector(".rtopin").style.backgroundImage="url(https://i.pinimg.com/originals/0b/ce/fc/0bcefc2af75f4683ca0b3d3ad2d46c71.gif)"
    document.querySelector(".main").style.backgroundColor="black"
    document.querySelector("#cone").style.color="white"
    document.querySelector(".lefttwo").style.color="white"
    document.querySelector("#ctwo").style.color="white"
    document.querySelector("#bone").style.border="2px solid white"
    document.querySelector(".rtincontent>h1").style.color="white"
    document.querySelector(".rtopin").style.filter="none"
    document.querySelector(".rtopin").style.backgroundImage="url(https://i.pinimg.com/originals/ae/b5/2f/aeb52f40ecf9d7b01da4860e74068e97.gif)"
    document.querySelector(".rbright").style.filter="darken"
    flag=0
   }
   else{
    document.querySelector(".cus>button").style.backgroundColor="black"
    document.querySelector(".cus>button").style.color="white"
    document.querySelector(".cus>button").style.backgroundImage="url(./ok.png)"
    // document.querySelector(".rtopin").style.backgroundImage="url(https://i.pinimg.com/originals/ae/b5/2f/aeb52f40ecf9d7b01da4860e74068e97.gif)"

    document.querySelector(".rtopin").style.backgroundImage="url(https://i.pinimg.com/originals/0b/ce/fc/0bcefc2af75f4683ca0b3d3ad2d46c71.gif)"
    document.querySelector(".rtincontent>h1").style.color="white"
    document.querySelector(".main").style.backgroundColor="white"
    document.querySelector("#cone").style.color="black"
    document.querySelector(".lefttwo").style.color="black"
    document.querySelector("#ctwo").style.color="black"
    document.querySelector("#bone").style.border="none"
    // document.querySelector(".rtopin").style.filter="invert()"
    
    flag=1
   }
 
 
 })
 
 
 
 
 
 var tl= gsap.timeline()


tl.from(".open>h1",{
    
    opacity:0,
    scale:0,
    ease:Expo.easeIn,
    duration:1
    
})


.to("#rc",{
    scale:1,
    rotate:5580,
    delay:.5,
    duation:1  
})

.to(".open",{
    gap:0,
}
)

.from(".open",{
    top:"0%",
    duration:1,
    delay:1,
    ease:Circ.easeIn
})

.from(".lefttwo,.right",{
    y:100,
    opacity:0,
    duration:1.5,
    ease:Expo.easeOut
})



