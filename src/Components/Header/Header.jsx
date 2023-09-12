
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2  py-4 max-w-5xl mx-auto'>
             <h1 className='md:text-5xl text-3xl font-bold '>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;