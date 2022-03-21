import TranslatorLogo from '../translatorLogo.png'

function LoginPage() {
    return (
      <div className="loginPage">

        <div className='loginPageContent'>
            <img src={TranslatorLogo} className="loginLogo" />
            <div className='loginPageText'>
                <h1>Lost in translation</h1>
                <h2>Get started</h2>
            </div>
        </div>
      
        <div className='loginInputContainer' > 
            <input placeholder="What is your name?"></input>
            <button>Go</button>
        </div>

      </div>
    );
  }
  
  export default LoginPage;