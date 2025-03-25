package br.univille.entity;

import java.util.ArrayList;

public class Cliente {
    // Variavel, atributo vv
    private long id;
    private String nome;
    private String endereco;
    private ArrayList<Pokemon> listaPokemon = new ArrayList<Pokemon>(); //Aceita qualquer tipo de dado primitivo (Int, Float, String, Boolean)
    //^^Autobox: escreve em tipo primitivo e transforma para objeto 
    private Cidade cidade;
    //<> ---> "Operador diamante", quando tu coloca isso com o Array, ela se torna uma lista genérica que aceita somente o que você colocou nele 
    public ArrayList<Pokemon> getListaPokemon() {
        return listaPokemon;
    }
    public void setListaPokemon(ArrayList<Pokemon> listaPokemon) {
        this.listaPokemon = listaPokemon;
    }


    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    // Contrutor: mesmo nome da classe e não tem o retorno, e serve para: 1- inicializar atributos; 2- obrigar a passagem de valores.
    public Cliente(String nome) {
        this.nome = nome;
    }
    //Polimorfismo: coisas que existem de duas maneiras (no caso, pode ou não escoher o nome do Cliente ^v)
    public Cliente(){
    }

    //metódo
    //Sobreescrita de método (meu pai me deu pronto e eu reescrevi)
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

    public Cidade getCidade() {
        return cidade;
    }
    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
}

