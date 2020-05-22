import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';



class LoadingOver extends Component{
     isActive = true;
    render(){

        return(
            <LoadingOverlay
                active={true}
                spinner
                text='Loading your content...'
                >
                <p>Some content or children or something.</p>
            </LoadingOverlay> 
        )
    }
}

export default LoadingOver