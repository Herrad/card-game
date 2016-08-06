describe('Given I have a rule that says only 10s can be played', () => {
    const rule = {
        value: 10,
        match: 'equal'
    };
    describe('When I play a 10 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Spades'});
        it('Then the card is played', () => {
            expect(result.played).to.equal(true);
        })
    })
    describe('When I play a 5 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 5, suit: 'Spades'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
});

describe('Given I have a rule that says only 6s can be played', () => {
    const rule = {
        value: 6,
        match: 'equal'
    };
    describe('When I play a 10 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Spades'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
    describe('When I play a 6 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 6, suit: 'Spades'});
        it('Then the card is played', () => {
            expect(result.played).to.equal(true);
        })
    })
})

describe('Given I have a rule that says only spades can be played', () => {
    const rule = {
        suit: "Spades",
        match: 'equal'
    };
    describe('When I play a 10 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Spades'});
        it('Then the card is played', () => {
            expect(result.played).to.equal(true);
        })
    });
    describe('When I play a 10 of clubs', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Clubs'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
})

describe('Given I have a rule that says only the 10 of spades can be played', () => {
    const rule = {
        value: 10,
        suit: "Spades",
        match: 'equal'
    };
    describe('When I play a 10 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Spades'});
        it('Then the card is played', () => {
            expect(result.played).to.equal(true);
        })
    });
    describe('When I play a 10 of clubs', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Clubs'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
    describe('When I play a 4 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 4, suit: 'Spades'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
    describe('When I play a 4 of clubs', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 4, suit: 'Spades'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    })
})

describe('Given I have a rule that says anything but spades can be played', () => {
    const rule = {
        suit: "Spades",
        match: 'not'
    };
    describe('When I play a 10 of spades', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Spades'});
        it('Then the card is not played', () => {
            expect(result.played).to.equal(false);
        })
    });
    describe('When I play a 10 of clubs', () => {
        const engine = createRulesEngine(rule);
        const result = engine.play({value: 10, suit: 'Clubs'});
        it('Then the card is played', () => {
            expect(result.played).to.equal(true);
        })
    })
})

// describe('Given I have a rule that says anything but 7s can be played', () => {
//     const rule = {
//         value: 7,
//         match: 'not'
//     };
//     describe('When I play a 10 of spades', () => {
//         const engine = createRulesEngine(rule);
//         const result = engine.play({value: 10, suit: 'Spades'});
//         it('Then the card is not played', () => {
//             expect(result.played).to.equal(false);
//         })
//     });
//     describe('When I play a 7 of spades', () => {
//         const engine = createRulesEngine(rule);
//         const result = engine.play({value: 7, suit: 'Clubs'});
//         it('Then the card is played', () => {
//             expect(result.played).to.equal(true);
//         })
//     })
// })
