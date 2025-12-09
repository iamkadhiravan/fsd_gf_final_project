"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const QuotationModal = ({
  isOpen,
  onClose,
  productName,
}: QuotationModalProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: "",
    notes: "",
  });

  // -----------------------------------------
  // ✅ SUBMIT — Send data to MongoDB Backend
  // -----------------------------------------
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://fsd-greenfarmly-project.onrender.com/api/quotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          product: productName,
          quantity: formData.quantity,
          notes: formData.notes,
        }),
      });
      
      const data = await response.json();

      if (data.success) {
        toast({
          title: "Quotation Sent!",
          description: "Your request has been submitted successfully.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          quantity: "",
          notes: "",
        });

        onClose(); // Close modal
      } else {
        toast({
          title: "Error",
          description: data.error || "Could not save data.",
        });
      }
    } catch (err) {
      toast({
        title: "Server Error",
        description: "Backend not reachable. Make sure backend is running.",
      });
    }

    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Request Quotation</DialogTitle>
          <DialogDescription>
            Fill the form below to request a quotation for{" "}
            <strong>{productName}</strong>.
          </DialogDescription>
        </DialogHeader>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Example@gmail.com"
            />
          </div>

          <div>
            <Label>Quantity</Label>
            <Input
              type="number"
              required
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              placeholder="Enter quantity"
            />
          </div>

          <div>
            <Label>Notes (Optional)</Label>
            <Textarea
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Any additional details"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Submit Request
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
