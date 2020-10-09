import React,{useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../actions';
import Rankings from "../components/rankings";

function Aranking(props) {
  const [] = useState(null);
  useEffect(() => {
    props.loadRankings(props.rankings);
    return () => {

    }
  }, [props.match.params.rankings])

    return <Rankings />;
  }
  
  const RankingRoute = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Aranking)
  );
  
  export default RankingRoute;