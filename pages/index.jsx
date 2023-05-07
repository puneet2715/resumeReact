import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Resume/Portfolio</title>
      </Head>
      <main className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40 max-xs:px-4 max-xxs:px-4">
        <section className="min-h-screen">
          <nav className="flex justify-between py-8 my-0 mb-12 dark:text-white max-xs:block">
            <h1 className="text-xl font-burtons max-xs:text-sm max-xs:flex max-xs:justify-center">
              developedbyPuneet
            </h1>
            <ul className="flex justify-center max-xs:mt-6">
              <li>
                {/* <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl cursor-pointer "
                /> */}
              </li>
              <li>
                <a
                  className="px-4 py-2 border-none rounded-md ml-text-white bg-gradient-to-r from-cyan-500 text- to-teal-500 max-xs:text-sm"
                  href="https://filebrowser.shadowdragon.one/share/Pug99a66"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
            {/* <div className="flex justify-center gap-16 text-3xl text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillTwitterCircle />
            </div> */}
          </nav>
          <div className="p-10 py-10 text-center max-xs:px-6">
            <h2 className="py-2 text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl max-xs:text-2xl max-xxs:text-xl">
              Puneet Arora
            </h2>
            <h3 className="py-2 text-2xl dark:text-white md:text-3xl max-xs:text-xl max-xxs:text-sm">
              Software Developer.
            </h3>
            <p className="max-w-xl py-5 mx-auto leading-8 text-gray-800 text-md dark:text-gray-200 md:text-xl max-xs:text-base max-xxs:text-base">
              I read more to write less (Code)
            </p>
            <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-400 max-xs:gap-8 max-xs:text-2xl max-xxs:text-base">
              <a
                href="https://www.linkedin.com/in/puneet2715/"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/puneet2715"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/BadLfeDecisions"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="mailto:puneet@shadowdragon.tech"
                target={"_blank"}
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
            </div>
            <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96 max-xs:h-52 max-xs:w-52 max-xxs:h-40 max-xxs:w-40">
              <Image
                priority={true}
                className="max-xxs:justify-center"
                // loading="lazy"
                // src={"/profile.jpg"}
                src={"https://ik.imagekit.io/puneet2715/myself.jpg"}
                layout="fill"
                objectFit="cover"
                alt="Profile Image"
              />
              {/* <IKImage
                className="object-cover"
                urlEndpoint="https://ik.imagekit.io/puneet2715/"
                path="/profile.jpg"
                transformation={[{
                  "height": "200",
                  "width": "200"
                }]}
                lqip={{ active: true }}
              /> */}
            </div>
          </div>
        </section>
        <section>
          <div className="mx-auto">
            <h2 className="py-1 text-3xl dark:text-white ">Education</h2>
            <h3 className="py-1 text-2xl dark:text-teal-400 ">
              Bachelor of Computer Applications
            </h3>
            <p className="py-2 text-lg leading-8 text-gray-800 dark:text-gray-200">
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
          <div className="pt-10">
            <h2 className="py-1 text-3xl dark:text-white ">Experience</h2>
          </div>
          <div className="gap-10 lg:flex max-w-8xl max-h-max">
            <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-gradient-to-r from-cyan-500 text- to-teal-600">
              <Image
                lazy="true"
                src={"https://ik.imagekit.io/puneet2715/3d-comp.jpg"}
                width={300}
                height={250}
                alt="random png"
              />
              <p className="text-xs">
                Illustration from{" "}
                <a
                  href="https://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#&position=3&from_view=undefinedhttps://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#&position=3&from_view=undefined"
                  target={"_blank"}
                  rel="noreferrer"
                  className="underline"
                >
                  Freepik
                </a>
              </p>
              <h3 className="pt-8 pb-2 text-lg font-medium text-purple-600">
                Back-End Dev @ <a
                  href="https://www.linkedin.com/company/attendit1/about/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="hover:underline"
                >
                  ATTENDIT
                </a>
              </h3>
              <p className="py-2">
                Comepleted day to day tasks like -&gt; <br /> Contribution in
                development of the REST APIs and password hashing and storing.
              </p>
              <h4 className="py-4 text-purple-600">Tech Stack </h4>
              <p className="py-1 text-gray-900">Nest.Js - Javascript</p>
              <p className="py-1 text-gray-900">MongoDb - Database (NoSQL)</p>
            </div>
            <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-gradient-to-r from-cyan-500 text- to-teal-600">
              <Image
                lazy="true"
                src={"https://ik.imagekit.io/puneet2715/3d-comp.jpg"}
                width={300}
                height={250}
                alt="random png"
              />
              <p className="text-xs">
                Illustration from{" "}
                <a
                  href="https://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#&position=3&from_view=undefinedhttps://www.freepik.com/free-psd/3d-rendering-graphic-design_31164759.htm#&position=3&from_view=undefined"
                  target={"_blank"}
                  rel="noreferrer"
                  className="underline"
                >
                  Freepik
                </a>
              </p>
              <h3 className="pt-8 pb-2 text-lg font-medium text-purple-600">
                Software Developer @{" "}
                <a
                  href="https://www.easyops.in/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="hover:underline"
                >
                  EasyOps
                </a>
              </h3>
              <p className="py-2">
                Comepleting assignments and daily standups {/*-&gt;*/} <br />
              </p>
              <h4 className="py-4 text-purple-600">Tech Stack </h4>
              <p className="py-1 text-gray-900">
                TypeScript
              </p>
              <p className="py-1 text-gray-900">
                AWS
              </p>
              <p className="py-1 text-gray-900">
                Next.Js/React.Js - Javascript
              </p>
              <p className="py-1 text-gray-900">
                MaterialUi/TailwindCss/ChakraUi - Css
              </p>
              <p className="py-1 text-gray-900">MongoDb - Database (NoSQL)</p>
            </div>

            <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-gradient-to-r from-cyan-500 text- to-teal-600">
              <Image
                lazy="true"
                src={"https://ik.imagekit.io/puneet2715/open-source.jpg"}
                width={300}
                height={250}
                alt="random png"
              />
              <p className="text-xs">
                Illustration from{" "}
                <a
                  href="https://www.freepik.com/free-photo/3d-illustration-open-closed-books-pencil_33309550.htm#&position=1&from_view=undefined"
                  target={"_blank"}
                  rel="noreferrer"
                  className="underline"
                >
                  Freepik
                </a>
              </p>
              <h3 className="pt-8 pb-2 text-lg font-medium text-purple-600">
                Open Source Contribution
              </h3>
              <p className="py-2">
                Repository Link -&gt; <br />
                <a
                  href="https://github.com/ChristianLempa/cheat-sheets"
                  target={"_blank"}
                  rel="noreferrer"
                  className="font-mono text-purple-600"
                >
                  Cheat-Sheets
                </a>
                <br />
                ( This is my first pr ) Pull Request Link -&gt; <br />
                <a
                  href="https://github.com/ChristianLempa/cheat-sheets/pull/72"
                  target={"_blank"}
                  rel="noreferrer"
                  className="font-mono text-purple-600"
                >
                  Added Cloud Notes
                </a>
              </p>
              <h4 className="py-4 text-purple-600">Tech Stack </h4>
              <p className="py-1 text-gray-900">Git - GitHub</p>
              {/* <p className="py-1 text-gray-900">MongoDb - Database (NoSQL)</p> */}
            </div>
            {/* <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-neutral-600">
              <Image src={"/images/profile.jpg"} width={200} height={200} />
              <h3 className="pt-8 pb-2 text-lg font-medium ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Illustrator</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Indesign</p>
            </div> */}
            {/* <div className="flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-neutral-600">
              <Image src={"/images/profile.jpg"} width={200} height={200} />
              <h3 className="pt-8 pb-2 text-lg font-medium ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 text-gray-800">Photoshop</p>
              <p className="py-1 text-gray-800">Illustrator</p>
              <p className="py-1 text-gray-800">Figma</p>
              <p className="py-1 text-gray-800">Indesign</p>
            </div> */}
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="py-1 text-3xl dark:text-white">Portfolio</h3>
            {/* <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="py-2 leading-8 text-gray-800 text-md dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
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
                  <h3 className="py-1 text-3xl dark:text-white">Code</h3>
                </a>
                <a
                  href="https://puneet2715.github.io/gitissuessimplified/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3 ">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://carfrontend.shadowdragon.one/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                {/* <a
                  href="https://github.com/puneet2715/gitissuessimplified"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Code</h3>
                </a> */}
                <a
                  href="https://carfrontend.shadowdragon.one/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              <iframe
                lazy="true"
                layout="responsive"
                src="https://puneet2715.github.io/easyops/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                {/* <a href="#" target={"_blank"}><h3 className="py-1 text-3xl dark:text-white">Code</h3></a> */}
                <a
                  href="https://github.com/puneet2715/easyops"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Code</h3>
                </a>
                <a
                  href="https://puneet2715.github.io/easyops/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              {/* <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              /> */}
              <iframe
                lazy="true"
                layout="responsive"
                src="https://fileupload.shadowdragon.one/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                <a
                  href="https://github.com/puneet2715/fileUploadMicroservice"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Code</h3>
                </a>
                <a
                  href="https://fileupload.shadowdragon.one/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              {/* <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              /> */}
              <iframe
                lazy="true"
                layout="responsive"
                src="https://cafemenu.shadowdragon.one/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                {/* <a href="#" target={"_blank"}><h3 className="py-1 text-3xl dark:text-white">Code</h3></a> */}
                <a
                  href="https://cafemenu.shadowdragon.one/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              {/* <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              /> */}
              <iframe
                lazy="true"
                layout="responsive"
                src="https://shorturl.shadowdragon.one/"
                height={"650px"}
                width={"100%"}
              ></iframe>
              <div className="flex gap-9">
                {/* <a href="#" target={"_blank"}><h3 className="py-1 text-3xl dark:text-white">Code</h3></a> */}
                <a
                  href="https://shorturl.shadowdragon.one/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3 ">
              {/* <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              /> */}
              <iframe
                lazy="true"
                layout="responsive"
                src="https://ourapp.shadowdragon.one/"
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
                  href="https://ourapp.shadowdragon.one/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
            <div className="flex-1 basis-1/3 ">
              {/* <Image
                className="object-cover rounded-lg"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/images/profile.jpg"}
              /> */}
              <iframe
                lazy="true"
                layout="responsive"
                src="https://ourapp.shadowdragon.one/"
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
                  href="https://ourapp.shadowdragon.one/"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <h3 className="py-1 text-3xl dark:text-white">Live</h3>
                </a>
              </div>
            </div>
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
