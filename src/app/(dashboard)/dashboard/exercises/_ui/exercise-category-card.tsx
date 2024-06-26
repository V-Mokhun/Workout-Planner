import { BasicExercise } from "@/db";
import { Heading } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";

interface ExerciseCategoryCardProps<T extends BasicExercise> {
  route: string;
  data: T;
}

export const ExerciseCategoryCard = <T extends BasicExercise>({
  data,
  route,
}: ExerciseCategoryCardProps<T>) => {
  return (
    <li>
      <Link
        href={route}
        className="flex flex-col group bg-muted rounded-md shadow-sm"
      >
        <div className="relative after:block after:inset-0 after:absolute after:rounded-t-md after:bg-transparent after:transition-colors group-hover:after:bg-black/20">
          <Image
            className="w-full h-auto object-cover rounded-t-md"
            width={480}
            height={300}
            src={data.image!}
            alt={data.name}
          />
        </div>
        <Heading
          tag="h5"
          className="py-2 px-2 md:px-4 transition-colors group-hover:text-primary"
        >
          {data.name}
        </Heading>
      </Link>
    </li>
  );
};
