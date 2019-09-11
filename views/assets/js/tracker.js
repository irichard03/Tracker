
$(document).ready( function(){
    //refresh dropdown
    getBattles();
    getAbilities();
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


//get battles from Mongo database
function getBattles(){
    $.ajax({
        url: '/api/battles',
        type: 'GET',
        dataType: "json",
        success: (data) => {
            for(let i = 0; i < data.length; i++){
                $('#battleSelect').append(`<option value='${data[i].name}'>${data[i].name}</option>`);
                //$('#battleSelect').append(`<li data-target='${data[i].name}'>${data[i].name}</li>`);
            }
            $('select').formSelect();
        },
        error: (data) => {
            alert("Error: " + data);
        }
    });
}

function getAbilities(){
    $.ajax({
        url: '/api/abilities',
        type: 'GET',
        dataType: "json",
        success: (data) => {
            for(let i = 0; i < data.length; i++){
                $('#abilityTable').append(`
                    <div class="row">
                    <div class="center-align col s2">
                        <p>${data[i].name}</p>
                    </div>
                    <div class="center-align col s2">
                        <p>${data[i].hero}</p>
                    </div>
                    <div class="center-align col s4">
                        <p>${data[i].description}</p>
                    </div>
                    <div class="center-align col s2">
                        <p>${data[i].range}</p>
                    </div>
                    <div class="center-align col s2">
                        <p>${data[i].phase}</p>
                    </div>
                `);
            }
        },
        error: (data) => {
            alert("Error: " + data);
        }
    });
}