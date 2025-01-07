import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { ConfigStep } from "src/models/configuration";

interface AdminContextData {
  items: ConfigStep[];
  addItem: (step: ConfigStep) => void;
  deleteItem: (step: ConfigStep) => void;

  showComponentSelector: number | undefined;
  setShowComponentSelector: (value: number | undefined) => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

interface AdminProviderProps {
  config: ConfigStep[];
}

export const AdminProvider: FC<PropsWithChildren<AdminProviderProps>> = ({
  config,
  children,
}) => {
  const [items, setItems] = useState<ConfigStep[]>([...config]);
  const [showComponentSelector, setShowComponentSelector] = useState<number>();

  const deleteItem = useCallback(
    (step: ConfigStep) => {
      setItems(items.filter((item) => item.component !== step.component));
    },
    [items]
  );

  const addItem = useCallback(
    (step: ConfigStep) => {
      setItems([...items, step]);
      setShowComponentSelector(undefined);
    },
    [items]
  );

  return (
    <AdminContext
      value={{
        items,
        addItem,
        deleteItem,
        showComponentSelector,
        setShowComponentSelector,
      }}
    >
      {children}
    </AdminContext>
  );
};

export const useAdminContext = () => useContext(AdminContext);
