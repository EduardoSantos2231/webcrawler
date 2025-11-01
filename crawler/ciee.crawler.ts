import type { CieeResponse, CieeVaga } from "../@types/ciee.types.js";

export async function fetchCieeMultipleTimes(numberOfPages: number) {
  const data: CieeVaga[] = [];
  try {
    for (let i = 0; i <= numberOfPages; i++) {
      const request = await fetch(
        `https://api.ciee.org.br/vagas/vitrine-vaga/publicadas?page=${i}&size=5&sort=codigoVaga,desc&codigoMunicipio=2927408&tipoVaga=ESTAGIO`,
        { method: "GET", mode: "cors" },
      );
      const response: CieeResponse = await request.json();

      const usefulData: CieeVaga[] = response.content.map((vaga) => ({
        plataforma: "---Ciee----",
        codigoVaga: vaga.codigoVaga,
        salario: vaga.salario,
        areaAtuacao: vaga.areaAtuacao,
        areaProfissional: vaga.areaProfissional,
        atividades: vaga.atividades,
        bolsaAuxilio: vaga.bolsaAuxilio,
        descricao: vaga.descricao,
        horarioEntrada: vaga.horarioEntrada,
        horarioSaida: vaga.horarioSaida,
        local: {
          bairro: vaga.local.bairro,
          cidade: vaga.local.cidade,
        },
        nomeEmpresa: vaga.nomeEmpresa,
        tipoVaga: vaga.tipoVaga,
      }));

      data.push(...usefulData);
      if (response.last) {
        return data;
      }
    }
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Algo deu errado na função de fetch do ciee");
  }
}
