import React, { Component } from 'react';
import {Bg} from '../theme/types'
import '../css/About.css'
import '../css/HabitPage.css'

class About extends Component {
    render() {
        return (
            <Bg>
              <main>
                <article className="about">
                  <h1 className="pageTitle">About</h1>
                  <br/>

                  <section className="sectionContainer">
					  <div className="img-container1">
						  <img className="about-image" src="/eggs/egg4.png"/>
					  </div>

					  <div>
	                    <h3 className="cardTitle">What is a Habitar?</h3>
	                    <br/>
						<p>Habit + Avatar = Habitar!</p>
						<br/>
	                    <p>A habitar is a magical creature that is a cross between a dinosaur and a dragon.</p>
	                    <br/>
	                    <p>...some say it is possible to hatch a unicorn!</p>
					</div>
                  </section>

                  <section className="sectionContainer" id="good-habits">
					  <div className="img-container2">
						  <img className="about-image" id="good-habit-image"  src="/about/brushing-teeth.png"/>
						  <img className="about-image" id="good-habit-image"  src="/about/cleaning.png"/>
						  <img className="about-image" id="good-habit-image"  src="/about/study.png"/>
						  <img className="about-image" id="good-habit-image"  src="/about/reading.png"/>
					  </div>

					  <div>
						<h3 className="cardTitle">Our why:</h3>
						<br/>
	                    <p id="why">
							We wanted to build a tool to help parents and teachers instill good habits for children - so we created Habitar!
						</p>
						<br/>
						<p>
						    Studies show that routines and habits in children, including household chores and responsibilities, are unlikely to vary after the age of 9.
						</p>
						<br/>
						<p>
							Habitar provides a fun, interactive atmosphere to help develop consistency in daily routines and makes it easy to track a child&rsquo;s progress.
	                    </p>
					  </div>
                  </section>

				  <section className="sectionContainer">
					  <div className="bolt-container">
						  <i style={{color:"gold"}} className="fas fa-bolt about-image" id="bolt"></i>
						  <i style={{color:"#4ddbff"}} className="fas fa-bolt about-image" id="bolt"></i>
					  </div>

					  <div>
	                    <h3 className="cardTitle">How it works:</h3>
	                    <br/>
						<p>Choose a child to work on a habit with.</p>
						<br/>
	                    <p>Define what the habit is and what the child will earn if they complete a 7 day streak. You can also set an even bigger reward for a 21 day "power streak"!</p>
	                    <br/>
						<p>The idea is to get kids excited about being diligent in their daily activities.</p>
	                    <p>We hope your child will be excited to see their progress, watch their habitars hatch, and look forward to their hard-earned rewards!</p>
					</div>
                  </section>

                </article>
              </main>
            </Bg>
        );
    }
}

export default About;

// <section className="sectionContainer">
//   <h3 className="cardTitle">Instructions:</h3>
//   <br/>
//   <div>
//   <ol>
// 	<li className="listHeader">  1. Register </li>
// 	<br/>
// 	  <ul>
// 		<li className="li">
// 		   Click the register button in the home page (or in our navigation bar) and fill out the form to register
// 		</li>
// 	  </ul>
//
// 	  <br/>
// 	  <br/>
//
// 	<li className="listHeader">  2. Create a new habit </li>
// 	<br/>
// 	  <ul>
// 		<li className="li">
// 		   &#8226; Child&#39;s name - enter the child&#39;s name
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; Habit - enter a name for the habit your want to work on with the child
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; Describe Habit - (optional) enter a description of the habit you are working on if needed
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; 1 week reward - enter the reward you want to give the child after doing the habit for 7 days
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; 3 week reward - enter the reward you want to give the child after doing the reward for 21 days (3 weeks). The child obtains 1 streak when doing a habit 7 days in a row. A power streak is earned when obtaining 3 regular streaks (meaning doing the habit for 21 days)
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; Choose your habitar&#39;s egg - each egg will hatch a different creature!
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; Opt in for text message reminders - if you opt in, we will send you one text message a day to remind you to do the habit with the child. The reminder time is set under the "When is habit performed section"
// 		</li>
// 		<br/>
// 		<li className="li">
// 		  &#8226; Phone number - (optional) only needed if you want us to send you text message reminders
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; When is the habit performed? - (optional) only needed for the text message reminders. This tells us at what time you would like for us to send you the reminders
// 		</li>
// 	  </ul>
// 	  <br/>
// 	  <br/>
// 	<li className="listHeader"> 3. On the Habitar page </li>
// 	<br/>
// 	  <ul>
// 		<li className="li">
// 		   &#8226; Click the "completed today?" button if the habit was done for the day - every time you click the button, the child will earn a lightning bolt
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; After earning 7 lightning bolts the child will unlock their reward for completing a 7 day streak
// 		</li>
// 		<br/>
// 		<li className="li">
// 		   &#8226; After a 7 day streak, you can continue to keep track of habits to unlock a power streak, which unlocks the reward after completing the habit for 3 weeks!
// 		</li>
// 	  </ul>
//   </ol>
//   </div>
// </section>
