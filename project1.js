const user = [
    {
        name : "husnain",
        pic : "b.png",
        bio : "he is an coder"
    },
    {
        name : "tiger",
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVJv-JweyJV8iZ9zMm--T590d93lKYucGBw&s",
        bio : "This is an danger animal in world."
    },
    {
        name : "panad",
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDPp1-pC4zFRX8GlRdQBv2dJhbsohFlHMgA&s",
        bio : "this is an heavy animal in world."
    },
    {
        name : "rabot",
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnozlYmxNDMitEnqHVqm-GS4LVWTZqimvafA&s",
        bio : "This is an beautiful Animal"
    },
    {
        name : "Wolf",
        pic : "wild-wolf-nature.jpg",
        bio : "this is an clever animal in world"
    },
    {
        name : "Shaheen",
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkx5v4C828I5D9JLhO2h9hWYxWoRJ-sTDymA&s",
        bio : "Fly highest in the air"
    },
    {
        name : "Lion",
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaRwa3wtm27dJ-OrygiioUcrrQTqQOyIv4g&s",
        bio : "this is an King of jungle"
    }
]
let flex = document.querySelector(".nav");
function showUsers(arr){
arr.forEach(function(user){
       const card = document.createElement("div");
   card.classList.add("card");
   const img = document.createElement("img");
   img.classList.add("bg-img");
   img.src = user.pic;
   const burred = document.createElement("div");
   burred.classList.add("blurred");

   burred.style.backgroundImage = `url(${user.pic})`

   const content = document.createElement("div");
   content.classList.add("content");

   const heading = document.createElement("h3");
   heading.textContent = user.name;

   const para = document.createElement("p");
   para.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(para);
    card.appendChild(img);
    card.appendChild(burred);
    card.appendChild(content);

    flex.appendChild(card);

})
}
showUsers(user)

let inp = document.querySelector(".inp");
inp.addEventListener("input",function(){

    let findUser = user.filter((users) => {
        return users.name.toLowerCase().startsWith(inp.value.toLowerCase());
    })
    flex.innerHTML = "";
    showUsers(findUser);
})