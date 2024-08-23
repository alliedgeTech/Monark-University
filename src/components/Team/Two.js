import Image from "next/image";
import Link from "next/link";

export default function SingleTeamTwo( props ) {
	const { teamClass, Slug, Img, Teacher, Designation, imgWidth, imgHeight } = props;
	
	return (
		<>
			
			<div class="faculty-card">
  <div class="content">
    <div class="front">
      <img src={Img} alt="" />
    </div>
    <div class="back">
      <p className="text-start">{Teacher}</p>
    </div>
  </div>
</div>
		</>
	)
}
