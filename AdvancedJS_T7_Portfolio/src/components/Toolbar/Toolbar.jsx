export default function Toolbar(props) {
    return (
        <div className="container">
            {
                props.filters.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => props.onSelectFilter(button)}
                        className={props.selected === button ? "active" : ''}
                    >
                        {button}
                    </button>
                ))
            }
        </div>
    );
}