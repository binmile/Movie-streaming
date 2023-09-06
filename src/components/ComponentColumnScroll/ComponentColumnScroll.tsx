import { FC } from 'react';

export const ComponentColumnScroll: FC<ProviderType> = ({ children }) => {
  return <div className="flex flex-col overflow-y-scroll no-scrollbar h-[100%]">{children}</div>;
};
