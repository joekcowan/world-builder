import {OverlayTrigger, Tooltip} from "react-bootstrap";


function CustomIcon(props) {
  const faText = 'fa-solid fa-'+props.fa;
  return ( 
    <OverlayTrigger placement={'bottom'} overlay={<Tooltip id={props.id}>{props.text}</Tooltip>}>
      <i class={faText}></i>
    </OverlayTrigger>
   );
}

export default CustomIcon;