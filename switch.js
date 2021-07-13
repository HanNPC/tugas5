        var jawab = prompt("Masukan angka diantara 1 sampai 5");
        var hadiah = "";
        
        switch(jawab){
            case "1":
                hadiah = "";
                break;
            case "2":
                hadiah = "";
                break;
            case "3":
                hadiah = "";
                break;
            case "4":
                hadiah = "";
                break;
            case "5":
                hadiah = "";
                break;
            default:
                document.write("<p></p>");
        }

        if(hadiah === ""){
            document.write("<p></p>");
        } else {
            document.write("<h2> " + hadiah + "</h2>");
        }