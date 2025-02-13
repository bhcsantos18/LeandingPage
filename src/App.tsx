import React from 'react';
import { Bot, MessageSquare, Workflow, Zap, Users, Shield, Code, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="hero-gradient">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center hero-content">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">Carbotech</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white">Recursos</a>
            <a href="#pricing" className="text-white/80 hover:text-white">Preços</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contato</a>
          </div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Começar Agora
          </button>
        </nav>

        <div className="container mx-auto px-6 py-24 hero-content">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Revolucione seu Atendimento com IA
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Crie chatbots inteligentes, automatize conversas e ofereça suporte 24/7 com nossa plataforma completa de atendimento.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                  Teste Grátis
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Profissional usando Carbotech"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Recursos Exclusivos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Workflow className="h-12 w-12 text-blue-600" />}
              title="Construtor de Fluxo Visual"
              description="Monte fluxos de conversação de forma visual e intuitiva, sem necessidade de código."
            />
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12 text-blue-600" />}
              title="Atendente IA Avançado"
              description="IA treinada para entender e responder naturalmente, personalizável para seu negócio."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-blue-600" />}
              title="Automação Inteligente"
              description="Automatize tarefas repetitivas e aumente a eficiência do atendimento."
            />
            <FeatureCard
              icon={<Code className="h-12 w-12 text-blue-600" />}
              title="Integrações Poderosas"
              description="Conecte com suas ferramentas favoritas através de nossa API robusta."
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-blue-600" />}
              title="Multiusuários"
              description="Gerencie equipes e permissões de forma simples e segura."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Segurança Avançada"
              description="Seus dados protegidos com criptografia de ponta a ponta."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Planos Disponíveis
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PriceCard
              title="Básico"
              price="229"
              features={[
                "5 usuários",
                "Chatbot para atendimento",
                "Painel de atendimento",
                "Integrações com redes sociais"
              ]}
            />
            <PriceCard
              title="Avançado"
              price="419"
              features={[
                "15 usuários",
                "Chatbot e IA para atendimento personalizado",
                "Painel de atendimento",
                "Integração com redes sociais"
              ]}
              highlighted={true}
            />
            <PriceCard
              title="Empresarial tech+"
              price="1249"
              features={[
                "30 usuários",
                "Chatbot e IA com integração API",
                "Painel de atendimento",
                "Integração com redes sociais",
                "Tokens ilimitados"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Flow Builder Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Construtor de Fluxo Intuitivo
          </h2>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Interface do construtor de fluxo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Carbotech</span>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-center md:text-left">
              <div>
                <h3 className="font-semibold mb-2">Produto</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-blue-400">Recursos</a></li>
                  <li><a href="#" className="hover:text-blue-400">Preços</a></li>
                  <li><a href="#" className="hover:text-blue-400">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Empresa</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-blue-400">Sobre</a></li>
                  <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400">Carreiras</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Suporte</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-blue-400">Documentação</a></li>
                  <li><a href="#" className="hover:text-blue-400">Status</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contato</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Carbotech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PriceCard({ title, price, features, highlighted = false }) {
  return (
    <div className={`rounded-xl p-8 ${
      highlighted 
        ? 'bg-blue-600 text-white transform scale-105' 
        : 'bg-white text-gray-900'
    }`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">R$ {price}</span>
        <span className="text-sm">/mês</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <Check className="h-5 w-5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg transition-colors ${
        highlighted
          ? 'bg-white text-blue-600 hover:bg-gray-100'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}>
        Quero contratar
      </button>
    </div>
  );
}

export default App;