function Profile(props){

    const {name,lastname} = props;
    return (
    <h1>
        Name: {name} {lastname}
        {/* {props.children}  */}   {/* get html under tag */}
    </h1>
    );
}
export default Profile;