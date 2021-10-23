import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-view">
      <h2 className="home-header">Welcome !</h2>
      <p className="about-text">This app will allow you to generate a report with
        information from a local or unidentified IP Addresses 
        in your network, with the opportunity to save those
        reports inside of the app.</p>
        <p className="about-text">This app is using 
          <a href="https://ipapi.co/api/#introduction" target="_blank" rel="noreferrer"> ipapi </a> API </p>
    </div>
  )
}
