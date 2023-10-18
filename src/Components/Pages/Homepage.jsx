import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Homepage = () => {
    const design = (
        <div className="boxx">
            <div className="header">
                <div className="logo-icon-section">
                    <div className="logo">
                        <img src="" alt="talk-grid" />
                        <h6>Talk Grid</h6>
                    </div>
                    <div className="icon">
                        <p className="search">
                            {/* {search icon here} */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icons' />
                        </p>
                        <p className="there-dots">
                            {/* {there dots icone here} */}
                            <FontAwesomeIcon icon={faEllipsisVertical} className='icons' />
                        </p>
                    </div>
                </div>
                <div className="tab">
                    <div className="department-tab">
                        {/* department tab here */}
                        <h2>department tab</h2>
                    </div>
                    <div className="other-tab department-tab">
                        {/* other tab here */}
                        <h2>department tab</h2>
                    </div>
                </div>
            </div>
        </div>
    );
    return design
}

export default Homepage;