function submitCreatePlayerForm() {
    event.preventDefault();
    const isNotifyMessageHidden = $("div.notify-msg").hasClass('hidden-msg');
    if (!isNotifyMessageHidden) {
        $("div.notify-msg").addClass('hidden-msg');
    }
    const playerName = $('#player-name').val();
    if (playerName === "") {
        $("div.notify-msg").removeClass('hidden-msg');
        return
    }
    const playerWins = $('#player-wins').val();
    const playerDraws = $('#player-draws').val();
    const playerLosses = $('#player-losses').val();
    postPlayerInformation(playerName, playerWins, playerDraws, playerLosses);
    console.log('Create Player');
}


function postPlayerInformation(playerName, playerWins, playerDraws, playerLosses) {
    $.ajax({
        async: false,
        type: "post",
        url: window.location.origin + '/players/setPlayerInformation',
        data: JSON.stringify({
            'jsonrpc': "2.0",
            'method': "call",
            "params": {
                'name': playerName,
                'wins': playerWins,
                'draws': playerDraws,
                'losses': playerLosses,
            }
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            if (response.result) {
                window.location.href = '/players';
            }
        }
    });
}
