import { ClassConstructor, Expose, Type } from 'class-transformer';

export function ListResponse<T>(ItemDTO: ClassConstructor<T>) {
  class TypedListResponseDTO {
    @Expose()
    next: string | null;

    @Expose()
    previous: string | null;

    @Expose()
    count: number;

    @Expose()
    @Type(() => ItemDTO)
    results: T[];
  }

  return TypedListResponseDTO;
}
