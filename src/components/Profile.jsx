const Profile = () => {
    return (
        <div className='content'>
            <div className='background-img'>
                <img src='https://www.hd-freewallpapers.com/latest-wallpapers/desktop-funny-images-of-dogs-and-puppies-download.jpg' />
            </div>
            <div className='avatar-and-description'>
                <img src='https://sun9-26.userapi.com/impg/SdG9NSFTmr3hIhZjMmcQlkgzLiki3q4auMKi8w/QvNTEfEaygc.jpg?size=500x500&quality=96&sign=639305ba38bdec448ee959a41c09384a&type=album' />
                <span>
                Name: Kerb
                </span>
                <p></p>
                <span>
                Age: 23
                </span>
            </div>
            <div className='posts'>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;