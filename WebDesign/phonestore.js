const right = document.querySelector('.fa-arrow-right')
const left = document.querySelector('.fa-arrow-left')
let index=0
const img_number=document.querySelectorAll(".slider_content_top img")
right.addEventListener("click",function(){
    index=index+1
    if(index>img_number.length-1){
        index=0
    }
   document.querySelector(".slider_content_top").style.right = index*100+"%" /*dich sang ben trai*/
})
left.addEventListener("click",function(){
    index = index-1
    if(index<0){
        index=img_number.length-1
    }
    document.querySelector(".slider_content_top").style.right = index*100+"%"  /*dich sang ben phai*/
 })
//slide bottom
const img_numberli=document.querySelectorAll('.slider_content_bottom li')
// console.log (img_numberli)
img_numberli.forEach(function(box,index,){
    box.addEventListener("click",function(){
        remove_act ()
        document.querySelector(".slider_content_top").style.right = index*100+"%"
        box.classList.add("act") //khi nao click vao li se "act" da lam o css
    })
})
function remove_act (){
    let box_act = document.querySelector('.act')
    box_act.classList.remove('act')
}
