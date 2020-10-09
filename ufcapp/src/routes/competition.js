import React,{useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../actions';
import Competitions from "../components/competition";

function Acompetition(props) {
  const [] = useState(null);
  useEffect(() => {
    props.loadCompetitions(props.competitions);
    return () => {

    }
  }, [props.match.params.competitions])

    return <Competitions />;
  }
  
  const CompetitionRoute = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Acompetition)
  );
  
  export default CompetitionRoute;