import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}

const mapStateProps = state => ({
   guessCount: state.guesses.length
});

export default connect(mapStateProps)(GuessCount);