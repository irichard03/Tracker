$(document).ready( function(){
    //refresh dropdown
    getBattles();
    /**
    let game = {
        phase : {
            name: ['Setup', 'Hero', 'Movement', 'Charge', 'Combat', 'Battleshock'],
            when: ['start', 'end']
        },
        round: 0,
        battle: ['Blood and Glory','Escalation','Border War', 'Three Places of Power', 'Gifts from the Heavens',
            'Take and Hold', 'Knife to the Heart', 'Total Conquest', 'Duality of Death', 'Battle for the Pass',
            'Starstrike', 'Scorched Earth', 'Total Commitment', 'Focal Points', 'The Better Part of Valuour',
            'Shifting Objectives', 'Places of Arcane Power', 'The Relocation Orb'],
        players: [],
    };
    */
});

$('.dropdown-trigger').dropdown();

//get battles from Mongo database
function getBattles(){
    $.ajax({
        url: '/api/battles',
        type: 'GET',
        dataType: "json",
        success: (data) => {
            for(let i = 0; i < data.length; i++){
                $('.dropdown-content').append(`<li><a href='#!'>${data[i].name}</a></li>`);
            }
            

        },
        error: (data) => {
            alert("Error: " + data);
        }
    });
}