function createRulesEngine(rule) {

    return {
        play: function(card) {
            if(card.value !== rule.value) return { played: false };
            return {played: true};
        }
    }
}
