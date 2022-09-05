import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
// import {ReactComponent as CrownLogo} from '../../assets/crowm.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div className="logo">Logo</div> 
                    {/* <CrownLogo className='logo' /> */}
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/Shop'>SHOP</Link>
                    <Link className="nav-link" to='/Login'>Sign-in</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;