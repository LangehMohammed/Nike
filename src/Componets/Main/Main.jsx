import './Main.css'

function Main() {
    return(
        <div className="container-2">
            <div className="wrapper">
                <figure className="image_card">
                    <div className="image_wrapper">
                        <img className="image" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1381,c_limit/64607ba4-49d4-48b3-9fa8-b5c59ff67529/nike-just-do-it.png" alt="Nike Pegasus 41" />
                    </div>
                    <figcaption className="image_caption">
                        <p>Nike Pegasus 41</p>
                        <h3 className="cap_heading">Don't Waste<br />Your Energy</h3>
                        <p className='cap_text'>Run in Pegasus. Feel the responsive energy return of<br />Air Zoom and all-new ReactX foam. </p>
                        <div className="cap_btn_holder">
                            <a href="#" className="cap_btn btn">Shop</a>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Main