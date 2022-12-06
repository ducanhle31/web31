let counter={
    value: 0,
    up(){
        this.value++;
        return this;
    },
    down(){
        this.value--;
         return this;
    },
    get(){
        console.log( this.value);
         return this;

    },
    reset(){
        this.value=0;
         return this;
    },
};
counter.up().down().get().reset();