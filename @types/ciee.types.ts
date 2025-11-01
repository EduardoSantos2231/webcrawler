export interface CieeVaga{
  plataforma: "---Ciee----"
  codigoVaga: number,
  tipoVaga: string,
  nomeEmpresa: string,
  areaAtuacao: string | null,
  salario: number | null,
  bolsaAuxilio: number | null,
  local: LocalTrabalho,
  horarioEntrada: string | null,
  horarioSaida: string | null,
  descricao: string | null,
  atividades: string[]
}

interface LocalTrabalho {
  bairro: string,
  cidade: string
}


export interface CieeResponse {
  content: CieeVaga[],
  pageable: {},
  last: boolean,
  totalPages: number,
  
}