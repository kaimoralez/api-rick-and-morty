import './style.css'

export const Button = ({texto}) => {

    return(
        <button className="primary-button"><span className='btn-txt'>{texto}</span></button>
    )
}