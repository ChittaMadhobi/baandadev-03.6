import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Openness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnOpenClickNo: '',
      scaleValue1: 5,
      scaleValue2: 5,
      scaleValue3: 5,
      scaleValue4: 5,
      scaleValue5: 5,
      scaleValue6: 5
    };

    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick(e) {
    //console.log('btnOpenClickNo:' + e.target.id);
    this.setState({
      btnOpenClickNo: e.target.id
    });
  }

  handleOnChange1 = value => {
    this.setState({
      scaleValue1: value
    });
  };

  handleOnChange2 = value => {
    this.setState({
      scaleValue2: value
    });
  };

  handleOnChange3 = value => {
    this.setState({
      scaleValue3: value
    });
  };

  handleOnChange4 = value => {
    this.setState({
      scaleValue4: value
    });
  };

  handleOnChange5 = value => {
    this.setState({
      scaleValue5: value
    });
  };

  handleOnChange6 = value => {
    this.setState({
      scaleValue6: value
    });
  };

  render() {
    const { btnOpenClickNo } = this.state;

    let opennessAns1 = null;
    let opennessAns2 = null;
    let opennessAns3 = null;
    let opennessAns4 = null;
    let opennessAns5 = null;
    let opennessAns6 = null;

    // Imagination
    if (btnOpenClickNo === '1') {
      opennessAns1 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Imagination &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue1}</font>
                </strong>
                <br />
                Can you picture something you have not seen before or hear music
                that has never been played? Can you tell a story no one has ever 
                heard? Have you walked outside your known world in your thoughts? 
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue1}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange1}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      opennessAns1 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '2') {
      opennessAns2 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Artistic &nbsp; || &nbsp; Use slider to mark your
                  scoree: &nbsp;
                  <font color="blue">{this.state.scaleValue2}</font>
                </strong>
                <br />
                Do you desire to create something from your imaginary world to
                share with others? Do you paint, compose music, or cook
                something you made up? If you do, then you're an artist.
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue2}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange2}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      opennessAns2 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '3') {
      opennessAns3 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Emotionality &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue3}</font>
                </strong>
                <br />
                Do you react with strong emotionality to something ... like cry
                in a movie, feel celebratory joy in beauty, or overreact
                to stressful or emotional situations? If you are calm and
                self-assured in stress, then you have low emotionality.
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue3}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange3}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      opennessAns3 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '4') {
      opennessAns4 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Adventurousness &nbsp; || &nbsp; Use slider to mark your
                  score: &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
                <br />
                Do you get a thrill when you have to travel somewhere unknown? 
                Do you take on tasks that you don't know anything about? Do people call 
                you audacious, daring, venturesome ... or irresponsible from
                a practical point of view? If yes, then you are adventurous.
                <strong>
                  {' '}
                  Scale Value: &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue4}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange4}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      opennessAns4 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '5') {
      opennessAns5 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Intellect &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue5}</font>
                </strong>
                <div>
                  Intellect is the ability to reason and understand objectively,
                  especially on academic matters. If you exercise intellect at
                  the expense of emotion, or if you get emotionally charged up by
                  intellectual exercises then score yourself high on intellect.
                </div>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue5}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange5}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      opennessAns5 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '6') {
      opennessAns6 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Liberalism &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue6}</font>
                </strong>
                <div>
                  Liberalism, in political terms, is the belief that it is the 
                  government's job to protect and enhance the freedom of individuals. 
                  In general, liberals are open to newness and conservatives feel a 
                  strong pull towards traditional and long-established ideas and beliefs.
                </div>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue6}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange6}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      opennessAns6 = null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <button
              id="1"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              How imaginative are you?
            </button>
            {opennessAns1}

            <button
              id="2"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              What is the measurement of your artistic interests?
            </button>
            {opennessAns2}
            <button
              id="3"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              How emotional are you?
            </button>
            {opennessAns3}
            <button
              id="4"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              How bold is your adventurous spirit?
            </button>
            {opennessAns4}
            <button
              id="5"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              How much do you enjoy intellectualism?
            </button>
            {opennessAns5}
            <button
              id="6"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you a liberal person? How would you measure your liberalism?
            </button>
            {opennessAns6}
          </div>
        </div>
      </div>
    );
  }
}

export default Openness;
