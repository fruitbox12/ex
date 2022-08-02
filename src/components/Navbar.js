import logo from '../images/logo.png'

const Navbar = ({ web3Handler, account, explorerURL }) => {
    return (
        <nav className="navbar fixed-top mx-3">
            <a
                className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
                href="https://www.linkedin.com/in/katie-kirby-68079764/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="https://cdn.discordapp.com/attachments/903378704359632936/985444784275595294/Logo-1_1.png" className="App-logo" alt="logo" width="200" height="100" />
                Back 2 The Metaverse
            </a>

            {account ? (
                <a
                    href={`${explorerURL}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button nav-button btn-sm mx-4">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button nav-button btn-sm mx-4">Connect Wallet</button>
            )}
        </nav>
    )
}

export default Navbar;