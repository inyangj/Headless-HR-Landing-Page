// State to track the active section
let activeSection = 'applicant';

// Function to handle For Applicants button click
function handleApplicantClick() {
    activeSection = 'applicant';
    renderComponent();
}

// Function to handle For Organizations button click
function handleOrganizationClick() {
    activeSection = 'organization';
    renderComponent();
}

// Function to render the appropriate component based on the active section
function renderComponent() {
    const renderedComponent = document.getElementById('renderedComponent');
    const applicantButton = document.getElementById('applicantButton');
    const organizationButton = document.getElementById('organizationButton');

    if (activeSection === 'applicant') {
        renderedComponent.innerHTML = `
        <section class="bg-green_600 check pt-6 mx-4 lg:mx-16 xl:mx-32 rounded-5xl">
        <div class="bg-purple_2 w-full rounded-3xl relative md:flex md:items-center lg:gap-[5.5rem] md:px-[1.94rem] lg:px-10 xl:pl-20 xl:pr-0 xl:pt-0 py-[2.1rem]">
          <div class="text-renaissance_white px-4 py-6 md:px-0 md:py-0 lg:w-full">
            <h3 class="pb-6 md:pb-4 text-2xl font-bold">Easy Application for Applicants</h3>
            <ul class="list-disc pl-2 grid gap-[2px] pb-6 text-sm lg:text-base"> 
              <li>A user-friendly form to submit job applications</li>
              <li>A status update email to keep applicants informed of the progress of their application</li>
              <li>The ability to upload resumes and cover letters</li>
              <li>A confirmation email after submitting the application</li>
            </ul>
            <button class="rounded-md  border shadow-3xl text-sm bg-renaissance_white text-renaissance_Primary_black border-[rgba(33, 41, 52, 0.07)] py-2 px-3 font-semibold md:py-3 md:px-5 block my-auto">Learn More</button>
          </div>
      
          <figure class="w-full">
            <img src="./assets/applicationform2.png" class="block" alt="application-form-2" />
            <img src="./assets/application1.png" class="absolute right-9 md:right-[4.25rem] bottom-3 w-[190px] md:bottom-10 lg:bottom-4 lg:right-[4.5rem] xl:w-[210px] xl:right-[3.5rem]" alt="application-form-1" />
          </figure>
        </div>
      </section>
        `;
        applicantButton.classList.add('active');
        organizationButton.classList.remove('active');
    } else if (activeSection === 'organization') {
        renderedComponent.innerHTML = `
        <section class='bg-purple_2  check pt-6 mx-4 lg:mx-16  xl:mx-32 rounded-5xl'>
        <div class='bg-green_600 gap-10  w-full rounded-3xl relative md:flex md:items-center lg:gap-[5.5rem] md:px-[1.94rem] lg:px-10 xl:pl-20 xl:pr-0 xl:pt-[5.73rem] py-[2.1rem]'>
            <div class='text-renaissance_white  py-6 md:px-0 md:py-0 md:w-full'>
                <h3 class="pb-6 md:pb-4 text-2xl font-bold">Easy Application for Organizations</h3>
                <ul class='list-disc pl-2 grid gap-[2px] pb-6 text-sm lg:text-base lg:w-[25rem] xl:w-[29rem]'> 
                    <li>A dashboard to view and manage all job applications</li>
                    <li>The ability to update the status of each application</li>
                    <li>The ability to send emails to applicants based on their status (accepted, rejected, or in progress)</li>
                    <li>The ability to schedule interviews with applicants and view their availability</li>
                    <li>The ability to add notes to each application</li>
                </ul>
                <button class='rounded-md  border shadow-3xl text-sm bg-renaissance_white text-renaissance_Primary_black border-[rgba(33, 41, 52, 0.07)] py-2 px-3 font-semibold md:py-3 md:px-5 block my-auto'>Learn More</button>
            </div>
      
            <div class='w-full'>
                <img src='./assets/organization1.png' class='hidden md:block absolute top-4 right-56 lg:right-[17rem] lg:top-10 xl:top-8 xl:right-[25.5rem] xl:w-[8.5rem]' alt='organization image 1' />
                <img src='./assets/organzation2.png' class='block' alt='organization image 2' />
                <img src='./assets/organization3.png' class='absolute right-0 md:right-[1.25rem] bottom-0 w-[12rem] md:bottom-9 lg:bottom-4 lg:right-[1rem] xl:w-[210px] xl:right-[3.5rem]' alt='organization image 3' />
            </div>
        </div>
      </section>
        `;
        applicantButton.classList.remove('active');
        organizationButton.classList.add('active');
    }
}

// Initial rendering
renderComponent();