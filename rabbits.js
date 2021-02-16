class RabbitModel{
    constructor(){
     this.population = 2
    }


    /**
     * 
     * This method just returns the current rabbit population
     */
    getPopulation(){
        return this.population
    }
    /**
     * We want to simulate a single year of rabbits . It says in the hw that 
     * they only grow by one rabbit every year so we just increment it by one
     */
    simulateYear(){

        this.population += 1// this.population++ would work the same
    }

    /**
     * Reset population just resets teh population back the original value
     * 
     */
    resetPopulation(){
        this.population = 2
    }
}