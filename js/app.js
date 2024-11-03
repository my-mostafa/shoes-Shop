let bt = document.querySelectorAll(".bt")
let cunteiner = document.querySelector(".cunteiner")
let ary = [
    {id : "man" , title : " Men’s shoes are a key element for achieving a stylish and attractive look, playing an important role in completing any man’s appearance. From classic leather dress shoes to comfortable and sporty sneakers, each style can enhance one’s personal style and character in unique ways. Choosing the right shoes for men depends not only on appearance but also on comfort and durability. High-quality materials and designs that prioritize foot comfort allow men to feel at ease throughout the day and walk with confidence. The right pair of shoes can add a distinctive, appealing touch to a man’s style and boost his sense of assurance." , imge :"\"./image/4.png\""},
    {id : "woman" , title : "Women’s shoes are an essential part of any chic and modern style, capable of completely transforming your appearance. They come in various styles and colors, from elegant high heels for special occasions to comfortable flats and casual sneakers perfect for everyday wear. Choosing the right pair isn’t just about the look; comfort and durability also play a crucial role. High-quality materials and designs that fit the natural shape of the foot ensure that women can enjoy an energetic and comfortable day without feeling fatigued. That’s why finding the right pair of women’s shoes can significantly impact both your style and confidence." , imge :"\"./image/5.png\""},
    {id : "sport" , title : "Children's shoes should not only be cute and attractive but also ensure comfort and support for healthy foot development. From colorful, patterned shoes to lightweight and durable sneakers, each style is designed to support kids' growing feet. Choosing the right shoes with high-quality materials and ergonomic designs allows children to play freely and carry out daily activities without discomfort. Kids' shoes should be flexible and provide proper protection so that young feet can develop correctly. This is why the right pair of shoes plays an important role in shaping a child’s foot health and encouraging healthy movement habits." , imge :"\"./image/6.png\""}
]



bt.forEach(function(gph){
    gph.addEventListener("click",function(ftr){
        location.search ="id="+ftr.target.parentElement.id
    })
})

if(location.search){
    
let locationsearch = location.search

let locallocationsearch = new URLSearchParams(locationsearch)

let serchid = locallocationsearch.get("id")

let local = ary.find(function(edf){
           return edf.id == serchid
        })




cunteiner.innerHTML = ''

cunteiner.insertAdjacentHTML("afterbegin","<div> <img src="+local.imge+"alt=\"pictore1\"> <p>" + local.title + "</p> <button onclick=\"funci()\" class=\"btback\">back</button> </div>")

}

function funci(){
    location.search = ''
}




