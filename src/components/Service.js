import {AiOutlineCheck} from 'react-icons/ai';

const Service = ({service}) => {
    return (
        <div className="service">
            <AiOutlineCheck className="icon icon--check" />
            <h2 className="service__title">{service.title}</h2>
            <p className="service__description">{service.description}</p>
        </div>
    )
}

export default Service;