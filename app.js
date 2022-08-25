new Vue({
    el: '#vue-app',
    data: {
        name: 'MosNes',
        job: 'Bomp',
        website: 'https://github.com/Mosnes',
        websiteTag: '<a href="https://github.com/Mosnes">GitHub from v-html</a>',
        age: 34,
        x: 0,
        y: 0
    },
    methods: {
        greet: function(timeOfDay){
            this.name
            return `Good ${timeOfDay}, ${this.name}`
        },
        addAge: function(num){
            this.age+=num;
        },
        subtractAge: function(num){
            this.age-=num;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});