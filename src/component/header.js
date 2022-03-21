import TranslatorLogo from '../translatorLogo.png'
import UserLogo from '../userLogo.png'

function Header() {
    return (
      <div className="headerContainer">

        <div className="headerName">
            <img src={TranslatorLogo} className="headerLogo" />
            <p>Lost in translation</p>
        </div>

        <div className="headerUserAccount">
            <p className='accountName'>User name</p>
            <img src={UserLogo} className='accountLogo' />
        </div>

      </div>
    );
  }
  
  export default Header;