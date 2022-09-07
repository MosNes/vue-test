Vue.component('greeting', {
    template: `<p>Re-usable Component for {{ name }}. <button v-on:click="changeName">Change Name</button></p>`,
    data: function(){
        return {
            name: 'Yoshimitsu'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Morrobonk'
        }
    }
});

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
        refOutput: 'Test'
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
        },
        //read refs with $refs
        readRefs: function() {
            console.log(this.$refs.testRef.innerText);
            this.refOutput = this.$refs.input.value;
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