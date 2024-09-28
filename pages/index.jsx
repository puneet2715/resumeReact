import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import Image from "next/image";
import Head from "next/head";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Resume/Portfolio</title>
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/puneet2715/icon.jpg?tr=w-180,h-180" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="https://ik.imagekit.io/puneet2715/icon.jpg?tr=w-32,h-32" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="https://ik.imagekit.io/puneet2715/icon.jpg?tr=w-16,h-16" />
      </Head>
      <main className="px-10 bg-gray-900 md:px-20 lg:px-40 max-xs:px-4 max-xxs:px-4">
        <section className="min-h-screen max-w-6xl mx-auto">
          <nav className="flex justify-between py-8 my-0 mb-12 text-white max-xs:block">
            {/* <h1 className="text-xl font-burtons max-xs:text-sm max-xs:flex max-xs:justify-center">
              developedbyPuneet
            </h1> */}
            <ul className="flex justify-center max-xs:mt-6">
              <li>
                <a
                  className="px-4 py-2 border-none rounded-md ml-text-white bg-gradient-to-r from-cyan-500 text- to-teal-500 max-xs:text-sm"
                  href="https://filebrowser.shadowdragon.dev/share/34Niy1aj"
                  target={"_blank"}
                  rel="noreferrer nopener nofollow"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 py-10 text-center max-xs:px-6">
            <h2 className="py-2 text-5xl font-medium text-teal-400 md:text-6xl max-xs:text-2xl max-xxs:text-xl">
              Puneet Arora
            </h2>
            <h3 className="py-2 text-2xl text-white md:text-3xl max-xs:text-xl max-xxs:text-sm">
              Software Developer.
            </h3>
            <p className="max-w-xl py-5 mx-auto leading-8 text-gray-200text-md md:text-xl max-xs:text-base max-xxs:text-base">
              I read more to write less (Code)
            </p>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-400 max-xs:gap-8 max-xs:text-2xl max-xxs:text-base">
              <a
                href="https://www.linkedin.com/in/puneet2715/"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/puneet2715"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/BadLfeDecisions"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="mailto:mail@shadowdragon.dev"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
              >
                <AiFillMail />
              </a>
            </div>
            <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96 max-xs:h-52 max-xs:w-52 max-xxs:h-40 max-xxs:w-40">
              <Image
                priority={true}
                className="max-xxs:justify-center"
                src={"https://ik.imagekit.io/puneet2715/myself.jpg"}
                layout="fill"
                objectFit="cover"
                alt="Profile Image"
              />
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto">
          <div className="mx-auto">
            <h2 className="py-1 text-3xl text-white ">Education</h2>
            <h3 className="py-1 text-2xl text-teal-400 ">
              Bachelor of Computer Applications
            </h3>
            <p className="py-2 text-lg leading-8 text-gray-200">
              <span className="text-cyan-300">
                {" "}
                Maharaja Surajmal Institute of Technology{" "}
              </span>
              <br />
              <span className="text-white"> (GGSIPU) </span>
              <br />
              <span className="text-neutral-400">2019-2022 </span>
            </p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto">
        <div className="mx-auto">
          <h2 className="py-1 text-3xl text-white">Experience</h2>
        </div>
          <div className="gap-8 lg:flex max-w-6xl max-h-fit mx-auto">
          <div className="flex-1 p-6 my-4 text-center shadow-lg rounded-xl bg-gradient-to-r from-cyan-700 to-teal-700">
            <Image
              lazy="true"
              src={"https://ik.imagekit.io/puneet2715/open-source.jpg"}
              width={200}
              height={150}
              alt="Open source illustration"
            />
            <p className="text-xs text-gray-300 mt-2">
              Illustration from{" "}
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noreferrer nopener nofollow"
                className="underline"
              >
                Freepik
              </a>
            </p>
            <h3 className="pt-4 pb-2 text-lg font-medium text-teal-300">
              Associate Software Engineer @{" "}
              <a
                href="https://www.quantela.com/"
                target="_blank"
                rel="noreferrer nopener nofollow"
                className="hover:underline"
              >
                Quantela
              </a>
            </h3>
            <h4 className="font-medium text-cyan-300">
              June 2023 - Present
            </h4>
            <ul className="text-left text-gray-200 list-disc list-inside py-4 leading-relaxed">
              <li>Worked on Upgrading a Platform (Angular)</li>
              <li>Module Development - UI / Unit Testing / Providing Critical Feedback on UX (Angular)</li>
              <li>Helping the team as much as I can</li>
            </ul>
            <h4 className="py-2 text-teal-300">Tech Stack</h4>
            <p className="py-1 text-gray-200">JavaScript - Angular/NodeJs</p>
            <p className="py-1 text-gray-200">VCS - Git/Github</p>
            </div>
            
            <div className="flex-1 p-6 my-4 text-center shadow-lg rounded-xl bg-gradient-to-r from-cyan-700 to-teal-700">
            <Image
              lazy="true"
              src={"https://ik.imagekit.io/puneet2715/3d-comp.jpg"}
              width={200}
              height={150}
              alt="Computer illustration"
            />
            <p className="text-xs text-gray-300 mt-2">
              Illustration from{" "}
              <a
                href="https://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#&position=3&from_view=undefined"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
                className="underline"
              >
                Freepik
              </a>
            </p>
            <h3 className="pt-4 pb-2 text-lg font-medium text-teal-300">
              Software Developer @{" "}
              <a
                href="https://www.easyops.in/"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
                className="hover:underline"
              >
                EasyOps
              </a>
            </h3>
            <h4 className="font-medium text-cyan-300">
              Feb 2023 - April 2023  
            </h4>
            <p className="py-2 text-gray-200">
              Development Style -&gt; AGILE
            </p>
            <h4 className="py-2 text-teal-300">Tech Stack</h4>
            <p className="py-1 text-gray-200">Next.Js/React.Js - Javascript/Typescript</p>
            <p className="py-1 text-gray-200">MaterialUi/TailwindCss/ChakraUi - Css</p>
            <p className="py-1 text-gray-200">MongoDb - Database (NoSQL)</p>
            <p className="py-1 text-gray-200">Jest, ts-jest, React Testing Library (Testing)</p>
            <p className="py-1 text-gray-200">VCS -&gt; Git/Github</p>
          </div>
            
          <div className="flex-1 p-6 my-4 text-center shadow-lg rounded-xl bg-gradient-to-r from-cyan-700 to-teal-700">
            <Image
              lazy="true"
              src={"https://ik.imagekit.io/puneet2715/3d-comp.jpg"}
              width={200}
              height={150}
              alt="Computer illustration"
            />
            <p className="text-xs text-gray-300 mt-2">
              Illustration from{" "}
              <a
                href="https://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#&position=3&from_view=undefined"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
                className="underline"
              >
                Freepik
              </a>
            </p>
            <h3 className="pt-4 pb-2 text-lg font-medium text-teal-300">
              Back-End Dev @ <a
                href="https://www.linkedin.com/company/attendit1/about/"
                target={"_blank"}
                rel="noreferrer nopener nofollow"
                className="hover:underline"
              >
                ATTENDIT
              </a>
            </h3>
            <h4 className="font-medium text-cyan-300">
              April 2020 - June 2020  
            </h4>
            <p className="py-2 text-gray-200">
              Contribution in development of REST APIs and password hashing/storing.
            </p>
            <h4 className="py-2 text-teal-300">Tech Stack</h4>
            <p className="py-1 text-gray-200">Nest.Js - Javascript</p>
            <p className="py-1 text-gray-200">MongoDb - Database (NoSQL)</p>
            <p className="py-1 text-gray-200">VCS - Git/Github</p>
          </div>
          
        </div>
        </section>
        <section className="py-10 max-w-6xl mx-auto">
          <div>
            <h3 className="py-1 text-3xl text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 basis-1/3 ">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://puneet2715.github.io/gitissuessimplified/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://github.com/puneet2715/gitissuessimplified"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Code</h3>
                </a>
                <a
                  href="https://puneet2715.github.io/gitissuessimplified/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div>
            {/* <div className="flex-1 basis-1/3 ">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://carfrontend.shadowdragon.dev/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://carfrontend.shadowdragon.dev/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div> */}
            <div className="flex-1 basis-1/3">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://puneet2715.github.io/easyops/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://github.com/puneet2715/easyops"
                  target={"_blank"}
                  rel={"noreferrer"}
                >                  <h3 className="py-1 text-3xl text-white">Code</h3>
                </a>
                <a
                  href="https://puneet2715.github.io/easyops/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://fileupload.shadowdragon.dev/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://github.com/puneet2715/fileUploadMicroservice"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Code</h3>
                </a>
                <a
                  href="https://fileupload.shadowdragon.dev/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://cafemenu.shadowdragon.dev/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://cafemenu.shadowdragon.dev/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://shorturl.shadowdragon.dev/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://shorturl.shadowdragon.dev/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3 ">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://ourapp.shadowdragon.dev/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://github.com/puneet2715/learningJS"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Code</h3>
                </a>
                <a
                  href="https://ourapp.shadowdragon.dev/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl text-white">Live</h3>
                </a>
              </div>
            </div>
            {/* <div className="flex-1 basis-1/3 ">
              {/*<iframe
                lazy="true"
                layout="responsive"
                src="https://ourapp.shadowdragon.dev/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://github.com/puneet2715/learningJS"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Code</h3>
                </a>
                <a
                  href="https://ourapp.shadowdragon.dev/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div> */}
            {/* <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              />
            </div>
            <div className="flex-1 basis-1/3">
              <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
