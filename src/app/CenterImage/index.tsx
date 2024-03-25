import { ReactElement } from "react";
import Image, { StaticImageData } from 'next/image';

interface CenterImageProps {
	img: string | StaticImageData;
	alt: string;
}

export default function CenterImage(props: CenterImageProps): ReactElement {
	return <section className="ImageOuterContainer">
		<div className="ImageContainer">
			<Image src={props.img} alt={props.alt} className="Image"/>
		</div>
	</section>
}