class Display{
    constructor(displayCurrentValue,displayPreviusValue){
        this.displayCurrentValue = displayCurrentValue
        this.displayPreviusValue = displayPreviusValue
        this.tipoOperacion = undefined
        this.metodos = new Metodos()
        this.currentValue = ''
        this.previusValue = ''
        this.signos =
        {
            sumar: '+',
            restar: '-',
            multiplicar: '*',
            dividir: '/'
        }
    }   

    agregarNumero(numero){
        if(numero === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + numero.toString()
        this.imprimirValores()
    }

    imprimirValores(){
        this.displayCurrentValue.textContent = this.currentValue
        this.displayPreviusValue.textContent = `${this.previusValue} ${this.signos[this.tipoOperation] || ''}`
    }

    computar(tipo){
        this.tipoOperation !== 'igual' && this.calcular()
        this.tipoOperation = tipo;
        this.previusValue = this.currentValue || this.previusValue
        this.currentValue = ""
        this.imprimirValores()        
    }

    borrar(){
        this.currentValue = this.currentValue.toString().slice(0,-1)
        this.imprimirValores()
    }

    borrarTodo(){
        this.currentValue = ""
        this.previusValue = ""
        this.tipoOperation = undefined
        this.imprimirValores()
    }  

              
    calcular(){
        const previusValue = parseFloat(this.previusValue)
        const currentValue = parseFloat(this.currentValue)
        
        if(isNaN(currentValue) || isNaN(previusValue)) return
        this.currentValue = this.metodos[this.tipoOperation](previusValue,currentValue)
    }
 
    
}