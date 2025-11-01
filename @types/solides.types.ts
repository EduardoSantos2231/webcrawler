export interface SolidesResponse {
  success: boolean;
  errors: [];
  data: data;
}

export interface data {
  totalPages: number;
  currentPage: number;
  data: JobsData[];
}

export interface JobsData {
  platform: "---SOLIDES---";
  id: number;
  title: string;
  description: string;
  companyName: string;
  city: {
    name: string;
  };
  redirectLink: string;
  salary: {
    finalRange: number | null;
  };
  address: {
    neighborhood: string;
    street_address: string;
    zip_code: string;
    additional_information: string | null;
  };
}
