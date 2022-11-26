import { Layout } from "../components";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="home">
      <div className="flex flex-grow justify-around pt-12">
        <div className="flex flex-grow flex-col w-1/3">
          <h1 className=" text-light text-5xl pt-24 font-bold ">
            Got the Start-Up idea?
          </h1>
          <h1 className=" text-highlight text-xl font-extralight pt-4">
            Research | Design | Development
          </h1>
          <h1 className=" text-light text-xl font-extralight pt-4">
            Our designers, researchers, and developers work closely together to
            translate your ideas into reality, redesign existing products, or
            build web and mobile apps for you.
          </h1>
        </div>

        <div className="flex flex-grow justify-end">
          <Image
            src="/assets/hero.png"
            width={682}
            height={548}
            alt="1"
            quality={30}
          />
        </div>
      </div>
    </Layout>
  );
}
