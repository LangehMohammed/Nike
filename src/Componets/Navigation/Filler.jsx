function Filler({title, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14}) {
    
    const Cont1 = () => <a href="#">{cont1}</a>;

    const Rendercont1 = ({checkValue1}) => {
        if(checkValue1 != null){
            return <Cont1/>
        }
    };

    const Cont2 = () => <a href="#">{cont2}</a>;

    const Rendercont2 = ({checkValue2}) => {
        if(checkValue2 != null){
            return <Cont2/>
        }
    };

    const Cont3 = () => <a href="#">{cont3}</a>;

    const Rendercont3 = ({checkValue3}) => {
        if(checkValue3 != null){
            return <Cont3/>
        }
    };

    const Cont4 = () => <a href="#">{cont4}</a>;

    const Rendercont4 = ({checkValue4}) => {
        if(checkValue4 != null){
            return <Cont4/>
        }
    };

    const Cont5 = () => <a href="#">{cont5}</a>;

    const Rendercont5 = ({checkValue5}) => {
        if(checkValue5 != null){
            return <Cont5/>
        }
    };

    const Cont6 = () => <a href="#">{cont6}</a>;

    const Rendercont6 = ({checkValue6}) => {
        if(checkValue6 != null){
            return <Cont6/>
        }
    };

    const Cont7 = () => <a href="#">{cont7}</a>;

    const Rendercont7 = ({checkValue7}) => {
        if(checkValue7 != null){
            return <Cont7/>
        }
    };

    const Cont8 = () => <a href="#">{cont8}</a>;

    const Rendercont8 = ({checkValue8}) => {
        if(checkValue8 != null){
            return <Cont8/>
        }
    };

    const Cont9 = () => <a href="#">{cont9}</a>;

    const Rendercont9 = ({checkValue9}) => {
        if(checkValue9 != null){
            return <Cont9/>
        }
    };

    const Cont10 = () => <a href="#">{cont10}</a>;

    const Rendercont10 = ({checkValue10}) => {
        if(checkValue10 != null){
            return <Cont10/>
        }
    };

    const Cont11 = () => <a href="#">{cont11}</a>;

    const Rendercont11 = ({checkValue11}) => {
        if(checkValue11 != null){
            return <Cont11/>
        }
    };

    const Cont12 = () => <a href="#">{cont12}</a>;

    const Rendercont12 = ({checkValue12}) => {
        if(checkValue12 != null){
            return <Cont12/>
        }
    };

    const Cont13 = () => <a href="#">{cont13}</a>;

    const Rendercont13 = ({checkValue13}) => {
        if(checkValue13 != null){
            return <Cont13/>
        }
    };

    const Cont14 = () => <a href="#">{cont14}</a>;

    const Rendercont14 = ({checkValue14}) => {
        if(checkValue14 != null){
            return <Cont14/>
        }
    };
    
    return(
        <div className='filler'>
            <a href="#" className="a-main">
                {title}
            </a>
            <ul>
                <li>
                    <Rendercont1 checkValue1={cont1}/>
                </li>
                <li>
                    <Rendercont2 checkValue2={cont2}/>
                </li>
                <li>
                    <Rendercont3 checkValue3={cont3}/>
                </li>
                <li>
                    <Rendercont4 checkValue4={cont4}/>
                </li>
                <li>
                    <Rendercont5 checkValue5={cont5}/>
                </li>
                <li>
                    <Rendercont6 checkValue6={cont6}/>
                </li>
                <li>
                    <Rendercont7 checkValue7={cont7}/>
                </li>
                <li>
                    <Rendercont8 checkValue8={cont8}/>
                </li>
                <li>
                    <Rendercont9 checkValue9={cont9}/>
                </li>
                <li>
                    <Rendercont10 checkValue10={cont10}/>
                </li>
                <li>
                    <Rendercont11 checkValue11={cont11}/>
                </li>
                <li>
                    <Rendercont12 checkValue12={cont12}/>
                </li>
                <li>
                    <Rendercont13 checkValue13={cont13}/>
                </li>
                <li>
                    <Rendercont14 checkValue14={cont14}/>
                </li>
            </ul>
        </div>
    );
};

export default Filler