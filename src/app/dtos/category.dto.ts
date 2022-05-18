
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator'
import { Category, AccessType } from "../models/category.model";

export interface ICreateCategorytDto extends Omit<Category, 'id'>{}

export class CreateCategoryDto implements ICreateCategorytDto {
  @IsNotEmpty()
  @Length(4,140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'st'
    await validateOrReject(dto);
  } catch (error) {
    console.log(error)
  }
})();