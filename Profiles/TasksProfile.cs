﻿using AutoMapper;
using Lab2.Models;
using Lab2.ViewModels;

namespace Lab2.Profiles
{
    public class TasksProfile : Profile
    {
        public TasksProfile()
        {
            CreateMap<Task, TaskDto>()
                .ForMember(
                    dest => dest.Importance,
                    opt => opt.MapFrom(src => src.Importance.ToString()))
                .ForMember(
                    dest => dest.State,
                    opt => opt.MapFrom(src => src.State.ToString()))
                .ForMember(
                    dest => dest.NumberOfComments, 
                    opt => opt.MapFrom(src => src.Comments.Count));

            CreateMap<TaskCreationDto, Task>();
        }

    }
}
