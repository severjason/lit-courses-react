import * as React from 'react';
import './index.css';

const Footer: React.StatelessComponent<{}> = () => {
    return (
        <footer className="ui container center aligned">
            <div className="app-footer-copyright">
                <p>Copyright<i className="copyright outline icon"/>2018</p>
            </div>
        </footer>
    );
};

export default Footer;
