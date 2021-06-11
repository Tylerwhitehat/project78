var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names=["family","darryl","sherma","darrielle","tyler"];
var i=0;
function update(){
i++;
document.getElementById("family_member_image").src = images[i];
document.getElementById("family_member_name") = names[i];
}