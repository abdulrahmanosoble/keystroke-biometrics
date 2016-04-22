int count = 0;

function complete(){
    if(document.getElementById("userinput").Value == "the quick brown fox jumps over the something something")
    {
        document.getElementById("userinput").value = "";
        count++;
        document.getElementById("progress").innerHTML = count.toString();
    }
}
