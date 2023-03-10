import react from "../assets/react.svg";

export default function Footer() {
  return (
    <footer className="fixed bottom-0">
      <div className="flex items-center justify-center">
        <p className="p-2 text-xs text-white/75 md:p-4 md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
          doloremque dolore, accusamus itaque modi quo asperiores, beatae
          corrupti sapiente veritatis exercitationem, quisquam odio sit porro!
          &#169;
        </p>
        <div className="grid w-[30%] place-content-center bg-blue-100">
          <img src={react} alt="" className="aspect-square w-20" />
        </div>
      </div>
    </footer>
  );
}
