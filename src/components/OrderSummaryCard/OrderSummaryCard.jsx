import './OrderSummaryCard.scss';
import PlanDetails from '../PlanDetails/PlanDetails';
import Actions from '../Actions/Actions';

const OrderSummaryCard = () => {
    return (
        <section className="order-summary">
            <img className="order-summary__hero" src="" alt="dancing person"/>
            <h1 className="order-summary__title">Order Summary</h1>
            <p className="order-summary__description">
                You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!
            </p>
            <PlanDetails />
            <Actions />
        </section>
    );
};

export default OrderSummaryCard;