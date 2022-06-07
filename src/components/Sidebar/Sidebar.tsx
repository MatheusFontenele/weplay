import { Container } from './SidebarStyles';
import { 
  ChatCenteredText,
  ChatText,
  Compass, 
  CrownSimple, 
  GameController, 
  Gear, 
  Heart, 
  House, 
  ListDashes, 
  Lock, 
  Notepad, 
  Sword, 
  User, 
  UsersThree 
} from 'phosphor-react'
import { Player } from 'src/components/Player/Player'

function Sidebar() {
  return (
    <Container>
      <button><Sword size={28} /> Play</button>
        <ul className='menu'>
          <li>
            <a href="">
              <House size={28} /> 
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <User size={28} /> 
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <Heart size={28} /> 
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a href="">
              <UsersThree size={28} /> 
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href="">
              <Compass size={28} /> 
              <span>Explorer</span>
            </a>
          </li>
          <li>
            <a href="">
              <ListDashes size={28} />
              <span>Categories</span>
            </a>
          </li>
          <li>
            <a href="">
              <CrownSimple size={28} />
              <span>Leaderboard</span>
            </a>
          </li>
        </ul>

        <div className='activeFriends'>
          <span><GameController size={18} />Online Friends</span>

          <div className="online">
            <div className='friends'>
              <Player />
              <ChatCenteredText size={24} />
            </div>
            <div className='friends'>
              <Player />
              <ChatCenteredText size={24} />
            </div>
            <div className='friends'>
              <Player />
              <ChatCenteredText size={24} />
            </div>
          </div>
        </div>

        <footer>
          <ul>
            <li><a href="">Help</a></li>
            <li><a href="">Conditions</a></li>
            <li><a href="">Privacity</a></li>
          </ul>
          <span>&copy; 2022 Matheus SA.</span>
        </footer>
    </Container>
  );
};

export default Sidebar;
