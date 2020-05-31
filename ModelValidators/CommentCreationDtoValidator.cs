using FluentValidation;
using Lab2.ViewModels;

namespace Lab2.ModelValidators
{
    public class CommentCreationDtoValidator : AbstractValidator<CommentCreationDto>
    {
        public CommentCreationDtoValidator()
        {
            RuleFor(x => x.Text).MinimumLength(10);
        }
    }
}
