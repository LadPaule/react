import React, { Component } from 'react'
import {connect} from 'react-redux';
import { searchJam } from '../../actions/searchActions';


export class SearchForm extends Component {

    onChange = e =>{
        this.props.searchJam(e.target.value)
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a jam ...
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input type="text" className="form-control" name="searchText" 
                        placeholder="Search a Jam here" onChange={this.onChange}/>
                        onChange={this.onChange}
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
 const mapStateToProps =state =>({
     text: state.jams.text
 })

export default connect(mapStateToProps, {searchJam}); SearchForm()
