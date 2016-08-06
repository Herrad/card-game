function createRulesEngine(rule) {
    const operators = {
        "equal": card => (!rule.suit || card.suit === rule.suit) && (!rule.value || card.value === rule.value),
        "not": card => (!rule.suit || card.suit !== rule.suit) && (!rule.value || card.value !== rule.value)
    }

    return {
        play: function(card) {
            return {played: operators[rule.match](card)};
        }
    }
}
