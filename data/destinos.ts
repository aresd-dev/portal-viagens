export interface Destino {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    imagem: "/imagens/images.jpg",
    descricao:
      "Cidade maravilhosa, com praias famosas como Copacabana e Ipanema, o Cristo Redentor e o Pão de Açúcar.",
  },
  {
    id: "fernando-de-noronha",
    nome: "Fernando de Noronha",
    imagem: "/imagens/image.png",
    descricao:
      "Arquipélago paradisíaco com águas cristalinas, ótimo para mergulho e observação de golfinhos.",
  },
  {
    id: "chapada-diamantina",
    nome: "Chapada Diamantina",
    imagem: "/imagens/Parque_Nacional_Chapada_Diamantina_Rafael_Cristo_Watanabe_04.jpg",
    descricao:
      "Parque nacional na Bahia com cachoeiras, grutas e trilhas para quem gosta de natureza e aventura.",
  },
  {
    id: "gramado",
    nome: "Gramado",
    imagem: "/imagens/d686ab22e2acaa19ac171e844aa640d5-scaled.jpeg.webp",
    descricao:
      "Cidade serrana no Rio Grande do Sul, conhecida pela arquitetura europeia e o clima frio no inverno.",
  },
];