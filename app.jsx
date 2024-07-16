import { Component } from 'react';
import './appstyle.css';
import OrderList from './components/order/orderlist';
import CustomerList from './components/customer/customerlist';
import ProductList from './components/product/productlist';
import CustomerForm from './components/customer/customerform';
import ProductForm from './components/product/productform';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomerId: null,
            selectedOrderId: null
        };
    }

    handleCustomerSelect = (customerId) => {
        this.setState({ selectedCustomerId: customerId });
    }

        render() {
            const { selectedCustomerId } = this.state

        return (
            <div className='app-container'>
                <h1>Our Customers</h1>
                <CustomerList onCustomerSelect={this.handleCustomerSelect} />
                {selectedCustomerId && (
                    <OrderList
                        customerId={selectedCustomerId}
                        onOrderSelect={this.handleCustomerSelect}
                    />
                    // REMOVED WHEN ADDING ORDERLIST.JSX
                    // <p>Selected Customer ID: {selectedCustomerId}</p>
                )}
                {selectedOrderId && (
                    <ProductList orderId={selectedOrderId} />
                )}
            </div>

        );
    }
}

export default App;