import { useSelector } from "react-redux";

const Profile = () => {
  const {currentUser} = useSelector(state => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7 '>Profile</h1>
      <form className="flex flex-col gap-4" action="">
        <img src={currentUser.data.profilePicture} alt="Profile Picture" className="h-24 w-24 self-center rounded-full cursor-pointer object-cover mt-2"/>
        <input defaultValue={currentUser.data.username} type="text" id="username" placeholder="Username" className="bg-slate-200 rounded-lg p-3 "/>
        <input defaultValue={currentUser.data.email} type="email" id="email" placeholder="Email" className="bg-slate-200 rounded-lg p-3 "/>
        <input type="password" id="password" placeholder="Password" className="bg-slate-200 rounded-lg p-3 "/>
        <button className="uppercase bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
