import axios from "axios";

import { Criterias } from "@/models/Criterias";
import { APIResult } from "@/models/APIResult";

// const API_KEY = "fb1fffffa1e09a0888bbe10987edfc";

export const api = axios.create({
  baseURL: "http://localhost:4200",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${API_KEY}`,
  },
});

export const getInfections = async (criterias: Criterias) => {
  try {
    const response = await api.post<APIResult>("/infections", criterias);
    console.log("response:", response);
    if ([200, 201].includes(response.status)) {
        return response.data;
    }
  } catch (err) {
    console.log("err: ", err);
  }
};

// 401 - Unauthorized
// 422 - Validation