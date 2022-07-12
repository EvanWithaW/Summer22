// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

function pAequorFactory(num,arr){
    const new_pAequor = {
        dna: arr,
        specimenNum: num,
        mutate(){
            let random_ind = Math.floor(Math.random() * 15)
            let new_base = returnRandBase();
            if(new_base != this.dna[random_ind]){
                this.dna[random_ind] = new_base;
                return this.dna;
            }
        },
        compareDNA(obj){
            let total = 0;
            for(let i = 0;i<15;i++){
                if(this.dna[i] === obj.dna[i]){
                    total += 1;
                }
            }
            let percent = total/15 * 100;
            console.log(`specimen #1 and specimen #2 have ${percent}% DNA in common. `);
        },
        willLikelySurvive(){
            let total = 0;
            for(let i = 0; i<15;i++){
                if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                    total += 1;
                }
            }
            let percent = total / 15 * 100;
            if(percent < 60){
                return false;
            }
            else{
                return true;
            }
        }
    }
    return new_pAequor;
}
// testing func calls
study_arr = []
for(let i = 1; i<31;i++){
    study_arr.push(pAequorFactory(i,returnRandBase()));
}
// shows all new organism objects with built-in methods.
console.log(study_arr);