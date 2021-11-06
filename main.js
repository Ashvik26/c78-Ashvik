var pictures=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg","grandma.jpeg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","boy.jpeg","https://i.postimg.cc/5ymDKL83/bro.jpg"];
var family_members=["My Family Book","Joseph George","Savitarri Yelluri","Viswasant Ruttala","Shalini George","Ashvik Ruttala","Rithvik Ruttala"];
var counting=0;
function family(){
    if(counting==7){
        counting=0;
    }
    document.getElementById("family_book").src=pictures[counting];
    document.getElementById("names").innerHTML=family_members[counting];
    counting++;
}