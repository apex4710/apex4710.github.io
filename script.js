document.addEventListener("DOMContentLoaded", function() {
    const teams = {};
    const fixturesDiv = document.getElementById("fixtures");
    const pointsTable = document.getElementById("pointsTable").getElementsByTagName("tbody")[0];

    const teamNames = [
        "Girona FC (ESP)", "Liverpool FC (ENG)", "GNK Dinamo Zagreb (CRO)", "Celtic FC (SCO)",
        "Stade Brestois 29 (FRA)", "PSV (NED)", "RB Leipzig (GER)", "Aston Villa FC (ENG)",
        "Atalanta BC (ITA)", "Real Madrid CF (ESP)", "Bayer 04 Leverkusen (GER)",
        "FC Internazionale Milano (ITA)", "Club Brugge KV (BEL)", "Sporting Clube de Portugal (POR)",
        "FK Shakhtar Donetsk (UKR)", "FC Bayern München (GER)", "FC Red Bull Salzburg (AUT)",
        "Paris Saint-Germain FC (FRA)", "Club Atlético de Madrid (ESP)", "ŠK Slovan Bratislava (SVK)",
        "Lille OSC (FRA)", "SK Sturm Graz (AUT)", "VfB Stuttgart (GER)", "BSC Young Boys (SUI)",
        "Borussia Dortmund (GER)", "FC Barcelona (ESP)", "AC Milan (ITA)", "FK Crvena Zvezda (SRB)",
        "Sport Lisboa e Benfica (POR)", "Bologna FC 1909 (ITA)", "Arsenal FC (ENG)", "AS Monaco FC (MCO)",
        "Juventus FC (ITA)", "Manchester City FC (ENG)", "Feyenoord Rotterdam (NED)", "AC Sparta Praha (CZE)"
    ];

    teamNames.forEach(team => {
        teams[team] = {
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            awayGoals: 0,
            awayWins: 0,
            points: 0
        };
    });

    const fixtures = [
        // Matchday 1
        { matchday: 1, date: "2024-09-17", team1: "BSC Young Boys (SUI)", team2: "Aston Villa FC (ENG)", score1: 0, score2: 3 },
        { matchday: 1, date: "2024-09-17", team1: "Juventus FC (ITA)", team2: "PSV (NED)", score1: 3, score2: 1 },
        { matchday: 1, date: "2024-09-17", team1: "Sporting Clube de Portugal (POR)", team2: "Lille OSC (FRA)", score1: 2, score2: 0 },
        { matchday: 1, date: "2024-09-17", team1: "FC Bayern München (GER)", team2: "GNK Dinamo Zagreb (CRO)", score1: 9, score2: 2 },
        { matchday: 1, date: "2024-09-17", team1: "Real Madrid CF (ESP)", team2: "VfB Stuttgart (GER)", score1: 3, score2: 1 },
        { matchday: 1, date: "2024-09-17", team1: "AC Milan (ITA)", team2: "Liverpool FC (ENG)", score1: 1, score2: 3 },
        { matchday: 1, date: "2024-09-18", team1: "Bologna FC 1909 (ITA)", team2: "FK Shakhtar Donetsk (UKR)", score1: 0, score2: 0 },
        { matchday: 1, date: "2024-09-18", team1: "AC Sparta Praha (CZE)", team2: "FC Red Bull Salzburg (AUT)", score1: 3, score2: 0 },
        { matchday: 1, date: "2024-09-18", team1: "Manchester City FC (ENG)", team2: "FC Internazionale Milano (ITA)", score1: 0, score2: 0 },
        { matchday: 1, date: "2024-09-18", team1: "Paris Saint-Germain FC (FRA)", team2: "Girona FC (ESP)", score1: 1, score2: 0 },
        { matchday: 1, date: "2024-09-18", team1: "Club Brugge KV (BEL)", team2: "Borussia Dortmund (GER)", score1: 0, score2: 3 },
        { matchday: 1, date: "2024-09-18", team1: "Celtic FC (SCO)", team2: "ŠK Slovan Bratislava (SVK)", score1: 5, score2: 1 },
        { matchday: 1, date: "2024-09-19", team1: "Feyenoord Rotterdam (NED)", team2: "Bayer 04 Leverkusen (GER)", score1: 0, score2: 4 },
        { matchday: 1, date: "2024-09-19", team1: "FK Crvena Zvezda (SRB)", team2: "Sport Lisboa e Benfica (POR)", score1: 1, score2: 2 },
        { matchday: 1, date: "2024-09-19", team1: "AS Monaco FC (MCO)", team2: "FC Barcelona (ESP)", score1: 2, score2: 1 },
        { matchday: 1, date: "2024-09-19", team1: "Stade Brestois 29 (FRA)", team2: "SK Sturm Graz (AUT)", score1: 2, score2: 1 },
        { matchday: 1, date: "2024-09-19", team1: "Atalanta BC (ITA)", team2: "Arsenal FC (ENG)", score1: 0, score2: 0 },
        { matchday: 1, date: "2024-09-19", team1: "Club Atlético de Madrid (ESP)", team2: "RB Leipzig (GER)", score1: 2, score2: 1 },
        // Matchday 2
        { matchday: 2, date: "2024-10-01", team1: "VfB Stuttgart (GER)", team2: "AC Sparta Praha (CZE)", score1: 1, score2: 1 },
        { matchday: 2, date: "2024-10-01", team1: "FC Red Bull Salzburg (AUT)", team2: "Stade Brestois 29 (FRA)", score1: 0, score2: 4 },
        { matchday: 2, date: "2024-10-01", team1: "ŠK Slovan Bratislava (SVK)", team2: "Manchester City FC (ENG)", score1: 0, score2: 4 },
        { matchday: 2, date: "2024-10-01", team1: "Borussia Dortmund (GER)", team2: "Celtic FC (SCO)", score1: 7, score2: 1 },
        { matchday: 2, date: "2024-10-01", team1: "FC Barcelona (ESP)", team2: "BSC Young Boys (SUI)", score1: 5, score2: 0 },
        { matchday: 2, date: "2024-10-01", team1: "FC Internazionale Milano (ITA)", team2: "FK Crvena Zvezda (SRB)", score1: 4, score2: 0 },
        { matchday: 2, date: "2024-10-01", team1: "Bayer 04 Leverkusen (GER)", team2: "AC Milan (ITA)", score1: 1, score2: 0 },
        { matchday: 2, date: "2024-10-01", team1: "Arsenal FC (ENG)", team2: "Paris Saint-Germain FC (FRA)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-01", team1: "PSV (NED)", team2: "Sporting Clube de Portugal (POR)", score1: 1, score2: 1 },
        { matchday: 2, date: "2024-10-02", team1: "Girona FC (ESP)", team2: "Feyenoord Rotterdam (NED)", score1: 2, score2: 3 },
        { matchday: 2, date: "2024-10-02", team1: "FK Shakhtar Donetsk (UKR)", team2: "Atalanta BC (ITA)", score1: 0, score2: 3 },
        { matchday: 2, date: "2024-10-02", team1: "Aston Villa FC (ENG)", team2: "FC Bayern München (GER)", score1: 1, score2: 0 },
        { matchday: 2, date: "2024-10-02", team1: "SK Sturm Graz (AUT)", team2: "Club Brugge KV (BEL)", score1: 0, score2: 1 },
        { matchday: 2, date: "2024-10-02", team1: "Liverpool FC (ENG)", team2: "Bologna FC 1909 (ITA)", score1: 2, score2: 0 },
        { matchday: 2, date: "2024-10-02", team1: "RB Leipzig (GER)", team2: "Juventus FC (ITA)", score1: 2, score2: 3 },
        { matchday: 2, date: "2024-10-02", team1: "Sport Lisboa e Benfica (POR)", team2: "Club Atlético de Madrid (ESP)", score1: 4, score2: 0 },
        { matchday: 2, date: "2024-10-02", team1: "GNK Dinamo Zagreb (CRO)", team2: "AS Monaco FC (MCO)", score1: 2, score2: 2 },
        { matchday: 2, date: "2024-10-02", team1: "Lille OSC (FRA)", team2: "Real Madrid CF (ESP)", score1: 1, score2: 0 },
        // Matchday 3
        { matchday: 3, date: "2024-10-22", team1: "AS Monaco FC (MCO)", team2: "FK Crvena Zvezda (SRB)", score1: 5, score2: 1 },
        { matchday: 3, date: "2024-10-22", team1: "AC Milan (ITA)", team2: "Club Brugge KV (BEL)", score1: 3, score2: 1 },
        { matchday: 3, date: "2024-10-22", team1: "Aston Villa FC (ENG)", team2: "Bologna FC 1909 (ITA)", score1: 2, score2: 0 },
        { matchday: 3, date: "2024-10-22", team1: "Girona FC (ESP)", team2: "ŠK Slovan Bratislava (SVK)", score1: 2, score2: 0 },
        { matchday: 3, date: "2024-10-22", team1: "SK Sturm Graz (AUT)", team2: "Sporting Clube de Portugal (POR)", score1: 0, score2: 2 },
        { matchday: 3, date: "2024-10-22", team1: "Paris Saint-Germain FC (FRA)", team2: "PSV (NED)", score1: 1, score2: 1 },
        { matchday: 3, date: "2024-10-22", team1: "Real Madrid CF (ESP)", team2: "Borussia Dortmund (GER)", score1: 5, score2: 2 },
        { matchday: 3, date: "2024-10-22", team1: "Arsenal FC (ENG)", team2: "FK Shakhtar Donetsk (UKR)", score1: 1, score2: 0 },
        { matchday: 3, date: "2024-10-22", team1: "Juventus FC (ITA)", team2: "VfB Stuttgart (GER)", score1: 0, score2: 1 },
        { matchday: 3, date: "2024-10-23", team1: "Stade Brestois 29 (FRA)", team2: "Bayer 04 Leverkusen (GER)", score1: 1, score2: 1 },
        { matchday: 3, date: "2024-10-23", team1: "Atalanta BC (ITA)", team2: "Celtic FC (SCO)", score1: 0, score2: 0 },
        { matchday: 3, date: "2024-10-23", team1: "BSC Young Boys (SUI)", team2: "FC Internazionale Milano (ITA)", score1: 0, score2: 1 },
        { matchday: 3, date: "2024-10-23", team1: "FC Barcelona (ESP)", team2: "FC Bayern München (GER)", score1: 4, score2: 1 },
        { matchday: 3, date: "2024-10-23", team1: "Manchester City FC (ENG)", team2: "AC Sparta Praha (CZE)", score1: 5, score2: 0 },
        { matchday: 3, date: "2024-10-23", team1: "RB Leipzig (GER)", team2: "Liverpool FC (ENG)", score1: 0, score2: 1 },
        { matchday: 3, date: "2024-10-23", team1: "Club Atlético de Madrid (ESP)", team2: "Lille OSC (FRA)", score1: 1, score2: 3 },
        { matchday: 3, date: "2024-10-23", team1: "Sport Lisboa e Benfica (POR)", team2: "Feyenoord Rotterdam (NED)", score1: 1, score2: 3 },
        { matchday: 3, date: "2024-10-23", team1: "FC Red Bull Salzburg (AUT)", team2: "GNK Dinamo Zagreb (CRO)", score1: 0, score2: 2 },
        // Matchday 4
        { matchday: 4, date: "2024-11-05", team1: "ŠK Slovan Bratislava (SVK)", team2: "GNK Dinamo Zagreb (CRO)", score1: 1, score2: 4 },
        { matchday: 4, date: "2024-11-05", team1: "PSV (NED)", team2: "Girona FC (ESP)", score1: 4, score2: 0 },
        { matchday: 4, date: "2024-11-05", team1: "Sporting Clube de Portugal (POR)", team2: "Manchester City FC (ENG)", score1: 4, score2: 1 },
        { matchday: 4, date: "2024-11-05", team1: "Bologna FC 1909 (ITA)", team2: "AS Monaco FC (MCO)", score1: 0, score2: 1 },
        { matchday: 4, date: "2024-11-05", team1: "Borussia Dortmund (GER)", team2: "SK Sturm Graz (AUT)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-05", team1: "Liverpool FC (ENG)", team2: "Bayer 04 Leverkusen (GER)", score1: 4, score2: 0 },
        { matchday: 4, date: "2024-11-05", team1: "Real Madrid CF (ESP)", team2: "AC Milan (ITA)", score1: 1, score2: 3 },
        { matchday: 4, date: "2024-11-05", team1: "Celtic FC (SCO)", team2: "RB Leipzig (GER)", score1: 3, score2: 1 },
        { matchday: 4, date: "2024-11-05", team1: "Lille OSC (FRA)", team2: "Juventus FC (ITA)", score1: 1, score2: 1 },
        { matchday: 4, date: "2024-11-06", team1: "Club Brugge KV (BEL)", team2: "Aston Villa FC (ENG)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-06", team1: "FK Shakhtar Donetsk (UKR)", team2: "BSC Young Boys (SUI)", score1: 2, score2: 1 },
        { matchday: 4, date: "2024-11-06", team1: "AC Sparta Praha (CZE)", team2: "Stade Brestois 29 (FRA)", score1: 1, score2: 2 },
        { matchday: 4, date: "2024-11-06", team1: "VfB Stuttgart (GER)", team2: "Atalanta BC (ITA)", score1: 0, score2: 2 },
        { matchday: 4, date: "2024-11-06", team1: "FC Bayern München (GER)", team2: "Sport Lisboa e Benfica (POR)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-06", team1: "FC Internazionale Milano (ITA)", team2: "Arsenal FC (ENG)", score1: 1, score2: 0 },
        { matchday: 4, date: "2024-11-06", team1: "Paris Saint-Germain FC (FRA)", team2: "Club Atlético de Madrid (ESP)", score1: 1, score2: 2 },
        { matchday: 4, date: "2024-11-06", team1: "Feyenoord Rotterdam (NED)", team2: "FC Red Bull Salzburg (AUT)", score1: 1, score2: 3 },
        { matchday: 4, date: "2024-11-06", team1: "FK Crvena Zvezda (SRB)", team2: "FC Barcelona (ESP)", score1: 2, score2: 5 },
        // Matchday 5
        { matchday: 5, date: "2024-11-26", team1: "ŠK Slovan Bratislava (SVK)", team2: "AC Milan (ITA)", score1: 2, score2: 3 },
        { matchday: 5, date: "2024-11-26", team1: "AC Sparta Praha (CZE)", team2: "Club Atlético de Madrid (ESP)", score1: 0, score2: 6 },
        { matchday: 5, date: "2024-11-26", team1: "Sporting Clube de Portugal (POR)", team2: "Arsenal FC (ENG)", score1: 1, score2: 5 },
        { matchday: 5, date: "2024-11-26", team1: "BSC Young Boys (SUI)", team2: "Atalanta BC (ITA)", score1: 1, score2: 6 },
        { matchday: 5, date: "2024-11-26", team1: "FC Bayern München (GER)", team2: "Paris Saint-Germain FC (FRA)", score1: 1, score2: 0 },
        { matchday: 5, date: "2024-11-26", team1: "FC Barcelona (ESP)", team2: "Stade Brestois 29 (FRA)", score1: 3, score2: 0 },
        { matchday: 5, date: "2024-11-26", team1: "FC Internazionale Milano (ITA)", team2: "RB Leipzig (GER)", score1: 1, score2: 0 },
        { matchday: 5, date: "2024-11-26", team1: "Manchester City FC (ENG)", team2: "Feyenoord Rotterdam (NED)", score1: 3, score2: 3 },
        { matchday: 5, date: "2024-11-26", team1: "Bayer 04 Leverkusen (GER)", team2: "FC Red Bull Salzburg (AUT)", score1: 5, score2: 0 },
        { matchday: 5, date: "2024-11-27", team1: "SK Sturm Graz (AUT)", team2: "Girona FC (ESP)", score1: 1, score2: 0 },
        { matchday: 5, date: "2024-11-27", team1: "FK Crvena Zvezda (SRB)", team2: "VfB Stuttgart (GER)", score1: 5, score2: 1 },
        { matchday: 5, date: "2024-11-27", team1: "AS Monaco FC (MCO)", team2: "Sport Lisboa e Benfica (POR)", score1: 2, score2: 3 },
        { matchday: 5, date: "2024-11-27", team1: "Aston Villa FC (ENG)", team2: "Juventus FC (ITA)", score1: 0, score2: 0 },
        { matchday: 5, date: "2024-11-27", team1: "Bologna FC 1909 (ITA)", team2: "Lille OSC (FRA)", score1: 1, score2: 2 },
        { matchday: 5, date: "2024-11-27", team1: "Liverpool FC (ENG)", team2: "Real Madrid CF (ESP)", score1: 2, score2: 0 },
        { matchday: 5, date: "2024-11-27", team1: "Celtic FC (SCO)", team2: "Club Brugge KV (BEL)", score1: 1, score2: 1 },
        { matchday: 5, date: "2024-11-27", team1: "GNK Dinamo Zagreb (CRO)", team2: "Borussia Dortmund (GER)", score1: 0, score2: 3 },
        { matchday: 5, date: "2024-11-27", team1: "PSV (NED)", team2: "FK Shakhtar Donetsk (UKR)", score1: 3, score2: 2 },
        // Matchday 6
        { matchday: 6, date: "2024-12-10", team1: "Girona FC (ESP)", team2: "Liverpool FC (ENG)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "GNK Dinamo Zagreb (CRO)", team2: "Celtic FC (SCO)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "Stade Brestois 29 (FRA)", team2: "PSV (NED)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "RB Leipzig (GER)", team2: "Aston Villa FC (ENG)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "Atalanta BC (ITA)", team2: "Real Madrid CF (ESP)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "Bayer 04 Leverkusen (GER)", team2: "FC Internazionale Milano (ITA)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "Club Brugge KV (BEL)", team2: "Sporting Clube de Portugal (POR)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "FK Shakhtar Donetsk (UKR)", team2: "FC Bayern München (GER)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-10", team1: "FC Red Bull Salzburg (AUT)", team2: "Paris Saint-Germain FC (FRA)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Club Atlético de Madrid (ESP)", team2: "ŠK Slovan Bratislava (SVK)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Lille OSC (FRA)", team2: "SK Sturm Graz (AUT)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "VfB Stuttgart (GER)", team2: "BSC Young Boys (SUI)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Borussia Dortmund (GER)", team2: "FC Barcelona (ESP)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "AC Milan (ITA)", team2: "FK Crvena Zvezda (SRB)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Sport Lisboa e Benfica (POR)", team2: "Bologna FC 1909 (ITA)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Arsenal FC (ENG)", team2: "AS Monaco FC (MCO)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Juventus FC (ITA)", team2: "Manchester City FC (ENG)", score1: null, score2: null },
        { matchday: 6, date: "2024-12-11", team1: "Feyenoord Rotterdam (NED)", team2: "AC Sparta Praha (CZE)", score1: null, score2: null },
        // Matchday 7
        { matchday: 7, date: "2024-01-21", team1: "AS Monaco FC (MCO)", team2: "Aston Villa FC (ENG)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "Atalanta BC (ITA)", team2: "SK Sturm Graz (AUT)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "Bologna FC 1909 (ITA)", team2: "Borussia Dortmund (GER)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "ŠK Slovan Bratislava (SVK)", team2: "VfB Stuttgart (GER)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "Liverpool FC (ENG)", team2: "Lille OSC (FRA)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "Club Atlético de Madrid (ESP)", team2: "Bayer 04 Leverkusen (GER)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "Sport Lisboa e Benfica (POR)", team2: "FC Barcelona (ESP)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "Club Brugge KV (BEL)", team2: "Juventus FC (ITA)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-21", team1: "FK Crvena Zvezda (SRB)", team2: "PSV (NED)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "RB Leipzig (GER)", team2: "Sporting Clube de Portugal (POR)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "FK Shakhtar Donetsk (UKR)", team2: "Stade Brestois 29 (FRA)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "AC Sparta Praha (CZE)", team2: "FC Internazionale Milano (ITA)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "Paris Saint-Germain FC (FRA)", team2: "Manchester City FC (ENG)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "Real Madrid CF (ESP)", team2: "FC Red Bull Salzburg (AUT)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "AC Milan (ITA)", team2: "Girona FC (ESP)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "Arsenal FC (ENG)", team2: "GNK Dinamo Zagreb (CRO)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "Celtic FC (SCO)", team2: "BSC Young Boys (SUI)", score1: null, score2: null },
        { matchday: 7, date: "2024-01-22", team1: "Feyenoord Rotterdam (NED)", team2: "FC Bayern München (GER)", score1: null, score2: null },
        // Matchday 8
        { matchday: 8, date: "2024-01-29", team1: "Sporting Clube de Portugal (POR)", team2: "Bologna FC 1909 (ITA)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "BSC Young Boys (SUI)", team2: "FK Crvena Zvezda (SRB)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Aston Villa FC (ENG)", team2: "Celtic FC (SCO)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Girona FC (ESP)", team2: "Arsenal FC (ENG)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Stade Brestois 29 (FRA)", team2: "Real Madrid CF (ESP)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "SK Sturm Graz (AUT)", team2: "RB Leipzig (GER)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "VfB Stuttgart (GER)", team2: "Paris Saint-Germain FC (FRA)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "FC Bayern München (GER)", team2: "ŠK Slovan Bratislava (SVK)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Borussia Dortmund (GER)", team2: "FK Shakhtar Donetsk (UKR)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "FC Barcelona (ESP)", team2: "Atalanta BC (ITA)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "FC Internazionale Milano (ITA)", team2: "AS Monaco FC (MCO)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Manchester City FC (ENG)", team2: "Club Brugge KV (BEL)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Bayer 04 Leverkusen (GER)", team2: "AC Sparta Praha (CZE)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Juventus FC (ITA)", team2: "Sport Lisboa e Benfica (POR)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "GNK Dinamo Zagreb (CRO)", team2: "AC Milan (ITA)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "Lille OSC (FRA)", team2: "Feyenoord Rotterdam (NED)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "PSV (NED)", team2: "Liverpool FC (ENG)", score1: null, score2: null },
        { matchday: 8, date: "2024-01-29", team1: "FC Red Bull Salzburg (AUT)", team2: "Club Atlético de Madrid (ESP)", score1: null, score2: null }
    ];

    const matchdays = {};

    fixtures.forEach(fixture => {
        if (!matchdays[fixture.matchday]) {
            matchdays[fixture.matchday] = [];
        }
        matchdays[fixture.matchday].push(fixture);
    });

    Object.keys(matchdays).forEach(matchday => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "matchday";
        const button = document.createElement("button");
        button.innerText = `Matchday ${matchday}`;
        button.className = 'matchday-button';

        const fixtureContainer = document.createElement("div");
        fixtureContainer.style.display = 'none';

        button.addEventListener("click", function() {
            fixtureContainer.style.display = fixtureContainer.style.display === 'none' ? 'block' : 'none';
        });

        dayDiv.appendChild(button);

        matchdays[matchday].forEach(fixture => {
            createFixture(fixture.team1, fixture.team2, fixture.date, fixture.score1, fixture.score2, fixtureContainer);
        });

        dayDiv.appendChild(fixtureContainer);
        fixturesDiv.appendChild(dayDiv);
    });

    function createFixture(team1, team2, date, score1, score2, parentDiv) {
        const fixture = document.createElement("div");
        fixture.className = "fixture fade-in";  // Added fade-in class
    
        fixture.innerHTML = `
            <div class="fixture-date">${date}</div>
            <div class="team-name">${team1}</div>
            <div class="score-inputs">
                <input type="number" min="0" class="team1-score" data-team="${team1}" value="${score1 !== null ? score1 : ''}">
                -
                <input type="number" min="0" class="team2-score" data-team="${team2}" value="${score2 !== null ? score2 : ''}">
            </div>
            <div class="team-name">${team2}</div>
        `;
    
        parentDiv.appendChild(fixture);
    }

    function removeFixture(element) {
        element.classList.add("fade-out");
        setTimeout(() => {
            element.remove();
        }, 500); // Match the duration of the fadeOut animation
    }
    
    

    function resetTeams() {
        teamNames.forEach(team => {
            teams[team] = {
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                awayGoals: 0,
                awayWins: 0,
                points: 0
            };
        });
    }

    function recountStats() {
        resetTeams();
        fixtures.forEach(fixture => {
            if (fixture.score1 !== null && fixture.score2 !== null) {
                updateTeamStats(fixture.team1, fixture.team2, fixture.score1, fixture.score2, fixture.date);
                updateTeamStats(fixture.team2, fixture.team1, fixture.score2, fixture.score1, fixture.date);
            }
        });
    }

    function updateTeamStats(team, opponent, goalsFor, goalsAgainst, date) {
        teams[team].played += 1;
        teams[team].goalsFor += goalsFor;
        teams[team].goalsAgainst += goalsAgainst;

        const isAwayGame = (teams[team].played + teams[opponent].played) % 2 === 0;

        if (goalsFor > goalsAgainst) {
            teams[team].won += 1;
            teams[team].points += 3;
            if (isAwayGame) {
                teams[team].awayWins += 1;
            }
        } else if (goalsFor === goalsAgainst) {
            teams[team].drawn += 1;
            teams[team].points += 1;
        } else {
            teams[team].lost += 1;
        }

        if (isAwayGame) {
            teams[team].awayGoals += goalsFor;
        }
    }

    function updatePointsTable() {
        pointsTable.innerHTML = "";
        const sortedTeams = Object.entries(teams).sort((a, b) => 
            b[1].points - a[1].points || // Points
            (b[1].goalsFor - b[1].goalsAgainst) - (a[1].goalsFor - a[1].goalsAgainst) || // Goal difference
            b[1].goalsFor - a[1].goalsFor || // Goals scored
            b[1].awayGoals - a[1].awayGoals || // Away goals scored
            b[1].won - a[1].won || // Wins
            b[1].awayWins - a[1].awayWins // Away wins
        );
    
        sortedTeams.forEach((team, index) => {
            const row = pointsTable.insertRow();
            row.className = index < 8 ? 'top8 table-row-update' : index < 24 ? 'mid8 table-row-update' : 'bottom4 table-row-update'; // Apply classes based on rank
    
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = team[0];
            row.insertCell(2).innerText = team[1].played;
            row.insertCell(3).innerText = team[1].won;
            row.insertCell(4).innerText = team[1].drawn;
            row.insertCell(5).innerText = team[1].lost;
            row.insertCell(6).innerText = team[1].goalsFor;
            row.insertCell(7).innerText = team[1].goalsAgainst;
            row.insertCell(8).innerText = team[1].goalsFor - team[1].goalsAgainst;
            row.insertCell(9).innerText = team[1].points;
        });
    
        // Remove the animation class after the animation ends
        setTimeout(() => {
            document.querySelectorAll('.table-row-update').forEach(row => {
                row.classList.remove('table-row-update');
            });
        }, 1000); // Animation duration time
    }
    
    

    document.addEventListener("change", function(event) {
        if (event.target.classList.contains("team1-score") || event.target.classList.contains("team2-score")) {
            const fixtureDiv = event.target.closest(".fixture");
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = parseInt(fixtureDiv.querySelector(".team1-score").value) || 0;
            const score2 = parseInt(fixtureDiv.querySelector(".team2-score").value) || 0;

            // Update fixture scores
            fixtures.forEach(fixture => {
                if (fixture.team1 === team1 && fixture.team2 === team2) {
                    fixture.score1 = score1;
                    fixture.score2 = score2;
                }
            });

            // Recount stats and update points table
            recountStats();
            updatePointsTable();
        }
    });



    
    function saveData() {
        console.log("Saving data...");
        const userInputs = fixtures.map(fixture => ({
            team1: fixture.team1,
            team2: fixture.team2,
            score1: fixture.score1,
            score2: fixture.score2,
            userModified: fixture.userModified || false
        }));
        localStorage.setItem('userInputs', JSON.stringify(userInputs));
    }

    function loadData() {
        const savedInputs = localStorage.getItem('userInputs');
        if (savedInputs) {
            const parsedInputs = JSON.parse(savedInputs);
            parsedInputs.forEach((savedFixture, index) => {
                const fixture = fixtures.find(f => f.team1 === savedFixture.team1 && f.team2 === savedFixture.team2);
                if (fixture) {
                    fixture.score1 = savedFixture.score1;
                    fixture.score2 = savedFixture.score2;
                }
            });

            // Apply saved inputs to input fields
            document.querySelectorAll('.fixture').forEach(fixtureDiv => {
                const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
                const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
                const fixture = fixtures.find(f => f.team1 === team1 && f.team2 === team2);
                if (fixture) {
                    const score1Input = fixtureDiv.querySelector(".team1-score");
                    const score2Input = fixtureDiv.querySelector(".team2-score");
                    score1Input.value = fixture.score1 !== null ? fixture.score1 : '';
                    score2Input.value = fixture.score2 !== null ? fixture.score2 : '';
                }
            });
        }
    }

    function resetData() {
        console.log("Resetting data...");
        localStorage.removeItem('userInputs');
        fixtures.forEach(fixture => {
            if (fixture.userModified) {
                fixture.score1 = null;
                fixture.score2 = null;
                fixture.userModified = false;
            }
        });
        document.querySelectorAll('.team1-score, .team2-score').forEach(input => {
            if (!input.readOnly) {
                input.value = '';
            }
        });
        recountStats();
        updatePointsTable();
    }

    document.getElementById('resetButton').addEventListener('click', resetData);

    document.addEventListener("change", function(event) {
        if (event.target.classList.contains("team1-score") || event.target.classList.contains("team2-score")) {
            const fixtureDiv = event.target.closest(".fixture");
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = parseInt(fixtureDiv.querySelector(".team1-score").value);
            const score2 = parseInt(fixtureDiv.querySelector(".team2-score").value);

            if (!isNaN(score1) && !isNaN(score2)) {
                // Update fixture scores
                fixtures.forEach(fixture => {
                    if (fixture.team1 === team1 && fixture.team2 === team2) {
                        fixture.score1 = score1;
                        fixture.score2 = score2;
                        fixture.userModified = true; // Mark as user modified
                    }
                });

                // Recount stats and update points table
                recountStats();
                updatePointsTable();
                saveData(); // Save data after every change
            }
        }
    });
    
    function convertToCSV(data) {
        const csvRows = [];
        const headers = ["Position", "Team", "Played", "Won", "Drawn", "Lost", "Goals For", "Goals Against", "Goal Difference", "Points"];
        csvRows.push(headers.join(","));
    
        data.forEach((row, index) => {
            const values = [
                index + 1,
                row[0],
                row[1].played,
                row[1].won,
                row[1].drawn,
                row[1].lost,
                row[1].goalsFor,
                row[1].goalsAgainst,
                row[1].goalsFor - row[1].goalsAgainst,
                row[1].points
            ];
            csvRows.push(values.join(","));
        });
    
        return csvRows.join("\n");
    }
    
    function downloadCSV(data) {
        const csvData = convertToCSV(data);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'champions_league_predictions.csv');
        a.click();
    }
    
    document.getElementById('exportCSVButton').addEventListener('click', () => {
        const sortedTeams = Object.entries(teams).sort((a, b) => 
            b[1].points - a[1].points ||
            (b[1].goalsFor - b[1].goalsAgainst) - (a[1].goalsFor - a[1].goalsAgainst) ||
            b[1].goalsFor - a[1].goalsFor ||
            b[1].awayGoals - a[1].awayGoals ||
            b[1].won - a[1].won ||
            b[1].awayWins - a[1].awayWins
        );
    
        downloadCSV(sortedTeams);
    });
    
    loadData(); // Load data on page load
    recountStats();
    updatePointsTable();

    const { jsPDF } = window.jspdf;

    function exportToPDF() {
        console.log("Export to PDF function triggered");
        const doc = new jsPDF();

        let y = 10;
        doc.setFontSize(18);
        doc.text("UEFA Champions League Predictor", 105, y, null, null, "center");
        y += 10;

        doc.setFontSize(14);
        doc.text("Fixtures", 105, y, null, null, "center");
        y += 10;

        document.querySelectorAll('.fixture').forEach(fixtureDiv => {
            const team1 = fixtureDiv.querySelector(".team1-score").dataset.team;
            const team2 = fixtureDiv.querySelector(".team2-score").dataset.team;
            const score1 = fixtureDiv.querySelector(".team1-score").value || '-';
            const score2 = fixtureDiv.querySelector(".team2-score").value || '-';
            const date = fixtureDiv.querySelector(".fixture-date").innerText;

            doc.setFontSize(12);
            doc.text(`${date}: ${team1} ${score1} - ${score2} ${team2}`, 10, y);
            y += 10;
        });

        y += 10;
        doc.setFontSize(14);
        doc.text("Points Table", 105, y, null, null, "center");
        y += 10;

        const tableBody = Array.from(document.querySelectorAll('#pointsTable tbody tr')).map(row => 
            Array.from(row.cells).map(cell => cell.innerText)
        );
        
        doc.autoTable({
            startY: y,
            head: [['Position', 'Team', 'Played', 'Won', 'Drawn', 'Lost', 'Goals For', 'Goals Against', 'Goal Difference', 'Points']],
            body: tableBody
        });

        doc.save('ChampionsLeaguePredictions.pdf');
    }

    document.getElementById('exportPDFButton').addEventListener('click', exportToPDF);


});
