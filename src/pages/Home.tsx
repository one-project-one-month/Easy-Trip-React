import AppErrorBoundary from "@/components/core/error/ErrorBoundary";
import SearchInputs from "@/features/search-inputs/SearchInputs";

/* const TestCompo = () => {
  throw new Error("custom error");
  return <>test compo</>;
}; */

const Home = () => {
  // throw new Error('Error');

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AppErrorBoundary>
        {/* <TestCompo /> */}
        <SearchInputs />
      </AppErrorBoundary>
    </div>
  );
};

export default Home;
