import Wrapper from "@/components/layout/Wrapper";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Wrapper>
        <h1>Hello World</h1>
        <div className="mt-4">
          <Link href="/demo" className="text-blue-600 hover:text-blue-800 underline">
            Demo
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
export default Home;