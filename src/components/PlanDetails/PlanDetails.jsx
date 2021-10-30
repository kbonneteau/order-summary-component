import './PlanDetails.scss';
import musicIcon from '../../assets/images/icon-music.svg';

const PlanDetails = () => {
    return (
        <article className="plan-details">
            <img className="plan-details__plan-icon" src={musicIcon} alt="music note"/>
            <div className="plan-details__detail-container">
                <h2 className="plan-details__plan-name">Annual Plan</h2>
                <p className="plan-details__plan-price">$59.99/year</p>
            </div>
            <button className="plan-details__change-plan">Change</button>
        </article>
    );
};

export default PlanDetails;