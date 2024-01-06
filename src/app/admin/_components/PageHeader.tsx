import React from "react";

type PageHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const PageHeader = ({ children, className }: PageHeaderProps) => {
  return <div className={className}>{children}</div>;
};

export default PageHeader;
