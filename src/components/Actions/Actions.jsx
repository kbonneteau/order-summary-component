import './Actions.scss';

const Actions = () => {
    return (
        <div className="actions">
            <button className="actions__primary-btn">Proceed to Payment</button>
            <button className="actions__secondary-btn">Cancel Order</button>
        </div>
    );
};

export default Actions;