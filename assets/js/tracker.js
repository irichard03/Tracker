$(document).ready( function(){
    
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
        players: []
    };

    $('#selectedBattle').text(game.battle[0]);
    $('.dropdown-trigger').dropdown();
    
});
