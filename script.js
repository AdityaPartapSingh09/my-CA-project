// icon used inside 
        // fa-solid fa-empty-set  - empty
        // fa-skull-crossbones - Danger
        // fa-gift - Gift Box

        let userStepCount = 0;
        let userGiftSkullOpenedAddress = [];

        //Gift opened or not
        let firstGiftAddressOpened = false;
        let secondGiftAddressOpened = false;
        let thirdGiftAddressOpened = false; 


        // document.getElementById("f2").className = "fa-solid fa-skull-crossbones"; 
        var gift = document.getElementsByClassName("fa-gift");
        var skull = document.getElementsByClassName("fa-skull-crossbones");
        var miss = document.getElementsByClassName("fa-0");

        // hide gift 
        for(let i = 0; i < gift.length; i++){
            gift[i].style.display = "none";
        }

        // hide skull / Danger
        for(let i = 0; i < skull.length; i++){
            skull [i].style.display = "none";
        }

        // hide gift 
        for(let i = 0; i < miss.length; i++){
            miss[i].style.display = "none";
        }


        // generate random character and number to hide gift
        var giftAddress = [];
        for(let i = 0; i < 3; i++){
            
            // Generate random Character
            const alphabet = "abcdef"
            const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
            
            // Generate random number
            var randomNumber = Math.floor(Math.random() * 6);

            var combineRandom = randomCharacter + randomNumber;

            if (giftAddress[0] == combineRandom || giftAddress[1] == combineRandom || giftAddress[2] == combineRandom) {
                i--;
            }
            else{
                giftAddress[i] = combineRandom;
            }
        }

        // generate random character and number to hide skull
        var skullAddress = [];
        for(let i = 0; i < 1; i++){
            
            // Generate random Character
            const alphabet = "abcdef"
            const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
            
            // Generate random number
            var randomNumber = Math.floor(Math.random() * 6);

            var combineRandom = randomCharacter + randomNumber;

            if (giftAddress[0] == combineRandom || giftAddress[1] == combineRandom || giftAddress[2] == combineRandom) {
                i--;
            }
            else{
                skullAddress[i] = combineRandom;
            }
        }



        // print the random number of hidden gift .
        for(let i = 0; i < 3; i++){
            console.log("Gift : " + giftAddress[i]);
        }
        // print the random number of hidden Skull.
        for(let i = 0; i < skullAddress.length; i++){
            console.log("Skull : " + skullAddress[i]);
        }



        // Hide three gift in random  three address.
        document.getElementById(giftAddress[0]).className = "fa-solid fa-gift";
        document.getElementById(giftAddress[1]).className = "fa-solid fa-gift";
        document.getElementById(giftAddress[2]).className = "fa-solid fa-gift";

        // Hide one skull in random  one address.
        document.getElementById(skullAddress[0]).className = "fa-solid fa-skull-crossbones";


        function search(){
            var userInputValue = document.getElementById("userinp").value.toLowerCase();
            var boxAddressToMakeBlock = document.getElementById(userInputValue);
            boxAddressToMakeBlock.style.display = "block";

            userStepCount = userStepCount + 1;
            if (userInputValue == giftAddress[0]) {
                if (userInputValue == userGiftSkullOpenedAddress[0] || userInputValue == userGiftSkullOpenedAddress[1] || userInputValue == userGiftSkullOpenedAddress[2] || userInputValue == userGiftSkullOpenedAddress[3]) {
                    console.log("You have already opened this Gift Box");
                }
                else{
                    boxAddressToMakeBlock.style.display = "block";
                    userGiftSkullOpenedAddress.push(userInputValue);
                }
            }

            //Check user won or not.
            checkUserWinOrNot();
            liveStepCount();
        }


        function checkUserWinOrNot(){
            var userInputValue = document.getElementById("userinp").value.toLowerCase();

            if(firstGiftAddressOpened == true && secondGiftAddressOpened == true && thirdGiftAddressOpened == true){
                alert("you won");
                document.getElementById("winBox").style.display = "block";
                document.getElementById("wintotalStep").innerHTML = "Number of steps : " + userStepCount;
                document.getElementById("winuserRank").innerHTML = "Your Rank : " + Math.round(Math.random()*20);
            }
            if(userInputValue == skullAddress[0]){
                alert("Oh Dear you opened skull. You loss");
                document.getElementById("lossBox").style.display = "block";
                document.getElementById("losstotalStep").innerHTML = "Number of steps : " + userStepCount;
                document.getElementById("lossuserRank").innerHTML = "Your Rank : " + Math.round(Math.random()*100);
            }
            if(userInputValue == giftAddress[0]){
                firstGiftAddressOpened = true;
            }
            else if(userInputValue == giftAddress[1]){
                secondGiftAddressOpened = true;
            }
            else if(userInputValue == giftAddress[2]){
                thirdGiftAddressOpened = true;
            }

        }
        function liveStepCount(){
            let openedCount = 0
            if(firstGiftAddressOpened == true && secondGiftAddressOpened == false && thirdGiftAddressOpened == false){
                openedCount = 1;
            }
            if(firstGiftAddressOpened == true && secondGiftAddressOpened == true && thirdGiftAddressOpened == false){
                openedCount = 2;
            }
            if(firstGiftAddressOpened == true && secondGiftAddressOpened == true && thirdGiftAddressOpened == true){
                openedCount = 3;
            }

            document.getElementById("liveStepCount").innerText = "Step count - " + userStepCount;
            document.getElementById("livegiftOpenedCount").innerHTML = "Gift Opened - " + openedCount;
        }