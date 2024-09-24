type ComputerInformation = {
  build_id: string;
  infection_date: string;
  ip: string;
  malware_path: string;
  username: string;
  country: string;
  os: string;
  hwid: string;
};

type Credentials = {
  url: string;
  creds: { username: string; password: string }[];
};

export type Infection = {
  id: string;
  log_checksum: string;
  log_file_name: string;
  stealer_type: string;
  computer_information: ComputerInformation;
  credentials: Credentials[];
}
