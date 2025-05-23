
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { AppProvider } from "../contexts/AppContext";

const Index = () => {
  return (
    <AppProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </AppProvider>
  );
};

export default Index;
