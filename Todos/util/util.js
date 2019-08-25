function uniqueId() {
    let x = new Date().getTime();
    console.log("x: ", x);
    return x;
}

export default uniqueId;
