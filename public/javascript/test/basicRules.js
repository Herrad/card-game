describe('Given I have a rule that says only 10s can be played', () => {
    const rules = [{
        value: 10,
        match: true
    }]
    describe('When I play a 10 of spades', () => {
        const engine = createRulesEngine(rules);
        const result = engine.play({value: 10, suit: 'Spades'});
        it('Then the card is played', () => {
            expect(result.played).to.equal(true);
        })
    })
    describe('When I play a 5 of spades', () => {
        const engine = createRulesEngine(rules);
        const result = engine.play({value: 5, suit: 'Spades'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
})
