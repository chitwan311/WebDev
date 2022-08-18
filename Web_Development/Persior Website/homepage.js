import React from 'react'
import './homepage.css';
// import Card from '@material-ui/core/Card';
import NoteCard from '../NoteCard/NoteCard';

function HomePage() {
    return(
      <div className="home">
        <div className="mainbox">
          <div className="text">
            <div className="title">
                <p className="para_title">
                    Invest in your career
                </p>
            </div>
            <div className="para">
                <p>Developing the skills for a fabulous carrer isn't just a nice idea <br/>
                  It's the best possible path to success</p>
            </div>
          </div>
        </div>

        <div>
            <NoteCard />
        </div>



        
      </div>

    );

}
export default HomePage