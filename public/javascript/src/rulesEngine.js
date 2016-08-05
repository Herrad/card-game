function createRulesEngine(rule) {

    return {
        play: function(card) {
            if(rule.value && card.value !== rule.value) return { played: false };
            if(rule.suit && card.suit !== rule.suit) return { played: false };
            return {played: true};
        }
    }
}
