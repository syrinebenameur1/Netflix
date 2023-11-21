import "./home.css"

const home = () => {
  return (
    <div className='homeContainer'>
      <div className="navBar">
        <img className="logo" src="https://gray-weau-prod.cdn.arcpublishing.com/resizer/_0q-L39o6VcGdFl2HeKBqu4jb2k=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/JYDNHDPW3ZDVRHIERWNZUG3OFA.jpg" alt="" />
      <div className="buttons">
        <select  onchange="changeLanguage()">
    <option value="fr">  Français</option>
    <option value="en" selected>English</option>
    <option value="ar">العربية</option>
  </select>
  <button className="navButton">Sign in</button>
      </div>
      </div>

      <div className="mail">
        
        <h1>Unlimited movies, TV shows and more.</h1>
        <span className="emails">
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

      <input className="emailbtn" type="email" placeholder="Email address"/>
     <button className="button">Get Started &gt; </button>
     </span>
      </div>
      </div>
  )
}

export default home;
