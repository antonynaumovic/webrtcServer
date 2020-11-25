import React, { useRef, useState }  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Room from "./local_modules/Room"; //Room code by Chaim Copyright:https://github.com/coding-with-chaim/native-webrtc
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



firebase.initializeApp({
  apiKey: "AIzaSyAfrnZVcJp1YKRwd940ofe-y7XIKTvMSPk",
  authDomain: "reshowbase.firebaseapp.com",
  databaseURL: "https://reshowbase.firebaseio.com",
  projectId: "reshowbase",
  storageBucket: "reshowbase.appspot.com",
  messagingSenderId: "156367547920",
  appId: "1:156367547920:web:58d8d32dfc1c90d3746495",
  measurementId: "G-MGFZ1WC0VQ"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
      </header>
      <section>
          {user ? <ChatRoom/> : <SignIn />}
      </section>
      <div id="ID1600-01-Landing__1">
	<svg class="Group_496">
		<rect id="Group_496" rx="0" ry="0" x="0" y="0" width="1740" height="978">
		</rect>
	</svg>
	<div id="Logo">
		<svg class="ISU_Logo_2017-18_Transparent">
			<rect id="ISU_Logo_2017-18_Transparent" rx="77" ry="77" x="0" y="0" width="154" height="154">
			</rect>
		</svg>
		<div id="temp_Name">
			<span>temp Name</span>
		</div>
	</div>
	<div id="Group_2154">
		<div id="LOGIN">
			<span>LOGIN</span>
		</div>
	</div>
	<div id="Group_2285">
		<svg class="Ellipse_685">
			<ellipse id="Ellipse_685" rx="75" ry="75" cx="75" cy="75">
			</ellipse>
		</svg>
		<div id="Menu" class="Menu">
			<div id="Group_457">
				<svg class="Line_42" viewBox="0 0 19.727 3">
					<path id="Line_42" d="M 0 0 L 19.72694778442383 0">
					</path>
				</svg>
				<svg class="Line_43" viewBox="0 0 19.727 3">
					<path id="Line_43" d="M 0 0 L 19.72694778442383 0">
					</path>
				</svg>
				<svg class="Line_44" viewBox="0 0 19.727 3">
					<path id="Line_44" d="M 0 0 L 19.72694778442383 0">
					</path>
				</svg>
			</div>
		</div>
	</div>
	<svg class="Rectangle_274">
		<rect id="Rectangle_274" rx="19.5" ry="19.5" x="0" y="0" width="832" height="39">
		</rect>
	</svg>
	<svg class="Rectangle_275">
		<rect id="Rectangle_275" rx="19.5" ry="19.5" x="0" y="0" width="832" height="39">
		</rect>
	</svg>
	<div id="Email">
		<span>Email</span>
	</div>
	<div id="Password">
		<span>Password</span>
	</div>
	<div id="Button" class="Button">
		<svg class="Outline">
			<rect id="Outline" rx="21" ry="21" x="0" y="0" width="171" height="42">
			</rect>
		</svg>
		<div id="LOGIn">
			<span>LOGIn</span>
		</div>
	</div>
	<div id="twitter-seeklogocom">
		<svg class="Path_2553" viewBox="0 0.822 47.554 38.646">
			<path id="Path_2553" d="M 47.5539436340332 5.396838188171387 C 45.80429077148438 6.172803401947021 43.92386627197266 6.697234153747559 41.95038223266602 6.933090686798096 C 43.96473693847656 5.725591659545898 45.51172256469727 3.813625812530518 46.24008178710938 1.535509824752808 C 44.35519790649414 2.653439998626709 42.26709747314453 3.465386390686035 40.04487991333008 3.90303111076355 C 38.26513671875 2.006891965866089 35.72954559326172 0.8220000267028809 32.92349243164063 0.8220000267028809 C 27.5354061126709 0.8220000267028809 23.16694450378418 5.190201282501221 23.16694450378418 10.57804489135742 C 23.16694450378418 11.34269714355469 23.25332069396973 12.0873441696167 23.41976165771484 12.80137825012207 C 15.31121730804443 12.39451217651367 8.122381210327148 8.510395050048828 3.310460329055786 2.607854843139648 C 2.470668792724609 4.048795223236084 1.989538073539734 5.724718570709229 1.989538073539734 7.512672901153564 C 1.989538073539734 10.89739894866943 3.712086915969849 13.88363742828369 6.329912662506104 15.63314056396484 C 4.730521678924561 15.58252143859863 3.226274967193604 15.14366912841797 1.910758376121521 14.41293621063232 C 1.910052537918091 14.45363521575928 1.910052537918091 14.49452114105225 1.910052537918091 14.53557300567627 C 1.910052537918091 19.26252746582031 5.273045063018799 23.20579147338867 9.736225128173828 24.10207366943359 C 8.917479515075684 24.32498168945313 8.055582046508789 24.44423675537109 7.165710926055908 24.44423675537109 C 6.537088394165039 24.44423675537109 5.92585277557373 24.38312149047852 5.330276966094971 24.26925277709961 C 6.571695327758789 28.14526748657227 10.17472362518311 30.96599960327148 14.44395351409912 31.04476165771484 C 11.10496044158936 33.66134262084961 6.898182392120361 35.22114944458008 2.327338457107544 35.22114944458008 C 1.53990638256073 35.22114944458008 0.7632556557655334 35.17489242553711 0 35.08480072021484 C 4.317582130432129 37.85296249389648 9.445903778076172 39.46812438964844 14.95551109313965 39.46812438964844 C 32.90082931518555 39.46812438964844 42.71384429931641 24.60176086425781 42.71384429931641 11.70936393737793 C 42.71384429931641 11.28633880615234 42.70437240600586 10.86557960510254 42.68561172485352 10.44723415374756 C 44.59166717529297 9.071718215942383 46.2458381652832 7.353349208831787 47.5539436340332 5.396838188171387">
			</path>
		</svg>
	</div>
	<svg class="facebook" viewBox="0 0 49.211 49.211">
		<path id="facebook" d="M 0 0 L 0 49.2109375 L 26.20782279968262 49.2109375 L 26.20782279968262 30.20177841186523 L 19.80121040344238 30.20177841186523 L 19.80121040344238 22.44171333312988 L 26.20782279968262 22.44171333312988 L 26.20782279968262 15.924635887146 C 26.20782279968262 11.18495273590088 30.05006217956543 7.342714309692383 34.78974151611328 7.342714309692383 L 41.48736572265625 7.342714309692383 L 41.48736572265625 14.32077026367188 L 36.69488143920898 14.32077026367188 C 35.18885040283203 14.32077026367188 33.96788787841797 15.5417308807373 33.96788787841797 17.04776382446289 L 33.96788787841797 22.44182205200195 L 41.36696624755859 22.44182205200195 L 40.3443717956543 30.2018871307373 L 33.96788787841797 30.2018871307373 L 33.96788787841797 49.2109375 L 49.2109375 49.2109375 L 49.2109375 0 L 0 0 Z">
		</path>
	</svg>
	<svg class="Rectangle_276">
		<rect id="Rectangle_276" rx="24" ry="24" x="0" y="0" width="1238" height="82">
		</rect>
	</svg>
	<div id="GDPR">
		<span>GDPR</span>
	</div>
	<div id="CLICK_HERE_TO_ACCEPT_COOKIES_T">
		<span>CLICK HERE TO ACCEPT COOKIES. Terms and Conditions apply.</span>
	</div>
</div>

      <div>
      <SignOut />
      </div>
    </div>
  );
}



