const SkillCard = (props) => {
    return (
        <div className="col-md-6">
            <img src={props.img} style={{ width: '100px', height: '100px' }} />
            <p >
                {props.description}
            </p>
        </div>
    );
}

export default SkillCard;