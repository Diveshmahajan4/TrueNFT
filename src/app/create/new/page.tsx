"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"

const profileFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  subtitle: z
    .string()
    .min(2, {
      message: "Subtitle must be at least 2 characters.",
    })
    .max(80, {
      message: "Subtitle must not be longer than 80 characters.",
    }),
  benifits: z.string().max(160).min(4),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>


export default function page() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })


  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <section className="flex gap-2">
    <section className="flex-1 lg:max-w-2xl">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => ({})}
          >
            Add NFT Image
          </Button>
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="bored ape" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subtitle</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Coolest NFT of all time"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write about your NFT.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="benifits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Benfits of Membership</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Be a part of exclusive community"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can list the benefits of your membership here.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Create New Membership</Button>
      </form>
    </Form>
    </section>
    <section className="mx-6 px-4 pt-4 border border-primary-muted rounded-md h-[484px] hidden lg:block md:block">
        <Image src="/img1.jpg" alt="image" height={300} width={300}/>
    </section>
    </section>
  )
}