function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
  <>

    <button id="Google_G_Logo" onClick={signInWithGoogle}>
		<svg className="Path_2549" viewBox="272.1 223.1 23.735 23.199">
			<path id="Path_2549" d="M 295.8349914550781 228.1212005615234 C 295.8349914550781 226.44140625 295.6987915039063 224.7525482177734 295.4082336425781 223.0999908447266 L 272.1000061035156 223.0999908447266 L 272.1000061035156 232.6157836914063 L 285.4475402832031 232.6157836914063 C 284.8936767578125 235.6847991943359 283.1139831542969 238.3997039794922 280.508056640625 240.1248931884766 L 280.508056640625 246.2992553710938 L 288.4711608886719 246.2992553710938 C 293.1473388671875 241.995361328125 295.8349914550781 235.639404296875 295.8349914550781 228.1212005615234 Z">
			</path>
		</svg>
		<svg className="Path_2550" viewBox="28.9 324.3 38.463 19.976">
			<path id="Path_2550" d="M 50.9824333190918 344.27587890625 C 57.64711380004883 344.27587890625 63.26760864257813 342.0876159667969 67.36266326904297 338.3103637695313 L 59.3995475769043 332.135986328125 C 57.18403625488281 333.6432800292969 54.3238525390625 334.4967956542969 50.99151229858398 334.4967956542969 C 44.54474639892578 334.4967956542969 39.07862091064453 330.1474914550781 37.11735534667969 324.2999877929688 L 28.90000152587891 324.2999877929688 L 28.90000152587891 330.6650390625 C 33.09493637084961 339.009521484375 41.63916778564453 344.27587890625 50.9824333190918 344.27587890625 Z">
			</path>
		</svg>
		<svg className="Path_2551" viewBox="-0.05 150 10.837 22.191">
			<path id="Path_2551" d="M 10.78691864013672 165.8263549804688 C 9.751804351806641 162.75732421875 9.751804351806641 159.4340667724609 10.78691864013672 156.3650512695313 L 10.78691864013672 150 L 2.578645706176758 150 C -0.9262141585350037 156.9824829101563 -0.9262141585350037 165.2089233398438 2.578645706176758 172.1913909912109 L 10.78691864013672 165.8263549804688 Z">
			</path>
		</svg>
		<svg className="Path_2552" viewBox="28.9 -0.018 38.617 19.987">
			<path id="Path_2552" d="M 50.9824333190918 9.76242733001709 C 54.50545501708984 9.707947731018066 57.91043472290039 11.03362083435059 60.46189880371094 13.46704483032227 L 67.51702880859375 6.411927700042725 C 63.0496826171875 2.216991424560547 57.12047958374023 -0.08931537717580795 50.9824333190918 -0.01667579635977745 C 41.63916778564453 -0.01667579635977745 33.09493637084961 5.249693870544434 28.90000152587891 13.60324478149414 L 37.10827255249023 19.96829032897949 C 39.06046295166016 14.11172294616699 44.53567123413086 9.762428283691406 50.9824333190918 9.762428283691406 Z">
			</path>
		</svg>
	</button>
  
    <button className="btn-createRoom" onClick={signInWithGoogle}>Sign In</button>
    </>
  )
}

function SignOut() {
  return auth.currentUser &&
  (
    <button className="btn-createRoom" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const msgCol = firestore.collection('messages');
  const query = msgCol.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  console.log(messages)
  const[formValue, setFormValue] = useState('');
  const dummy = useRef();
  const sendMessage = async(change) => {
    change.preventDefault();
    const {uid, photoURL} = auth.currentUser;
    await msgCol.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return(
  <>
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
      </BrowserRouter>
  </>
  )
}

/*
<div>
      
    </div>
      <form onSubmit={sendMessage}>
        <input value={formValue} className="inputfield" onChange={(change) => setFormValue(change.target.value)} placeholder="Enter Message" />
        <button type="submit" className="btn-createRoom" disabled={!formValue}>🖂</button>
      </form>
      <p>{messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}</p>
        <span ref={dummy}></span>

*/


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="Message" />
      <p>{text}</p>
    </div>
  )
}

export default App;
