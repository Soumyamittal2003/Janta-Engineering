import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"; // Heroicons is a popular icon library

const CautionBox = ({ title }) => {
  const data = [
    {
      title: "PHYSICAL PROPERTY TESTING EQUIPMENT",
      description:
        "The production of paper is a multifaceted process that aims to achieve a high-quality end product suitable for printing, converting, packaging, and various other applications. The outcome is influenced by several factors, including its thickness, bursting strength, stiffness, roughness, tensile strength, water absorbency, etc. JE offers a comprehensive range of products that cater to all your paper testing requirements, ensuring optimal results.",
    },
    {
      title: "PULP TESTING EQUIPMENT",
      description:
        "Pulp quality holds significant importance in the papermaking process. The tools in this section are specifically designed to analyze raw materials. These instruments facilitate the selection and preparation of specimens for further examination of cooking patterns and produce high quality pulp at the laboratory level. The samples are utilized in research, development, and the optimization of paper by altering pulp characteristics, as well as to study properties of board before commercial production",
    },
    {
      title: "PACKAGING TESTING EQUIPMENT",
      description:
        "Packaging plays a crucial role in ensuring the safety and protection of products during transportation and storage. The choice of materials used in packaging is vital, whether it involves selecting printing paper that has good runnability or opting for corrugated cardboard that has high rigidity to support heavy weight. This section focuses on equipment that facilitates product control, troubleshooting, and optimization for paper and related products. These instruments measure various factors for quality control such as strength, grammage, and compression",
    },
    {
      title: "SURFACE COATING & PRINTABILITY",
      description:
        "The print quality of a paper depends upon the surface roughness. The characteristics of paper primarily stem from the inherent properties of its fibers, which undergo changes during the production process. The printing results not only depend on the printing ink, printing press, and human factors but also on properties such as absorption, permeability, and thickness of the paper. Our surface testing instruments can test the surface structure and integrity of paper or board and their effect on the final application.",
    },
    {
      title: "ENVIRONMENTAL TESTING EQUIPMENT",
      description:
        "Effluents from the pulp and paper mills contain harmful solids and dissolved matter that must be treated before being released into the environment. The contaminants are made from a combination of waste produced from debarking, pulp washing, bleaching, and regeneration of cooking chemicals. This section encompasses instruments used for measuring various parameters, including biological oxygen demand, incineration of solids, pH, and TDS value. These measurements provide valuable insights into the toxicity present in the effluent.",
    },
    {
      title: "HANDMADE PAPER MACHINES",
      description:
        "Handmade paper is a sheet of paper or board produced by hand. The raw materials used for making handmade paper are waste products of textile industries including waste fibers and recycled secondary fibers. Handmade papermaking units often use cotton rags or waste paper to produce specialty paper. In the case of plant fibers, additional steps such as cooking, bleaching, and treatment of effluent are required. Explore our comprehensive range of products for your handmade paper needs.",
    },
    {
      title: "PRAKRITIK PAINT MACHINES",
      description:
        "Cow dung has been traditionally used to coat ceilings and floors of houses owing to its antibacterial properties. Realizing the need to add additional income for farmers and create a sustainable livelihood, Khadi and Village Industries Commission developed Khadi Prakritik Paint made from cow dung. The innovative and environmentally friendly option is offered as emulsion paint or oil-based paint and has strong business potential as a cost effective alternative. UEC has the expertise to provide you with machines used in manufacturing Prakritik Paint.",
    },
  ];

  return (
    <div className="bg-yellow-100 border-2-4 border-yellow-400 text-yellow-700 p-4 rounded-lg flex items-start shadow-md m-10">
      <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-3" />
      <div>
        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm">
          {data.map((ele) => {
            if (ele.title == title) return ele.description;
          })}
        </p>
      </div>
    </div>
  );
};

export default CautionBox;
