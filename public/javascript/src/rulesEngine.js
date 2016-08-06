function createRulesEngine(rule) {
    const operators = {
        "equal": card => (!rule.suit || card.suit === rule.suit) && (!rule.value || card.value === rule.value),
        "not": card => (!rule.suit || card.suit !== rule.suit) && (!rule.value || card.value !== rule.value),
        ">": card => (!rule.suit || card.suit === rule.suit) && (!rule.value || card.value > rule.value),
        ">=": card => (!rule.suit || card.suit === rule.suit) && (!rule.value || card.value >= rule.value),
        "<": card => (!rule.suit || card.suit === rule.suit) && (!rule.value || card.value < rule.value),
        "<=": card => (!rule.suit || card.suit === rule.suit) && (!rule.value || card.value <= rule.value)
    }

    return {
        play: function(card) {
            if(!operators[rule.match]) return {played:false};
            return {played: operators[rule.match](card)};
        }
    }
}
