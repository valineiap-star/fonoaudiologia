import React from 'react';
import { X, Shield, FileText, Mail, Send, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [contactSent, setContactSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMsg('');
      setContactSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#FAFBFD]">
          <div className="flex items-center gap-2">
            {type === 'terms' && <FileText className="w-5 h-5 text-teal-600" />}
            {type === 'privacy' && <Shield className="w-5 h-5 text-teal-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-teal-600" />}
            <h3 className="text-base font-bold text-slate-900">
              {type === 'terms' && 'Termos de Uso'}
              {type === 'privacy' && 'Política de Privacidade'}
              {type === 'contact' && 'Fale Conosco — Suporte ao Aluno'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {type === 'terms' && (
            <>
              <p>
                <strong>1. Objeto do Produto:</strong> O FONO VISUAL é uma biblioteca digital de materiais em PDF composta por mapas anatômicos, esquemas, tabelas e resumos elaborados exclusivamente para fins educacionais, de estudo pessoal e de consulta rápida para estudantes e profissionais de Fonoaudiologia.
              </p>
              <p>
                <strong>2. Não Substituição Clínica:</strong> O produto não constitui aconselhamento médico, diagnóstico individual, protocolo clínico obrigatório ou tratamento. Não substitui a bibliografia científica formal nem a soberania de avaliação do profissional habilitado.
              </p>
              <p>
                <strong>3. Direitos Autorais e Licença de Uso:</strong> Todo o conteúdo visual, esquemático e textual do Fono Visual é protegido pelas leis de propriedade intelectual. A aquisição confere uma licença individual e intransferível para visualização digital e impressão pessoal. É expressamente proibida a reprodução comercial, rateio, revenda ou distribuição não autorizada.
              </p>
              <p>
                <strong>4. Garantia Incondicional:</strong> O comprador dispõe de 7 (sete) dias corridos a partir da confirmação do pagamento para solicitar o cancelamento e reembolso integral conforme o Código de Defesa do Consumidor.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong>1. Coleta de Dados:</strong> Coletamos apenas as informações estritamente necessárias para a entrega dos materiais digitais (como nome e e-mail) e para o processamento seguro de pagamentos junto a gateways autorizados.
              </p>
              <p>
                <strong>2. Segurança das Informações:</strong> Não armazenamos dados de cartão de crédito em nossos servidores locais. Todas as transações financeiras são criptografadas com protocolo SSL 256-bit.
              </p>
              <p>
                <strong>3. Compartilhamento:</strong> Seus dados de contato jamais serão vendidos, alugados ou repassados a terceiros para fins comerciais de terceiros.
              </p>
              <p>
                <strong>4. Seus Direitos (LGPD):</strong> Você pode solicitar a atualização ou exclusão de seus dados de nossa base de e-mails a qualquer momento através do canal de suporte.
              </p>
            </>
          )}

          {type === 'contact' && (
            <div>
              {contactSent ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Mensagem Enviada!</h4>
                  <p className="text-sm text-slate-600">
                    Nossa equipe de suporte responderá em até 24 horas úteis no seu e-mail.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <p className="text-xs text-slate-500">
                    Dúvidas sobre o material, acesso ou suporte? Preencha o formulário abaixo ou envie um e-mail para <strong className="text-slate-800">suporte@fonovisual.com.br</strong>
                  </p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Dra. Juliana Souza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Como podemos te ajudar?</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Escreva sua dúvida sobre o Fono Visual..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-[#FAFBFD] text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
