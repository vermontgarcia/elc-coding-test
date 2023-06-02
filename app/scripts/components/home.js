/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import Item from './item';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        const { items } = this.props;
        return (
            <section id="home">
                <div className="content">
                    <div className='cards-wrapper'>
                        { items.map((item) => <Item key={item._id} item={item} />)}
                    </div>
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;