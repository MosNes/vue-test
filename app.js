new Vue({
    el: '#vue-app',
    data: {
        name: 'MosNes',
        job: 'Bomp',
        website: 'https://github.com/Mosnes',
        websiteTag: '<a href="https://github.com/Mosnes">GitHub from v-html</a>',
        age: 34,
        x: 0,
        y: 0,
        name2: '',
        age2: '',
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        dudes: [
            { name: 'Yangbo', age: 40 },
            { name: 'Fleb', age: 44 },
            { name: 'Quinchie', age: 23 }
        ],
        health: 100,
        ended: false,
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
        },
        click: function(){
            alert('You clicked it!');
        },
        logName: function() {
            console.log('You entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        },
        punch: function() {
            this.health -= 10;
            if (this.health <= 0){
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }
       
    },
    computed: {
        addToA: function() {
            return this.a + this.age;
        },
        addToB: function() {
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
    });