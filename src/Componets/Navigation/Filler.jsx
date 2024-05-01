function Filler({title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11}) {
    return(
        <div className='filler'>
            <a href="#" className="a-main">
                {title}
            </a>
            <ul>
                <li>
                    <a href="#">{cont1}</a>
                </li>
                <li>
                    <a href="#">{cont2}</a>
                </li>
                <li>
                    <a href="#">{cont3}</a>
                </li>
                <li>
                    <a href="#">{cont4}</a>
                </li>
                <li>
                    <a href="#">{cont5}</a>
                </li>
                <li>
                    <a href="#">{cont6}</a>
                </li>
                <li>
                    <a href="#">{cont7}</a>
                </li>
                <li>
                    <a href="#">{cont8}</a>
                </li>
                <li>
                    <a href="#">{cont9}</a>
                </li>
                <li>
                    <a href="#">{cont10}</a>
                </li>
                <li>
                    <a href="#">{cont11}</a>
                </li>
            </ul>
        </div>
    );
};

export default Filler