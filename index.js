let accounts = [
  {
    avatar: "./assets/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    function: "reacted to your recent post",
    club: "",
    post: "My first tournament today!",
    time: "1m ago",
    message: "",
    photo: "",
    check: false,
  },
  {
    avatar: "./assets/images/avatar-angela-gray.webp",
    name: "Angela-Gray",
    function: "followed you",
    club: "",
    post: "",
    time: "5m ago",
    message: "",
    photo: "",
    check: false,
  },
  {
    avatar: "./assets/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    function: "has joined your group",
    club: "Chess Club",
    post: "",
    time: "1day ago",
    message: "",
    photo: "",
    check: false,
  },
  {
    avatar: "./assets/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    function: "sent you a private message",
    club: "",
    post: "",
    time: "5 days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    photo: "",
    check: true,
  },
  {
    avatar: "./assets/images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    function: "commented on your picture",
    club: "",
    post: "",
    time: "1 week ago",
    message: "",
    photo: "./assets/images/image-chess.webp",
    check: true,
  },
  {
    avatar: "./assets/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    function: "reacted to your recent post",
    club: "",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    message: "",
    photo: "",
    check: true,
  },
  {
    avatar: "./assets/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    function: "left the group",
    club: "Chess Club",
    post: "",
    time: "2 weeks ago",
    message: "",
    photo: "",
    check: true,
  },
];

let counter = 0;

let msg = document.querySelector(".messages");
let count=document.querySelector(".count");

function fillData() {
  for (let i of accounts) {
    counter++;
    let newDiv = document.createElement("div");
    newDiv.addEventListener('click', function handleClick(event) {
        if(i.check===false){
            i.check=true;
        msg.innerHTML="";
        let x=parseInt(count.textContent);
        if(x!=0){
            x--;
            count.textContent=x;
        }
        fillData();
        }
        
      });
    newDiv.classList.add("message-tab");
    newDiv.innerHTML = `
    <div class="profile-pic">
    <img src=${i.avatar}>
    </div>
    <div class="message-body">
    <div class="msg">
    <span class="name">${i.name}</span>
    <span class="function">${i.function}</span>
    <span class="club">${i.club}</span>
    <span class="post" >${i.post}</span>
    <span class="status"></span>
    </div>
        <div class="time">${i.time}</div>
        <div class="personal">${i.message}</div>
        </div>
        <div class="photo"><img src=${i.photo}></div>`;
    if (i.check === false) {
      newDiv.style.backgroundColor = "hsl(210, 60%, 98%)";
    } else {
      msg.style.backgroundColor = "hsl(0, 0%, 100%)";
      newDiv.querySelector(".status").style.display = "none";
    }
    if (i.message === "")
      newDiv.querySelector(".personal").style.display = "none";
    msg.append(newDiv);
  }
}
fillData();

let readAll=document.querySelector(".read-all");
readAll.addEventListener("click",()=>{
    for(let i of accounts){
        i.check=true;
    }
    count.textContent=0;
    msg.innerHTML="";
    fillData();
});