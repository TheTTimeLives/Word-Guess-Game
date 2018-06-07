
    var wordchoices = ["taylor", "basic", "failure","malcontent"];
    var wordrandom = wordchoices[Math.floor(Math.random() * 3)];
    var wordletters = wordrandom.split('');
    var myLength = wordrandom.length;
    var linedisplay = [myLength];
    var attempts = 10;
    var input;
    var inputarray = [];
    var string = "";
    var fullstring;
    var lose;
    var win;

    var reset = function(){
        wordrandom = wordchoices[Math.floor(Math.random() * 3)];
        wordletters = wordrandom.split('');
        myLength = wordrandom.length;
        linedisplay = [myLength];
        attempts = 10;
        input;
        win= "";
        inputarray = [];
        string = "";

            for(var i = 0; i < wordrandom.length; i++){
        linedisplay[i] = "_ ";
        string = string + linedisplay[i];
    }
    console.log(string);
    document.getElementById("blanks").innerHTML = string;
    document.getElementById("attempts").innerHTML = attempts;

    }

    console.log(myLength);
// makes the _ that make up the guess blank for each random word
    for(var i = 0; i < wordrandom.length; i++){
        linedisplay[i] = "_ ";
        string = string + linedisplay[i];
    }
    console.log(string);
    document.getElementById("blanks").innerHTML = string;

//stores the users input and checks against characters in the random word

console.log(wordletters);


document.getElementById("reset").addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById("common").style.display = "block";
    document.getElementById('win').innerHTML = ""
    document.getElementById('lose').innerHTML = ""
    reset();

})

document.onkeyup = function(event) {
                input = event.key;


                const present = wordletters.indexOf(input) !== -1;

                if(present){
                    inputarray.push(input);
                    string+= input
                    linedisplay[wordletters.indexOf(input) ] = input

                }else {
                 attempts--;   
                }
                if(linedisplay.join("") === wordletters.join("")){
                   
                    document.getElementById("common").style.display = "none";
                    document.getElementById('win').innerHTML = "You win"
                    return null;

                }
                if (attempts === 0){
                    document.getElementById("common").style.display = "none";
                    document.getElementById('lose').innerHTML = "You lose"
                    return null;
                    
                }
                    console.log(string);
                         document.getElementById("blanks").innerHTML = linedisplay.join("");
                         document.getElementById("attempts").innerHTML = attempts;
                         
                         
                    
                }
                

                
                


                
            
    

    
