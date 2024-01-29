"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"
import { CldUploadWidget } from 'next-cloudinary';


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
import { toast } from "sonner"
import Image from "next/image"
import { useCallback, useState } from "react"
import { useAccount } from "wagmi"

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
  price: z.string(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>


export default function page() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  const { isConnected, address} = useAccount();
  const [url, setUrl] = useState<string>('/img1.jpg')
  const [addres, setAddress] = useState<String>();

  const onSubmit = async (data: ProfileFormValues) => {

    try {
      setAddress(address);
      const modifiedData = { ...data, nfturl: url, address: address };

      const response = await fetch('http://localhost:3000/api/createmem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifiedData),
      });
      toast("Successfully created new membership.");

      if (response.ok) {
        console.log('Membership created successfully');
        // Add any additional logic or redirection after successful submission
      } else {
        console.error('Failed to create membership');
        // Handle errors or display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      toast("Something went wrong!");
    }
  };


  return (
    <section className="flex gap-2">
    <section className="flex-1 lg:max-w-2xl">
      <CldUploadWidget
        uploadPreset="truenft_upload"
        onSuccess={(result, { widget }) => {
          // console.log(result?.info);
          const resultWithInfo = result as { info?: { url?: string } };

          if (resultWithInfo.info && resultWithInfo.info.url) {
            setUrl(resultWithInfo.info.url);
          }
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            // setResource(undefined);
            open();
          }
          return (
            <Button className="my-3" onClick={handleOnClick} variant={"outline"}>
              Upload NFT
            </Button>
          );
        }}
      </CldUploadWidget>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price of NFT in ETH</FormLabel>
              <FormControl>
                <Input className="w-32" placeholder="23" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Create New Membership</Button>
      </form>
    </Form>
    </section>
    <section className="mx-6 px-4 pt-4  rounded-md h-[484px] hidden lg:block md:block">
        <Image className="border border-primary-muted p-2" src={url} alt="image" height={300} width={300}/>
    </section>
    </section>
  )
}
