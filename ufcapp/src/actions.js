export function mapStateToProps(state) {
    return {
        competitions: state.data.competitions,
        rankings: state.data.rankings,
        upcomingevents: state.data.upcomingevents,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        loadCompetitions: function (){
        fetch(`http://localhost:3333/api/competitions/`)
        .then((res) => res.json())
        .then((data) => dispatch({type: "LOAD_COMPETITIONS", competitions: data.competitions}))
        },
        loadRankings: function (){
        fetch(`http://localhost:3333/api/rankings/`)
        .then((res) => res.json())
        .then((data) => dispatch({type: "LOAD_RANKINGS", rankings: data.rankings}))
        },
    }
}
