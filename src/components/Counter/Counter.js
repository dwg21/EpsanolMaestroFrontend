// vallue = 12
import './counter.css'

const Counter = ({value, title}) => {
    const arrayOfNumber = Array.from(String(value), Number );

    return (
    <div className='container'> 
        <h2>{title}</h2>
        <div className="CounterAll">
            {arrayOfNumber[0] && <span className='digit'>{arrayOfNumber[0]}</span>}
            {arrayOfNumber[1] && <span className='digit'>{arrayOfNumber[1]}</span>}
            {arrayOfNumber[2] && <span className='digit'>{arrayOfNumber[2]}</span>}
        </div>
    </div>
    )

}



export default Counter