import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
    <>
        <section id="header" className=''>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                <h1 className='division'> {props.name}</h1>
                                <h1><strong className='brand-name'>Rafi Imam</strong></h1>
                                <h2 className='my-3 caption'> We are team of talented developers with high enthusiasm</h2>
                                <div className='my-3'>
                                    <NavLink className='btn btn-outline-primary' to={props.visit}>{props.btnname}</NavLink>
                                </div>
                            </div>

                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src= {props.imgsrc} alt="home img" className="img-fluid animated ball" />

                            </div>                                                      
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Common;