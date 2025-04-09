"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

import FormFields from "./FormFields";
import { Button } from "./ui/button";
import { formSchema } from "@/lib/validations";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = () => {
    console.log(form.getValues());
    router.push("/dashboard");
    // submit the form data here
    // handle form submission logic
    form.reset(); // clear the form after submission
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormFields
          label="Username"
          name="username"
          placeholder="Enter your username."
          type="text"
          control={form.control}
        />
        <FormFields
          label="Password"
          name="password"
          placeholder="Enter your password."
          type="password"
          control={form.control}
        />

        <Button
          className="w-full bg-green-600 py-4 rounded-md  hover:bg-green-700 transition-all"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
