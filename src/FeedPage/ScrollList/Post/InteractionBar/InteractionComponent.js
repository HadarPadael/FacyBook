function InteractionComponent({icon}){
    return (
      <div className="col-4 btn btn-light reactionBtn">
        <div className={icon}/>
      </div>
    );
}

export default InteractionComponent;