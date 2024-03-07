import { ChildrenProp } from "../invariants/Types.ts";

export const Content: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="flex h-screen items-center bg-amber-100 p-4">
      {children}
    </div>
  );
};
