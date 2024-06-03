import Image from "next/image";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { productAddData } from '@/redux/product/actionCreator';

export default function SingleCourse( props ) {
	const { Title,Title2,Title3,Mains} = props;

	const dispatch = useDispatch();

	const handleCart = (productID) => {
		dispatch(productAddData(productID));
	};

	return (
		<div className="container">
			 <h2 className="it-section-title-3" style={{textAlign:"center" , marginBottom:50}}>Teaching scheme & Syllabus</h2>

		<table className="table">
			<tbody>
				<tr>
					<td>
						{Title}
					</td>
				</tr>
				<tr>
					<td>
						{Title2}
					</td>
				</tr>
				<tr>
					<td>
						{Title3}
					</td>
				</tr>
			</tbody>
		</table>
		</div>
	)
}
