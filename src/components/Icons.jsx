export function BracketsRounded() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      className="mt-1"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="green"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2.4}
        d="M8 4a9 9 0 0 0 0 16m8 0a9 9 0 0 0 0-16"
      ></path>
    </svg>
  );
}


export function NewPostIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#fdf4f4" d="M7.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H8v2.5a.5.5 0 0 1-1 0V8H4.5a.5.5 0 0 1 0-1H7V4.5a.5.5 0 0 1 .5-.5" /></svg>
  )
}

export function EditPostIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#fdf4f4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15.214 5.982l1.402-1.401a1.982 1.982 0 0 1 2.803 2.803l-1.401 1.402m-2.804-2.804L6.98 14.216c-1.045 1.046-1.568 1.568-1.924 2.205S4.342 18.561 4 20c1.438-.342 2.942-.7 3.579-1.056s1.16-.879 2.205-1.924l8.234-8.234m-2.804-2.804l2.804 2.804M11 20h6" color="#fdf4f4" /></svg>
  )
}

export function LoadingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="self-center" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray={16} strokeDashoffset={16} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></svg>
  )
}

export function RemoveIcon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" className="p-[0.4]" width={26} height={26} viewBox="0 0 24 24"><path fill="none" stroke="#fdf4f4" strokeLinecap="round" strokeWidth={1.5} d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"></path></svg>)
}

export function AddIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 256 256"><g fill="none" stroke="#fdf4f4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16}><circle cx={128} cy={128} r={112}></circle><path d="M 79.999992,128 H 176.0001"></path><path d="m 128.00004,79.99995 v 96.0001"></path></g></svg>
  )
}


export function DeleteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#fdf4f4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" color="#fdf4f4"></path></svg>
  )
}