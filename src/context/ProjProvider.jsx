import context from './context';

export default function ProjProvider({ children }) {

  return (
    <context.Provider value={ "" }>
      {children}
    </context.Provider>
  );
}