package br.univille;

public class Cliente {
    // Variavel, atributo vv
    private String nome;

    // Contrutor: mesmo nome da classe e não tem o retorno, e serve para:
    //1- inicializar atributos
    //2- obrigar a passagem de valores
    public Cliente(String nome) {
        this.nome = nome;
    }
    //Polimorfismo: coisas que existem de duas maneiras (no caso, pode ou não escoher o nome do Cliente ^v)
    public Cliente(){
        
    }
    //metódo
    public String toString(){
        return getNome();
    }

    //Método vv (ou função)
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    //encapsulamento = esconder a implementação dentro do objeto
}

