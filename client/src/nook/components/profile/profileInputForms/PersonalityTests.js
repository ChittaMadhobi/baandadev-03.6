import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class PersonalityTests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnOpenClickNo: '',
      q1: 5,
      q2: 5,
      q3: 5,
      q4: 5,
      q5: 5,
      q6: 5,
      q7: 5,
      q8: 5,
      q9: 5,
      q10: 5,
      q11: 5,
      q12: 5,
      q13: 5,
      q14: 5,
      q15: 5,
      q16: 5,
      q17: 5,
      q18: 5,
      q19: 5,
      q20: 5,
      q21: 5,
      q22: 5,
      q23: 5,
      q24: 5,
      q25: 5,
      q26: 5,
      q27: 5,
      q28: 5,
      q29: 5,
      q30: 5,
      q31: 5,
      q32: 5,
      q33: 5,
      q34: 5,
      q35: 5,
      q36: 5,
      q37: 5,
      q38: 5,
      q39: 5,
      q40: 5,
      q41: 5,
      q42: 5,
      q43: 5,
      q44: 5,
      q45: 5,
      q46: 5,
      q47: 5,
      q48: 5,
      q49: 5,
      q50: 5,
      q51: 5,
      q52: 5,
      q53: 5,
      q54: 5,
      q55: 5,
      q56: 5,
      q57: 5,
      q58: 5,
      q59: 5,
      q60: 5
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
      q1: value
    });
  };
  handleOnChange2 = value => {
    this.setState({
      q2: value
    });
  };
  handleOnChange3 = value => {
    this.setState({
      q3: value
    });
  };
  handleOnChange4 = value => {
    this.setState({
      q4: value
    });
  };
  handleOnChange5 = value => {
    this.setState({
      q5: value
    });
  };
  handleOnChange6 = value => {
    this.setState({
      q6: value
    });
  };
  handleOnChange7 = value => {
    this.setState({
      q7: value
    });
  };
  handleOnChange8 = value => {
    this.setState({
      q8: value
    });
  };
  handleOnChange9 = value => {
    this.setState({
      q9: value
    });
  };
  handleOnChange10 = value => {
    this.setState({
      q10: value
    });
  };
  handleOnChange11 = value => {
    this.setState({
      q11: value
    });
  };
  handleOnChange12 = value => {
    this.setState({
      q12: value
    });
  };
  handleOnChange13 = value => {
    this.setState({
      q13: value
    });
  };
  handleOnChange14 = value => {
    this.setState({
      q14: value
    });
  };
  handleOnChange15 = value => {
    this.setState({
      q15: value
    });
  };
  handleOnChange16 = value => {
    this.setState({
      q16: value
    });
  };
  handleOnChange17 = value => {
    this.setState({
      q17: value
    });
  };
  handleOnChange18 = value => {
    this.setState({
      q18: value
    });
  };
  handleOnChange19 = value => {
    this.setState({
      q19: value
    });
  };
  handleOnChange20 = value => {
    this.setState({
      q20: value
    });
  };
  handleOnChange21 = value => {
    this.setState({
      q21: value
    });
  };
  handleOnChange22 = value => {
    this.setState({
      q22: value
    });
  };
  handleOnChange23 = value => {
    this.setState({
      q23: value
    });
  };
  handleOnChange24 = value => {
    this.setState({
      q24: value
    });
  };
  handleOnChange25 = value => {
    this.setState({
      q25: value
    });
  };
  handleOnChange26 = value => {
    this.setState({
      q26: value
    });
  };
  handleOnChange27 = value => {
    this.setState({
      q27: value
    });
  };
  handleOnChange28 = value => {
    this.setState({
      q28: value
    });
  };
  handleOnChange29 = value => {
    this.setState({
      q29: value
    });
  };
  handleOnChange30 = value => {
    this.setState({
      q30: value
    });
  };
  handleOnChange31 = value => {
    this.setState({
      q31: value
    });
  };
  handleOnChange32 = value => {
    this.setState({
      q32: value
    });
  };
  handleOnChange33 = value => {
    this.setState({
      q33: value
    });
  };
  handleOnChange34 = value => {
    this.setState({
      q34: value
    });
  };
  handleOnChange35 = value => {
    this.setState({
      q35: value
    });
  };
  handleOnChange36 = value => {
    this.setState({
      q36: value
    });
  };
  handleOnChange37 = value => {
    this.setState({
      q37: value
    });
  };
  handleOnChange38 = value => {
    this.setState({
      q38: value
    });
  };
  handleOnChange39 = value => {
    this.setState({
      q39: value
    });
  };
  handleOnChange40 = value => {
    this.setState({
      q40: value
    });
  };
  handleOnChange41 = value => {
    this.setState({
      q41: value
    });
  };
  handleOnChange42 = value => {
    this.setState({
      q42: value
    });
  };
  handleOnChange43 = value => {
    this.setState({
      q43: value
    });
  };
  handleOnChange44 = value => {
    this.setState({
      q44: value
    });
  };
  handleOnChange45 = value => {
    this.setState({
      q45: value
    });
  };
  handleOnChange46 = value => {
    this.setState({
      q46: value
    });
  };
  handleOnChange47 = value => {
    this.setState({
      q47: value
    });
  };
  handleOnChange48 = value => {
    this.setState({
      q48: value
    });
  };
  handleOnChange49 = value => {
    this.setState({
      q49: value
    });
  };
  handleOnChange50 = value => {
    this.setState({
      q50: value
    });
  };
  handleOnChange51 = value => {
    this.setState({
      q51: value
    });
  };
  handleOnChange52 = value => {
    this.setState({
      q52: value
    });
  };
  handleOnChange53 = value => {
    this.setState({
      q53: value
    });
  };
  handleOnChange54 = value => {
    this.setState({
      q54: value
    });
  };
  handleOnChange55 = value => {
    this.setState({
      q55: value
    });
  };
  handleOnChange56 = value => {
    this.setState({
      q56: value
    });
  };
  handleOnChange57 = value => {
    this.setState({
      q57: value
    });
  };
  handleOnChange58 = value => {
    this.setState({
      q58: value
    });
  };
  handleOnChange59 = value => {
    this.setState({
      q59: value
    });
  };
  handleOnChange60 = value => {
    this.setState({
      q60: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Personality Test - Big-Five</h3>
          Please answer the questions below using slide-rules to evaluate your
          reflective big-five traits.
          <p>
            <font color="blue">
              <b>
                10 = Stronlgy-Agree &nbsp;&nbsp;&nbsp;AND &nbsp;&nbsp;&nbsp;0 =
                Strongly-Disagree
              </b>
            </font>
          </p>
        </div>
        <br />
        <h4>
          <b>I am someone who ... </b>
        </h4>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              1. I am a worrior.&nbsp;>>Pt: &nbsp;
              <b>{this.state.q1}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>
              <Slider
                value={this.state.q1}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange1}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              2. I make friends easily. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q2}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q2}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange2}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              3. I have vivid imagination &nbsp;>>Pt: &nbsp;
              <b>{this.state.q3}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q3}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange3}
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              4. I trust others. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q4}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q4}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange4}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              5. I complete tasks easily.&nbsp;>>Pt: &nbsp;
              <b>{this.state.q5}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q5}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange5}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              6. I get angry esily.&nbsp;>>Pt: &nbsp;
              <b>{this.state.q6}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>
              <Slider
                value={this.state.q6}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange6}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              7. I really enjoy large parties and gatherings.&nbsp;>>Pt: &nbsp;
              <b>{this.state.q7}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q7}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange7}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              8. I think art is important.&nbsp;>>Pt: &nbsp;
              <b>{this.state.q8}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q8}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange8}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              9. I use and manipulate others to get my own way. &nbsp;>Pt:
              <b>{this.state.q9}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q9}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange9}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              10. I don't like things to be a mess - I like to tidy up.
              &nbsp;>>Pt: &nbsp;
              <b>{this.state.q10}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q10}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange10}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              11. I often feel sad. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q11}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>

              <Slider
                value={this.state.q11}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange11}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              12. I like to take charge of situation and events &nbsp;>>Pt:
              &nbsp;
              <b>{this.state.q12}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q12}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange12}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              13. I experience deep and varid emotions. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q13}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q13}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange13}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              14. I love to help others.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>Pt: &nbsp;
              <b>{this.state.q14}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q14}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange14}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              15. I keep my promises. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>Pt: &nbsp;
              <b>{this.state.q15}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q15}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange15}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              16. I find it difficult to approach others. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q16}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>

              <Slider
                value={this.state.q16}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange16}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              17. I am always busy - always on the go. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q17}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q17}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange17}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              18. I prefer variety of routines
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>>Pt: &nbsp;
              <b>{this.state.q18}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q18}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange18}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              19. I love a good argument - a good fight &nbsp;>>Pt: &nbsp;
              <b>{this.state.q19}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q19}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange19}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              20. I work hard. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q20}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q20}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange20}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              21. I over indulge and go on binges. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q21}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>

              <Slider
                value={this.state.q21}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange21}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              22. I love excitement. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q22}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q22}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange22}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              23. I enjoy reading challenging books and articles. &nbsp;>>Pt:
              &nbsp;
              <b>{this.state.q23}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q23}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange23}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              24. I believe that I am better than others. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q24}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q24}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange24}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              25. I am always prepared. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q25}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q25}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange25}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              26. I panic easily. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q26}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>

              <Slider
                value={this.state.q26}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange26}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              27. I am a really cheerful person. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q27}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q27}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange27}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              28. I tend to support political candidates who favor progress and
              reforms. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q28}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q28}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange28}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              29. I sympathise with the homeless. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q29}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q29}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange29}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              30. I am very spontaneous - I act without thinking. &nbsp;>>Pt:
              &nbsp;
              <b>{this.state.q30}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q30}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange30}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              31. I 'fear for the worst'. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q31}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>

              <Slider
                value={this.state.q31}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange31}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              32. I feel comfortble around people. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q32}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q32}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange32}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              33. I enjoy 'wild flights of fantasy'. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q33}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q33}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange33}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              34. I believe that people basically have good intentions.
              &nbsp;>>Pt: &nbsp;
              <b>{this.state.q34}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q34}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange34}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              35. I am not very spontaneous - I think, analyze and decide. &nbsp;>>Pt:
              &nbsp;
              <b>{this.state.q35}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q35}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange35}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              36. I get irritated esaily. &nbsp;>>Pt: &nbsp;
              <b>{this.state.q36}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>
              <Slider
                value={this.state.q36}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange36}
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              37. I always chat to lots of different people at parties.
              &nbsp;>>Pt: &nbsp;
              <b>{this.state.q37}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q37}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange37}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              38.I see beauty in things that others might not notice &nbsp;>>Pt:
              &nbsp;
              <b>{this.state.q38}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q38}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange38}
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              39.I don't mind cheating to get ahead &nbsp;>>Pt: &nbsp;
              <b>{this.state.q39}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q39}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange39}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              40.I often forget to put things back in their proper place
              &nbsp;>>Pt: &nbsp;
              <b>{this.state.q40}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q40}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange40}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              41.I dislike myself &nbsp;>>Pt: &nbsp;
              <b>{this.state.q41}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                    <b>Less (0)</b>
                  </div>
                </div>
                <div className="col-6">
                  <div className="float-right">
                    <b>More (10)</b>
                  </div>
                </div>
              </div>
              <Slider
                value={this.state.q41}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange41}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              42.I try to be in charge - to lead others &nbsp;>>Pt: &nbsp;
              <b>{this.state.q42}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q42}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange42}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              43.I am empathetic - I feel others' emotions &nbsp;>>Pt: &nbsp;
              <b>{this.state.q43}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q43}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange43}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              44.I am concerned about others &nbsp;>>Pt: &nbsp;
              <b>{this.state.q44}</b>
            </div>
          </div>
          <div className="col-md-6 col-sxm-12">
            <div className="testq-padding">
              <Slider
                value={this.state.q44}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange44}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h5>
                <font color="#4298f4">
                  There will be about 120+ questions. Through this test you are
                  letting us know your approximate personality traits. Like when
                  you meet someone the first time and he/she is of interest to
                  you, you start the assessment with audio-visual-linguistic and
                  feelings information. This is what Baanda is trying to do
                  about you (not using the feeling as yet). Just a starting
                  point. Knowing you is a never-ending process. The next section
                  is about day-to-day audio-visual-linguistic interaction (The
                  Mask). [Refer to the 'About' section for details]
                </font>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalityTests;
