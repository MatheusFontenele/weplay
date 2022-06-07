import { Container } from './PlayerStyles';

export function Player() {
  return (
    <Container>
      <div className="avatarIcon">
        <img 
          src="https://avatars.githubusercontent.com/u/94790993?v=4" 
          alt=""
          className='avatar' 
        />
        <div className="indicator ">
          <div className="status offline"></div>
        </div>
      </div>
      <div className="profile">
        <span className='nickname'>Heusta</span>
        <span className='game'>League of Legends</span>
      </div>
    </Container>
  );
};

