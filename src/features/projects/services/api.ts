import axiosInstance from "../../../lib/axiosInstance";
import type { CreateProjectDto } from "../types";
import { API } from "@/lib/routes"; 

// we already added  prefix /api in axios config

export const fetchProjects = async () => {
  const res = await axiosInstance.get(API.PROJECTS.ALL);
  return res.data;
};

export const fetchCreateProject = async (projectDto: CreateProjectDto) => {
  const res = await axiosInstance.post(API.PROJECTS.CREATE, projectDto);
  return res.data;
};
