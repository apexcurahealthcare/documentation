import React from "react";
interface IProps {
  text: string;
  href: string;
}
const CustomLink = (props: IProps) => {
  return (
    <span className="inline-flex items-center mr-1 text-primary hover:underline border-primary border-dotted">
      <a href={props?.href} target="_blank" className="font-medium">
        {props?.text}
      </a>
      <i className="aci aci-top-right-arrow"></i>
    </span>
  );
};

export default CustomLink;
