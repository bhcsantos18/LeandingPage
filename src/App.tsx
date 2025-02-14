import React, { useState } from 'react';
import { Bot, MessageSquare, Workflow, Zap, Users, Shield, Code, Check, X, CreditCard, QrCode, Receipt } from 'lucide-react';

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="bg-pattern" />
      
      {/* Hero Section */}
      <header className="hero-gradient">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center hero-content">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              Carbotech
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white">Recursos</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Preços</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contato</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Começar Agora
          </button>
        </nav>

        <div className="container mx-auto px-6 py-24 hero-content">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
              <h1 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Revolucione seu Atendimento com IA
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Crie chatbots inteligentes, automatize conversas e ofereça suporte 24/7 com nossa plataforma completa de atendimento.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Teste Grátis
                </button>
                <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500/10 transition-colors text-lg font-semibold">
                  Ver Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-4 rounded-2xl backdrop-blur-sm glow">
                <img 
                  src="https://images.unsplash.com/photo-1633419798503-c31cec5d8eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Interface do construtor de fluxo"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Recursos Exclusivos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Workflow className="h-12 w-12 text-blue-500" />}
              title="Construtor de Fluxo Visual"
              description="Monte fluxos de conversação de forma visual e intuitiva, sem necessidade de código."
            />
            <FeatureCard
              icon={<MessageSquare className="h-12 w-12 text-blue-500" />}
              title="Atendente IA Avançado"
              description="IA treinada para entender e responder naturalmente, personalizável para seu negócio."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-blue-500" />}
              title="Automação Inteligente"
              description="Automatize tarefas repetitivas e aumente a eficiência do atendimento."
            />
            <FeatureCard
              icon={<Code className="h-12 w-12 text-blue-500" />}
              title="Integrações Poderosas"
              description="Conecte com suas ferramentas favoritas através de nossa API robusta."
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-blue-500" />}
              title="Multiusuários"
              description="Gerencie equipes e permissões de forma simples e segura."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-blue-500" />}
              title="Segurança Avançada"
              description="Seus dados protegidos com criptografia de ponta a ponta."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
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
              onSelect={() => handlePlanSelect('basic')}
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
              onSelect={() => handlePlanSelect('advanced')}
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
              onSelect={() => handlePlanSelect('enterprise')}
            />
          </div>
        </div>
      </section>

      {/* Flow Builder Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Construtor de Fluxo Intuitivo
          </h2>
          <div className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-4 glow">
            <img 
              src="https://images.unsplash.com/photo-1633419798503-c31cec5d8eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Interface do construtor de fluxo"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Bot className="h-8 w-8 text-blue-500" />
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

      {/* Payment Modal */}
      <div className={`payment-modal ${showPayment ? 'active' : ''}`}>
        <div className="payment-modal-content">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Escolha a forma de pagamento</h3>
            <button 
              onClick={() => setShowPayment(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div 
              className={`payment-option ${paymentMethod === 'credit' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('credit')}
            >
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Cartão de Crédito</h4>
                  <p className="text-sm text-gray-400">Pague em até 12x</p>
                </div>
              </div>
            </div>

            <div 
              className={`payment-option ${paymentMethod === 'pix' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('pix')}
            >
              <div className="flex items-center space-x-3">
                <QrCode className="h-6 w-6 text-blue-500" />
                <div>
                  <h4 className="font-semibold">PIX</h4>
                  <p className="text-sm text-gray-400">Pagamento instantâneo</p>
                </div>
              </div>
            </div>

            <div 
              className={`payment-option ${paymentMethod === 'boleto' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('boleto')}
            >
              <div className="flex items-center space-x-3">
                <Receipt className="h-6 w-6 text-blue-500" />
                <div>
                  <h4 className="font-semibold">Boleto Bancário</h4>
                  <p className="text-sm text-gray-400">Vencimento em 3 dias úteis</p>
                </div>
              </div>
            </div>
          </div>

          <button 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!paymentMethod}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card p-8 rounded-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function PriceCard({ title, price, features, highlighted = false, onSelect }) {
  return (
    <div className={`price-card rounded-xl p-8 ${highlighted ? 'highlighted' : ''}`}>
      <div className="price-card-content">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">R$ {price}</span>
          <span className="text-sm">/mês</span>
        </div>
        <ul className="price-card-features space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="h-5 w-5 flex-shrink-0 text-blue-400" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={onSelect}
          className={`w-full py-3 rounded-lg transition-colors ${
            highlighted
              ? 'bg-white text-blue-600 hover:bg-gray-100'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Quero contratar
        </button>
      </div>
    </div>
  );
}

export default App;