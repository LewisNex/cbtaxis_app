import React, { Component } from 'react';

import './JobItem.scss';
import Avatar from '../Avatar/Avatar'
import Moment from 'react-moment';

const calendarStrings = {
    lastDay : '[Yesterday at] LT',
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    lastWeek : '[last] dddd [at] LT',
    nextWeek : 'dddd [at] LT',
    sameElse : 'l [at] LT'
};

function Header(props) {
    return (
        <header className='header'
                onClick={props.onClick}>
            <Avatar driver={props.driver} />
            <div className='addr-details'>
                <p className='from'>{props.pickup_address}</p>
                <p>to</p>
                <p className='too'>{props.dropoff_address}</p>
            </div>
            <div className="time">
                <Moment 
                    date={props.pickup_time}
                    parse="YYYY-MM-DDTHH:mm:ss"
                    calendar={calendarStrings}/>
            </div>
        </header>
    );
}

function Body(props) {
    return (
        <section className='body'>
            <Tabs activeTab={props.activeTab}
                  events={{toggleTabDetails: props.events.toggleTabDetails,
                    toggleTabAddresses: props.events.toggleTabAddresses,
                    toggleTabAssign: props.events.toggleTabAssign}} />
            {props.activeTab === 'Details' ? 
                <Details job={props.job}/> 
                : null}
            {props.activeTab === 'Addresses' ? 
                <Addresses pickup_address={props.job.pickup_address} 
                           dropoff_address={props.job.dropoff_address}/> 
                : null}
            {props.activeTab === 'Assign' ? 
                <Assign /> 
                : null}
        </section>
    );
}

function Tabs(props) {
    return (
        <ul className='tabs'>
            <li className={'tab ' + (props.activeTab === 'Details' ? 'active' : '')}
                onClick={props.events.toggleTabDetails}>Details</li>
            <li className={'tab ' + (props.activeTab === 'Addresses' ? 'active' : '')}
                onClick={props.events.toggleTabAddresses}>Addresses</li>
            <li className={'tab ' + (props.activeTab === 'Assign'? 'active' : '')}
                onClick={props.events.toggleTabAssign}>Assign</li>
        </ul>
    );
}



function Addresses(props) {
    return (
        <div className="content">
            <div className='addr from'><Address address={props.pickup_address} /></div>
            <div className='addr too'><Address address={props.dropoff_address} /></div>
        </div>
    );
}
function Address(props) {
    return (
        <address>
            <p>{props.address.house}</p>
            <p>{props.address.road}</p>
            <p>{props.address.village}</p>
            <p className='postcode'>{props.address.postcode}</p>
        </address>
    );
}

function Details(props) {
    return (
        <div className="content">
            <p>{props.job.name}</p>
            <p>{props.job.contact_number}</p>
            <p>{props.job.number_of_people}</p>
            <p>{props.job.price}</p>
            <p>{props.job.time_allowed}</p>
        </div>
    )
}

function Assign(props) {
    return (
        <div className='content'></div>
    );
}

export default class JobItem extends Component {
    state = { expanded: false,
              activeTab: 'Details' }
    render() { 
        const {pickup_time, pickup_address, dropoff_address, driver} = this.props.job
        console.log(this.props.job)
        return ( 
        <div className='job-item'>
            <Header pickup_address={pickup_address.village} 
                    dropoff_address={dropoff_address.village} 
                    pickup_time={pickup_time} 
                    onClick={this.toggleBodyDisplay}
                    driver={driver}/>
            {this.state.expanded ? 
            <Body activeTab={this.state.activeTab}
                  events={{toggleTabDetails: this.toggleTabDetails,
                    toggleTabAddresses: this.toggleTabAddresses,
                    toggleTabAssign: this.toggleTabAssign}}
                  job={this.props.job}/>
            : null
            }
        </div>
        );
    }

    toggleBodyDisplay = (e) => {
        this.setState({expanded: !this.state.expanded});
    }

    toggleTabDetails = (e) => {
        this.setState({activeTab: 'Details'});
    }
    toggleTabAddresses = (e) => {
        this.setState({activeTab: 'Addresses'});
    }
    toggleTabAssign = (e) => {
        this.setState({activeTab: 'Assign'});
    }

};

