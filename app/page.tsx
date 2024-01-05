"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type TLogInput = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLogInput>();

  const onSubmit: SubmitHandler<TLogInput> = (data) => console.log(data);

  return (
    <div className="bg-slate-100 w-100 h-fit">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("email")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <button className="btn btn-primary">Hello World!</button>
    </div>
  );
}
