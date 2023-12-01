import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

export default function App() {

  return (
     <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-3'>
            <ProfileCard 
            title = "Alexa" 
            handle ="@alexa99" 
            image={AlexaImage}
            description="Alexa was made by Amazon and helps you buys things"
            />
            </div>
            <div className='column is-3'>
            <ProfileCard 
            title = "Cotana" 
            handle = "@cortana32" 
            image={CortanaImage}
            description="Cortana was made by Microsoft who knows what it does"
            /> 
            </div>
            <div className='column is-3'>
            <ProfileCard 
            title = "Siri" 
            handle = "@siri01" 
            image={SiriImage}
            description="Siri was made by Apple and it's being phased out"
            />
            </div>
          </div>
        </section>
      </div>
     </div>
  );
}
