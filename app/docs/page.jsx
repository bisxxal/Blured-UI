 

function page( ) { 
  return (
    <div>
      <h1 className=" logo text-3xl font-semibold mb-5">Introduction</h1>
      <p>
        Create magical landing pages with components that you can copy and paste
        into your apps. Magic UI is a collection of re-usable components that
        you can copy and paste into your web apps. It primarily features
        components, blocks, and templates geared towards creating landing pages
        and user-facing marketing materials.
      </p>

      <div className=" text-[#ffffff70] text-sm mt-10">
        <h1 className=" text-white logo text-3xl font-semibold mb-2 border-b-[2px] pb-3 border-[#ffffff6a]">
          Philosophy
        </h1> 
        <span className=" text-white font-semibold mt-3 mb-2 inline-flex text-base">1. User-Centric</span> <br />
        Design At the heart of our component library is the belief that user
        experience drives design. Our components are crafted with the end-user
        in mind, ensuring that every element not only meets aesthetic standards
        but also provides intuitive usability. We prioritize accessibility,
        clarity, and responsiveness to create interfaces that are both beautiful
        and functional across all devices and platforms. <br />
        <span className=" text-white font-semibold mt-3 mb-2 inline-flex text-base">2. Flexibility and Customization </span> <br />
         We understand that every project has unique requirements.
        Our library embraces flexibility and customization, allowing developers
        to tailor components to their specific needs. 
      </div>

      <div className="text-[#ffffff70] text-sm">
       <span className=" text-white font-semibold mt-3 mb-2 inline-flex text-base">  3. Modern Design Principles</span><br />
         Our library embraces modern design
        principles and trends, incorporating the latest advancements in UI/UX
        design. <br />
       <span className=" text-white font-semibold mt-3 mb-2 inline-flex text-base"> 4. Comprehensive Documentation and Support </span> <br />
        We
        recognize that good documentation is crucial for effective use. Our
        library includes comprehensive and well-organized documentation,
        complete with examples, usage guidelines, and best practices.
        Additionally, we provide responsive support to assist users in resolving
        issues and optimizing their use of our components.
      </div>
    </div>
  );
}

export default page;
