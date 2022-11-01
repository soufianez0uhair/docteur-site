import { services } from "../data/services";
import Service from "./Service";

const Services = () => {
    let servicesEl = services.map(service => (
        <Service key={service.title} service={service} />
    ));

    return (
        <div className="servicesSection">
            <h3 className="servicesSection__title">Services</h3>
            <h1 className="servicesSection__question">Comment nous pouvons vous aider?</h1>
            <div className="servicesSection__services">
                {
                    servicesEl
                }
            </div>
        </div>
    )
}

export default Services;