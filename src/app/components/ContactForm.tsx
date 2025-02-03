import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Név megadása kötelező"),
  email: z.string().email("Érvényes email kell"),
  message: z.string().min(5, "Üzenet legalább 5 karakter"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input {...register("name")} placeholder="Név" className="border p-2" />
      <p className="text-red-500">{errors.name?.message}</p>

      <input
        {...register("email")}
        placeholder="Email"
        className="border p-2"
      />
      <p className="text-red-500">{errors.email?.message}</p>

      <textarea
        {...register("message")}
        placeholder="Üzenet"
        className="border p-2"
      />
      <p className="text-red-500">{errors.message?.message}</p>

      <button type="submit" className="bg-blue-500 text-white p-3">
        Küldés
      </button>
    </form>
  );
}
