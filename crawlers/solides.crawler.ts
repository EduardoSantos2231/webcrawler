import sanitize from "sanitize-html";
import type { SolidesResponse, JobsData } from "../@types/index.js";

export async function fetchSolidesMultipleTimes(numberOfpages: number) {
  const data: JobsData[] = []
  try {
    for (let i = 1; i <= numberOfpages; i++){
    const request = await fetch(
      `https://apigw.solides.com.br/jobs/v3/portal-vacancies-new?page=${i}&title=estagiario&locations=Salvador+-+BA&take=14`,
      { method: "GET", mode: "cors" },
    );
    const newData: SolidesResponse = await request.json();
    const totalPages = newData.data.totalPages
    if (i>totalPages){
      return {data, erro: "Máximo de vagas alcançado"}
    }
    const usefulData: JobsData[] = newData.data.data.map((vaga)=> ({
      platform: "---SOLIDES---",
      title: vaga.title,
      salary: {finalRange: vaga.salary.finalRange},
      redirectLink: vaga.redirectLink,
      address: {
        neighborhood: vaga.address.neighborhood,
        street_address: vaga.address.street_address,
        additional_information: vaga.address.additional_information,
        zip_code: vaga.address.zip_code
      },
      city: {name: vaga.city.name},
      companyName: vaga.companyName,
      description: cleanDescription(vaga.description),
      id: vaga.id,
    }))
    data.push(...usefulData)
    }
    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Parece que algo deu errado na função do fetch Solides");
  }
}

const cleanDescription = (description: string): string => {
  return sanitize(description, {allowedTags: [], allowedAttributes: {}}).replaceAll("\n", "")
};
