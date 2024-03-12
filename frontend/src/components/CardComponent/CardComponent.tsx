import { Card } from "flowbite-react";
import React from "react";


type Props = { title: String; description: any; imgAlt: any; imgSrc: any };

const CardComponent = ({ title, description, imgAlt, imgSrc }: Props) => {
  return (
    <div>
      <Card
        className="max-w-sm rounded-md bg-gray-50 hover:bg-blue-100"
        imgAlt={imgAlt}
        imgSrc={imgSrc}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {title}
        </h5>
        <p className="font-normal text-justify px-4 py-2 text-gray-700 dark:text-gray-800">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default CardComponent;
