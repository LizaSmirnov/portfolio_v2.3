const AboutMe = () => {
  return (
    <div className="card card-side bg-base-100 ">
      <figure>
        <img
          borderRadius='full'
          boxSize='150px'
          src="https://user-images.githubusercontent.com/122588135/219527503-a46e0315-17dc-4654-920f-dc1a8409df5c.jpg"
          alt="liza smirnov in a black dress"
        />
      </figure>
      <div id="AboutMe" className="card-body">
        <h1 className="card-title text-3xl text-accent">About Me</h1>
        <p>
        Transcending into America at the ripe age of five, I was exposed to a diverse family background that instilled in me a love for all things living. Initially, my fascination lay in the animal kingdom, but as I grew older, I found myself increasingly drawn to human interactions and connections during my college years.

Throughout my academic journey, I actively sought opportunities to leverage my existing skills and strengths, aiming to contribute to the development of good leaders while also pursuing avenues to further my own personal and professional growth.

For seven years, I immersed myself in the food industry, where I honed my managerial abilities. However, during this time, I also developed a deep appreciation for the various programs and tools that powered the day-to-day operations. My curiosity for programming grew exponentially as I explored the intricacies of these systems.

As I delved deeper into the world of coding, I discovered a profound understanding and fondness for it. This newfound passion led me to make a pivotal decision - to change my career path and venture into the exciting realm of full-stack development.

Having successfully graduated from UC Berkeley, I have now acquired a solid educational foundation to embark on my professional journey. With my time at UC Berkeley, I've honed my skills and gained valuable knowledge, preparing me to face the challenges and opportunities that lie ahead. Now, I'm eager to put my education to practical use and make a meaningful impact in the world of full-stack development. Below are listed some of my skills I have acquired. Please also checkout my portfolio and resume for more information.
        </p>
        <div className="AboutMe-end"></div>
      </div>
      <div className="flex flex-col w-full"></div>
    </div>
  );
};

export default AboutMe;
