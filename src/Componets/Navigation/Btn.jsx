function Btn({title}) {
    return(
        <button className="menu-content">
            <div className="lable">{title}</div>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" strokeWidth="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
            </svg>
        </button>
    )
}

export default Btn