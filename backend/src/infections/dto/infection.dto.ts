type ComputerInformationDTO = {
  build_id: string;
  infection_date: string;
  ip: string;
  malware_path: string;
  username: string;
  country: string;
  os: string;
  hwid: string;
};

type CredetialsDTO = {
  url: string;
  creds: { username: string; password: string }[];
};

export class InfectionDto {
  id: string;
  log_checksum: string;
  log_file_name: string;
  stealer_type: string;
  computer_information: ComputerInformationDTO;
  credentials: CredetialsDTO[];
}
