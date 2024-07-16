import { Component } from 'react';
import Axios from 'axios';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomerId: null
        };
    }

    componentDidMount() {
        //REMOVED FOR MODULE 3 SLIDE 40
        //  const fetchCustomers = [
        //    { id: 1, name: 'Alice' },
        //    { id: 2, name: 'Bob' },
        //  ];
        //ADDED
        
        axios.get('http://127.0.0.1:5000/customers')
            .then(response => {
                this.setState({ customers: response.data });
            })
            .catch(error => {
                console.error('There was an error fetching the customers!', error);
            });
    }
    

    // UPDATING
    constructorDidUpdate(prevProps, prevState) {
        if (prevState.selectedCustomerId !== this.state.selectedCustomerId) {
            console.log('New customer selected: ID ${this.state.selectCustomerId}');
        }
    }

    // UNMOUNTING
    componentWillUnmount() {
        console.log('Customer component is being unmounted');
    }
    selectCustomer = (id) => {
        this.setState({ selectedCustomerId: id });
        this.props.onCustomerSelect(id);
    }
    render() {
            const { selectedCustomerId } = this.state

        return (
            <div className='customer-list'>
                <h3>Customers</h3>
                <ul>
                    {customers.map(customer => (
                        <li key={customer.id} onClick={() => this.selectCustomer(customer.id)}>
                            {customer.name}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}

CustomerList.propTypes = {
    onCustomerSelect: func
}
export default CustomerList;