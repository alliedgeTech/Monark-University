import Image from "next/image";
import Link from "next/link";

export default function SingleTeamTwo( props ) {
	const { teamClass, Slug, Img, Teacher, Designation, imgWidth, imgHeight } = props;
	
	return (
		<>
			
			<div className="faculty-card">
  <div className="content">
    <div className="front">
      <img src={Img} alt="" />
    </div>
    <div className="back">
      <p className="text-start">{Teacher}</p>
    </div>
  </div>
</div>
		</>
	)
}
