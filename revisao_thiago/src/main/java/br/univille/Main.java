package br.univille;

public class Main {
    public static void main(String[] args) {
        // System.out.println("Hello world!");

        Cliente zezinho = new Cliente("Zezinho");
        zezinho.setNome("Zezinho da Silva Sauro");
        Cliente mariazinha = new Cliente();
        mariazinha.setNome("Mariazinha");

    
        System.out.println(zezinho);
        System.out.println(mariazinha);
    }
}
