import React, { Component } from 'react';
import Button from '../atoms/Button';


class About extends Component{
  render(){
    return(
      <div>
        <section className="about">
          <div className="row features">
            <div className="col-md-6 text-center">
              <h2 className="mt-0">Discover projects</h2>
              <p className=" ">Join exciting new projects, collaborate with other devs and finetune your dev skills!</p>
              </div>
              <div className="col-md-6 text-center">
                <h2 className="mt-0">Find team mates</h2>
                <p className=" ">Need a little bit of help with your app? You've come to the right place! Find new teammates and finish your projects fast</p>
              </div>
            </div>
            <div className="row join">
              <div className="col-md-12 text-center">
                <h2 className="display-4">Start your journey</h2>
                <p className=" ">Build more projects, faster and together</p>
                <a href="/auth/github"><Button label="Join" /></a>
              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default About