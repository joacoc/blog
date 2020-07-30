import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './styles.css';

class textoPrincipal extends React.Component{
  renderBotones(i){
    return<botones value={i}/>;
  }
}

class botones extends React.Component{
  render(){
    return(
      <Button variant="contained" color="secondary">
        {this.props.value}
      </Button>
    );
  }
}

function App() {
  return (<>
<header>
    <h1> Falling in the real-time trap </h1>
    <h2> The behind the scenes in the streaming data world. </h2>
</header>

<body>
    <div className="MainText">
        <p>
              As far as we know. Streaming is gaining popularity since a few years ago.<br/><br/> [Tweet link to Confluence CEO].<br/><br/> Streaming is in hype. There is no doubt of that. The research industry has been talking about it for years. Just take a look to any new streaming paper and their intro is the same “[The industry is going stream because [insert reason] and goes on]”<br/><br/> That’s nothing new. Behind every mountain of hype there is another mountain of true. But how far are we from real time insights? Why we are stuck in near-real time? Why we can’t do real real-time? Where are the limitations of Real Time Streaming? Do we need Real real time in Analytics? <br/><br/>First of all for anyone who needs needs to understand how the underlaying mechanics for the streaming engines works you can take a look at this links. And if you want to have a better undestanding distributed processing papers and how batch windowing works in SQL helps too (Clickhouse Windowing blocks)<br/><br/> OR <br/><br/>First of all we need to understand how the underlaying structure of the streaming or old SQL did the windowings aggregations.<br/> Let’s start with that. <br/><br/> <a href="https://flink.apache.org/news/2015/12/04/Introducing-windows.html">Introducing windows</a><br/><br/> <a href="https://arxiv.org/pdf/1802.08496.pdf"> Distributed Stream Data Processing Systems</a><br/><br/> <a href="https://openproceedings.org/2019/conf/edbt/EDBT19_paper_171.pdf">Efficient Window Aggregation with General Stream Slicing</a> tuple-at-a-time processing model(e.g., Apache Storm, Apache Flink, and other Apache Beam-based systems). <br/><br/> There are different processing models used by these frameworks. There is the tuple-at-a-time processing model used primarly by Apache Storm / Apache Flink / Apache Beam Akka Streaming and the there is Apache Spark that use RDD’s and it’s micro-batches aggregation techniques such as B-Int [3], Pairs [28], Panes [30], RA [42] and Cutty [10]. <br/><br/> These techniques compute partial aggregates for overlapping parts of windows and reuse these partial aggregates to compute final aggregates for overlapping windows. These intermediate results are shared among overlapping windows to prevent repeated computation [3, 28, 51] <br/><br/> <a href="https://ieeexplore.ieee.org/document/7530084">Benchmarking Streaming Computation Engines</a><br/><br/> <a href="https://github.com/yahoo/streaming-benchmarks">Streaming benchmarks</a><br/><br/><a href="https://www.slideshare.net/gschmutz/spark-structured-streaming-vs-kafka-streams-two-stream-processing-platforms-compared-95628104">Two processing platforms compared</a> real-time, vs near-real-time vs batch <br/><br/> <a href="https://docs.confluent.io/current/streams/developer-guide/dsl-api.html#hopping-time-windows">Stream DSL</a><br/><br/> if the backend catches every 1 second do I need 100ms sliding? Why the use of Apache Kafka? Backpressure!!!<br/><br/> <a href="https://databricks.com/blog/2015/07/30/diving-into-apache-spark-streamings-execution-model.html">Apache spark streaming execution model</a>         
          </p>
    </div>
    <div className="botones">
      <div className="Volver">
        <Button variant="contained" color="secondary" onClick={() => alert('tengo que ir atras')}>Anterior</Button>
      </div>
      <div className="Siguiente">
        <Button variant="contained" color="primary" onClick={() => alert('tengo que ir adelante')}>Siguiente</Button>
      </div>
    </div>
</body>
  </>);
 
}

export default App;
