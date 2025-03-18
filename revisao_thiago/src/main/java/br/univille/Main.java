package br.univille;
import br.univille.entity.Cidade;
import br.univille.entity.Cliente;
import br.univille.entity.Pokemon;

public class Main {
    public static void main(String[] args) {
        // System.out.println("Hello world!");
        Cidade joinville = new Cidade();
        joinville.setNome("Joinville");
        joinville.setEstado("Santa-Catarina");

        Pokemon deoxys = new Pokemon("Deoxys");

        Cliente zezinho = new Cliente("Zezinho");
        zezinho.setNome("Zezinho da Silva Sauro");
        zezinho.setCidade(joinville);

        zezinho.getListaPokemon().add(deoxys);

        Cliente mariazinha = new Cliente();
        mariazinha.setNome("Mariazinha");

    
        System.out.println(zezinho);
        System.out.println(mariazinha);
    }
}
