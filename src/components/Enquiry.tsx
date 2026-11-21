import { useEffect, useId, useRef, useState, type FormEvent } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function Enquiry({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className="w-[min(100%-2rem,32rem)] rounded-2xl border border-white bg-paper p-6 text-ink shadow-xl backdrop:bg-ink/50"
      onClose={onClose}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id={titleId} className="font-serif text-2xl">
          Book an implant consultation
        </h2>
        <button type="button" className="text-sm underline" onClick={onClose}>
          Close
        </button>
      </div>
      {sent ? (
        <p className="mt-4" role="status">
          Request received — this is a prototype. Nothing was sent to the clinic.
        </p>
      ) : (
        <form className="mt-4 grid gap-3" onSubmit={submit}>
          <label className="grid gap-1 text-sm">
            Name
            <input required name="name" className="rounded-lg border border-ink/15 bg-white px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm">
            Email
            <input required type="email" name="email" className="rounded-lg border border-ink/15 bg-white px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm">
            Phone
            <input required type="tel" name="phone" className="rounded-lg border border-ink/15 bg-white px-3 py-2" />
          </label>
          <label className="grid gap-1 text-sm">
            Preferred time
            <input required name="time" className="rounded-lg border border-ink/15 bg-white px-3 py-2" />
          </label>
          <label className="flex items-start gap-2 text-sm">
            <input required type="checkbox" name="consent" className="mt-1" />
            <span>I agree this prototype may store these details in the browser only, so the confirmation can be shown. Nothing is sent.</span>
          </label>
          <button className="cta mt-2" type="submit">
            Send request
          </button>
        </form>
      )}
    </dialog>
  );
}
