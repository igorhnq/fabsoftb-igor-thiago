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
        Pokemon rayquaza = new Pokemon("Rayqueza");
        Pokemon metagross = new Pokemon("Metagross");
        Pokemon blaziken = new Pokemon("Blaziken"); 
        Pokemon eevee = new Pokemon("Eevee");
        Pokemon gyarados = new Pokemon("Gyarados");
        Pokemon trevenant = new Pokemon("Trevenant");

        Cliente zezinho = new Cliente("Zezinho");
        zezinho.setNome("Zezinho da Silva Sauro");
        zezinho.setCidade(joinville);
        //Estão em comentário pq agora o Array tem um "Operador diamante" limitando o tipo de dados;
        zezinho.getListaPokemon().add(deoxys);
        //zezinho.getListaPokemon().add("v Meu time de pokemon :) v");
        zezinho.getListaPokemon().add(rayquaza);
        zezinho.getListaPokemon().add(metagross);
        zezinho.getListaPokemon().add(blaziken);
        zezinho.getListaPokemon().add(eevee);
        zezinho.getListaPokemon().add(gyarados);
        zezinho.getListaPokemon().add(trevenant);
        //zezinho.getListaPokemon().add(234567);
        //zezinho.getListaPokemon().add(1.3);
        //zezinho.getListaPokemon().add(false);
        

        for(int i=0; i<zezinho.getListaPokemon().size(); i++){
            var umPokemon = zezinho.getListaPokemon().get(i);
            System.out.println(umPokemon);
        }
        for(var umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }
        //gere um codigo para listar os pokemons utilizando o método stream
        zezinho.getListaPokemon().stream().forEach(System.out::println);

        Cliente mariazinha = new Cliente();
        mariazinha.setNome("Mariazinha");

    
        System.out.println(zezinho);
        System.out.println(mariazinha);
    }
}
