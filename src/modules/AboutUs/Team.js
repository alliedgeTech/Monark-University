import Image from "next/image";
import SingleTeamTwo from "@/components/Team/Two";
import Teachers from "@/data/teachers";

export default function Team() {
  return (
    <>
      <div id="leadership">
        <div className="it-team-3-area p-relative z-index pt-110 pb-90">
          <Image
            src="/img/team/bg-3.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box text-center pb-40">
                  <span className="it-section-subtitle-3 text-white">
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                    Team Monark
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                  </span>
                  <h2 className="it-section-title-3 text-white">
                    Leadership Team
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {Teachers.map((teacher) => {
                return (
                  <div className="col-xl-2 col-lg-4 col-md-6 mb-30">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(0, 10)}
            </div>
          </div>
        </div>
        <div
          className="it-funfact-5-area it-funfact-5-bg p-relative fix yellow-bg pt-100 pb-60"
          data-background="/img/funfact/bg-2.png"
		  id="officersandauthority"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box text-center pb-40">
                  <span className="it-section-subtitle-3 text-white">
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                    Team Monark
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                  </span>
                  <h2 className="it-section-title-3 text-white">
                    List of Officers
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {Teachers.map((teacher) => {
                return (
                  <div className="col-xl-2 col-lg-4 col-md-6 mb-30">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(11, 31)}
            </div>
          </div>
        </div>
        <div className="it-team-3-area p-relative z-index pt-110 pb-90">
          <Image
            src="/img/team/bg-3.png"
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box text-center pb-40">
                  <span className="it-section-subtitle-3 text-white">
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                    Team Monark
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                  </span>
                  <h2 className="it-section-title-3 text-white">
                    List of Dean
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {Teachers.map((teacher) => {
                return (
                  <div className="col-xl-2 col-lg-4 col-md-6 mb-30">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(32, 42)}
            </div>
          </div>
        </div>
		<div
          className="it-funfact-5-area it-funfact-5-bg p-relative fix yellow-bg pt-100 pb-60"
          data-background="/img/funfact/bg-2.png"
		  id="committeessgrc"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box text-center pb-40">
                  <span className="it-section-subtitle-3 text-white">
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                    Team Monark
                    <Image
                      src="/img/about/bg-2.svg"
                      width={23}
                      height={17}
                      alt=""
                    />
                  </span>
                  <h2 className="it-section-title-3 text-white">
                    Committee of SGRC
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {Teachers.map((teacher) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(45, 49)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
