



async function main() {
    const urlParams = new URLSearchParams(window.location.search);

    var search = urlParams.get("query");

    var image;




    function getChar(charlist, character) {

        console.log("getchar "+character);
        
        if (character === "Arisu") {character = "Aris"}
        for (char in charlist) {
            console.log(char);
            if (charlist[char]['name'] === character) {
                var name = charlist[char]['name'];
                var profile = charlist[char]['profile'];
                

                document.getElementById("character-info").innerHTML = 
                `
                <p>name: ${name}</p>
                <p>profile: ${profile}</p>
                <a target="_blank" href="https://bluearchive.wiki/wiki/${name}">wiki page </a>
                `;
                document.getElementById("character-image").appendChild(image);
                return
            }
        }
        document.getElementById("character-info").innerHTML = 
        `<p>not found~</p>
        <p>check out <a href="https://bluearchive.gg/characters/">here</a> for a full list of students</p>
        <img src="css/media/videos/blue-archive-serika.gif" width="150">
        `
    }

    function getImage(data) {
        image = document.createElement("img");
        if (data["dataAllPage"] != 0) {
            search = data['data'][0]["name"];
            var imageURL = data['data'][0]['photoUrl'];
            image.setAttribute("src", imageURL);
            image.setAttribute("width", 150);
        }
        
    } 


    async function waitImage() {
        var resp = await fetch(`https://api-blue-archive.vercel.app/api/characters?name=${search}`);
        var json = await resp.json();
        getImage(json);
    }

    async function waitChar(url) {
        var resp = await fetch("https://api.ennead.cc/buruaka/character");
        var json = await resp.json();
        getChar(json, search);
    }



    var resp = await waitImage();

    var resp = await waitChar();




}

main();



