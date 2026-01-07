import { Button } from "@/components/ui/button";
import { Home, Motorbike } from "lucide-react";

export default function HeaderMain(){
  return <>
    <div className="w-full sticky top-0 bg-gray-950 z-10 border-b border-gray-500 h-20 flex items-center px-2" >
      <Button variant={"ghost"} className="cursor-pointer" size={"lg"} asChild>
        <a href="/">
          <Motorbike />
        </a>
      </Button>
    </div>
  </>
}