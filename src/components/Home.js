import React, {Component} from 'react';
import SinatraTextbooks from '../assets/sinatra-college-textbooks.png';
import RunnersWeekly from '../assets/runners-weekly.png';
import { checkToken } from '../actions/adminLogin';
import { connect } from 'react-redux';
class Home extends Component{ 
    componentDidMount(){
        /*const jwtToken = localStorage.getItem('token');
        if(!!jwtToken) {
            this.props.checkToken(jwtToken)
        }*/
    }
    render(){
            if(!!this.props.loggedIn) {
                return <div>
                    <section id="home-header">
                        <div id="header-content">
                            <h1 className="title">Jonathan Hong</h1>
                            <h4 className="sub-title">Full Stack Web Developer</h4>
                            <div className="links-container">
                                <a href="/projects" >Projects</a>
                                <p className="text-divider">  |  </p>
                                <a href="/blogs/">Blog</a>
                                <p className="text-divider">   |  </p>
                                <a href="/about">About</a>
                                <p className="text-divider">   |  </p>
                                <a href="/logout" className="logout-link">Logout</a>
                            </div>
                        </div>
                    </section>
            </div>
            }
            
            // home page for not logged in
            return <div>
                        <section id="home-header">
                            <div id="header-content">
                                <h1 className="title">Jonathan Hong</h1>
                                <h4 className="sub-title">Full Stack Web Developer</h4>
                                <div className="links-container">
                                    <a href="/projects" >Projects</a>
                                    <p className="text-divider">  |  </p>
                                    <a href="/blogs/">Blog</a>
                                    <p className="text-divider">   |  </p>
                                    <a href="/about">About</a>
                                </div>
                            </div>
                        </section>
                    </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.usersReducer.username
    }
}
export default connect(mapStateToProps, {checkToken})(Home);