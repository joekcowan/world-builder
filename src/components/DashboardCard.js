import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import CustomIcon from './CustomIcon';

function DashboardCard(props) {

  const navigate = useNavigate();
  const handleNavigateClick = () => {
    navigate(props.navigateTo);
  };

  //icon options
  let cardIcon = '';
  if(props.icon){
    cardIcon = <i className={"fa-solid fa-"+props.icon}></i>;
  }

  return (
    <>
      <Card
        bg={props.variant.toLowerCase()}
        // border={'dark'}
        key={props.key}
        text={props.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{width: '18rem', minHeight: '10rem'}}
        className="mb-2 card-hover w-auto shadow-sm bg-gradient h-100"
        onClick={handleNavigateClick}
      >
        <Card.Body>
          <Card.Title>{cardIcon} {props.title} <i class="fa-solid fa-arrow-right"></i></Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DashboardCard;