import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { File, SparkleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
function ResumeUploadDialog({open,setOpen}:any) {
    const [file,setFile]=useState<any>(null);
    const handlefilechange=(event:any)=>{
        const file= event.target.files?.[0];
        if(file){
            console.log(file.name);
            setFile(file);
        }
    }
    return (
        <div><Dialog open={open} onOpenChange={(value) => {setOpen(value);}}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload Reusme PDF File</DialogTitle>
                    <DialogDescription>
                       <div>
                        <label htmlFor='resume' className='border border-dashed rounded-xl hover:bg-amber-50 transition-all flex flex-col items-center justify-center h-36 w-full cursor-pointer'>
                            <File />

                            {file?<h2>{file.name}</h2>:<h2 className='mt-3'>Upload resume PDF file here</h2>}
                        </label>
                        <input type="file" accept="application/pdf" id="resume" className='hidden'onChange={handlefilechange}/>
                       </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={'outline'}>
                        cancel
                    </Button>
                    <Button variant={'default'}><SparkleIcon/> Upload</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog></div>
    )
}

export default ResumeUploadDialog