import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-10 text-center text-n-1/50">
        Helping prople creating their dream project.
      </h5>
      <ul className="flex mt-3">
        {companyLogos.map((logo, index) => (
          <li className="flex items-center justify-center flex-1 h-[8.5rem" key={index}>
            <img src={logo} height={28} width={134} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
