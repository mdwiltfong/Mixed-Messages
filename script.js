var zodiacs = {
    aries: {
        date: [321, 419],
        description: "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations",
    },
    taurus: {
        date: [420, 520],
        description: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
    },
    gemini: {
        date: [521, 620],
        description: "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.",
    },
    cancer: {
        date: [621, 722],
        description: "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room.",
    },
    leo: {
        date: [723, 822],
        description: "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.",
    },
    virgo: {
        date: [823, 922],
        description: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
    },
    libra: {
        date: [923, 1022],
        description: "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.",
    },
    scorpio: {
        date: [1023, 1121],
        description: "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.",
    },
    sagittarius: {
        date: [1122, 1221],
        description: "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. ",
    },
    capricorn: {
        date: [1222, 119],
        description: "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms. ",
    },
    aquarius: {
        date: [120, 218],
        description: "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.",
    },
    pisces: {
        date: [219, 320],
        description: "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.",
    }
};

// This function takes the <input id="birthday"> and then converts it into an object of numbers. To call on it use the following notation.
// birthDay()[0] is the user's birth year, while birthDay()[1] & birthDay()[2] are the user's birth month and dirthday, respectively. 
function birthDay() {
    var x = document.getElementById("birthday").value;
    let arr = x.split("");
    let year = [x[0], x[1], x[2], x[3]];
    let month = [x[5], x[6]];
    let day = [x[8], x[9]];
    year = eval(year.join(""));
    month = eval(month.join(""))
    day = eval(day.join(""));
    let birthday = [year, month, day];
    return birthday;
}


function zodiacSign(userBday, userBmonth) {
    let x = document.getElementById("zodiac");
    let y = [birthDay()[1], birthDay()[2]];
    let day = y.join("");
 
    if (zodiacs.aries.date[1]>day && day>zodiacs.aries.date[0]){
        return x.innerHTML=zodiacs.aries.description;
    } else if (zodiacs.taurus.date[1]>day && day>zodiacs.taurus.date[0]){
        return x.innerHTML=zodiacs.taurus.description;
    } else if (zodiacs.gemini.date[1]>day && day>zodiacs.gemini.date[0]){
        return x.innerHTML=zodiacs.gemini.description;
    } else if (zodiacs.cancer.date[1]>day && day>zodiacs.cancer.date[0]){
        return x.innerHTML=zodiacs.cancer.description;
    } else if (zodiacs.leo.date[1]>day && day>zodiacs.leo.date[0]){
        return x.innerHTML=zodiacs.leo.description;
    } else if (zodiacs.libra.date[1]>day && day>zodiacs.libra.date[0]){
        return x.innerHTML=zodiacs.libra.description;
    } else if (zodiacs.pisces.date[1]>day && day>zodiacs.pisces.date[0]){
        return x.innerHTML=zodiacs.pisces.description;
    } else if (zodiacs.sagittarius.date[1]>day && day>zodiacs.sagittarius.date[0]){
        return x.innerHTML=zodiacs.sagittarius.description;
    } else if (zodiacs.scorpio.date[1]>day && day>zodiacs.scorpio.date[0]){
        return x.innerHTML=zodiacs.scorpio.description;
    } else if (zodiacs.virgo.date[1]>day && day>zodiacs.virgo.date[0]){
        return x.innerHTML=zodiacs.virgo.description;
    } else{
        return x.innerHTML="Hmm, looks like your birthday doesn't work. Please try again! "
    }
}