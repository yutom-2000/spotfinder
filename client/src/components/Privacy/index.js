import Navbar from "../Navbar";

const Privacy = () => {
    return <div>
    <Navbar active={"home"} />

    <div className="container body">
      <div className="container bg-light rounded p-2">
          <h1>Privacy Policy</h1>
       <p>
           Spotfinder requires location information to provide accurate recommendations based on proximity.
           Location information will not be shared with any third party and will not be stored on any database.
       </p>
       <p>
           Spotfinder requests users' first and last name upon registration.
           This way, friendlier screen names are presented to fellow users when viewing comments, and other shared content.
           If anyone so chooses to omit their first and last names, there is no requirement for including legal full names, and pseudonyms are allowed.
       </p>
       <p>
           Spotfinder uses a username and password to uniquely identify and sign-in users. 
           These credentials are not shared with any third party, and are stored securely on spotfinder database.
       </p>
       <p>
           Administrator accounts have full access rights to information, and can remove malicious or inappropriate content.
       </p>
       <p>
           Images can be uploaded to spotfinder to represent spots. 
           These pictures are stored using a third party, at Imgur.com. View their privacy policy here: <a href="https://imgur.com/privacy">Imgur's privacy policy</a>
       </p>
      </div>

    </div>
  </div>
}
export default Privacy;