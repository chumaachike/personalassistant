import ProfileCard from "./ProfileCard";

export default function App() {

  return (
     <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title = "Alexa" handle ="@alexa99"/>
      <ProfileCard title = "Cotana" handle = "@cortana32"/>
      <ProfileCard title = "Siri" handle = "@siri01"/>
     </div>
  );
}
