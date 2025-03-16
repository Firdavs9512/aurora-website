import { type FC, useState } from "react";
import { motion } from "framer-motion";

const Home: FC = () => {
  const [copied, setCopied] = useState(false);

  const installCommand =
    "curl -fsSL https://aurora.the-box.dev/install.sh | sh";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient is now handled by BackgroundAnimation component */}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 halo-heading">
              Aurora <span className="text-blue-400">AI</span> terminal.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto halo-text">
              We create AI solutions that make working with the terminal easier.
            </p>
            <p className="text-xl text-sky-400 max-w-3xl mx-auto mb-10 halo-text">
              100% Free and Open Source
            </p>

            {/* Installation curl command */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center bg-[#000011]/40 backdrop-blur-md rounded-lg border border-white/5 overflow-hidden max-w-3xl mx-auto">
                <div className="flex-grow p-3 sm:p-4 font-mono text-sm text-gray-300 text-left overflow-x-auto whitespace-nowrap">
                  $ {installCommand}
                </div>
                <button
                  onClick={copyToClipboard}
                  className="w-full sm:w-auto mr-1 px-4 rounded-lg py-3 bg-sky-500/20 hover:bg-sky-500/30 text-white text-sm font-medium transition-all duration-200 border-t sm:border-t-0 sm:border-l border-white/5 flex items-center justify-center"
                >
                  {copied ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/Firdavs9512/aurora-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="halo-button-primary py-3 px-8 rounded-lg text-white font-medium transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
              <a
                href="#contact"
                className="halo-button py-3 px-8 rounded-lg text-white font-medium transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aurora terminal agent provides you with the following capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Command Suggestions
              </h3>
              <p className="text-gray-300">
                Get intelligent command suggestions based on your needs and
                context.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Natural Language Interface
              </h3>
              <p className="text-gray-300">
                Communicate with the terminal in natural language instead of
                memorizing complex command syntax.
              </p>
            </div>
            <div className="bg-[#1a1a2e] p-8 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Command Explanations
              </h3>
              <p className="text-gray-300">
                Get detailed explanations of what commands do before executing
                them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Providers Section */}
      <section id="providers" className="py-20 bg-[#0f0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Providers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aurora terminal agent works with the following AI providers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* OpenAI */}
              <div className="bg-[#1a1a2e] p-8 rounded-lg flex flex-col items-center">
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">OpenAI</h3>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Active
                </div>
                <p className="text-gray-300 text-center">
                  Currently integrated with OpenAI models for powerful natural
                  language processing capabilities.
                </p>
              </div>

              {/* Claude */}
              <div className="bg-[#1a1a2e] p-8 rounded-lg flex flex-col items-center">
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                  <svg
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <title>Claude</title>
                    <path
                      d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Claude</h3>
                <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  In Development
                </div>
                <p className="text-gray-300 text-center">
                  Integration with Anthropic's Claude models is currently in
                  development for enhanced capabilities.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">
                More AI providers will be added in future updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-[#0f0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Terminal Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how Aurora terminal agent works
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a2e] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Aurora Terminal
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="bg-black rounded p-4 font-mono text-green-400">
                <p>$ aurora</p>
                <p className="text-white">
                  Welcome to Aurora Terminal Agent! How can I help you today?
                </p>
                <p>$ help me find large files on my system</p>
                <p className="text-white">
                  I'll help you with that. Try this command:
                </p>
                <p className="text-blue-400">
                  find / -type f -size +100M -exec ls -lh {} \; 2&gt; /dev/null
                  | sort -rh
                </p>
                <p>$ what does this command do?</p>
                <p className="text-white">This command does the following:</p>
                <p className="text-white">
                  1. Searches for all files larger than 100MB on your system
                </p>
                <p className="text-white">
                  2. Shows detailed information for each file
                </p>
                <p className="text-white">3. Suppresses error messages</p>
                <p className="text-white">
                  4. Sorts results by size (largest first)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Download Aurora terminal agent to try it out or get in touch with
              us
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Email Contact */}
              <div className="bg-[#1a1a2e] p-8 rounded-lg flex flex-col items-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <a
                  href="mailto:info@the-box.dev"
                  className="text-sky-400 hover:text-sky-300 transition-colors text-lg"
                >
                  info@the-box.dev
                </a>
                <p className="text-gray-300 text-center mt-4">
                  Reach out to us for questions, support, or partnership
                  opportunities
                </p>
              </div>

              {/* GitHub */}
              <div className="bg-[#1a1a2e] p-8 rounded-lg flex flex-col items-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center text-sky-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  GitHub Repository
                </h3>
                <a
                  href="https://github.com/Firdavs9512/aurora-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 transition-colors text-lg text-center"
                >
                  github.com/Firdavs9512/aurora-agent
                </a>
                <p className="text-gray-300 text-center mt-4">
                  Check out our code, report issues, or contribute to the
                  project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
