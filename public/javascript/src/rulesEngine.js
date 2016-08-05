function createRulesEngine() {
    return {
        play: function(card) {
            if(card.value !== 10) return { played: false };
            return {played: true};
        }
    }
}
