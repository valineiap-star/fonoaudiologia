import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Zap, CreditCard, QrCode, Sparkles, ArrowRight, Star } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: 'essencial' | 'completo';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, initialPlanId = 'completo' }) => {
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'completo'>(initialPlanId);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlan(initialPlanId);
    }
  }, [initialPlanId, isOpen]);

  if (!isOpen) return null;

  const isComplete = selectedPlan === 'completo';
  const currentPrice = isComplete ? 'R$ 27,90' : 'R$ 10,00';
  const originalPrice = isComplete ? 'R$ 97,00' : 'R$ 39,00';
  const installmentText = isComplete ? 'ou até 3x de R$ 9,80' : 'Pagamento único via PIX ou Cartão';

  const checkoutUrl = isComplete 
    ? 'https://pay.wiapy.com/PQkBus3GGCH' 
    : 'https://pay.wiapy.com/pq8eDC6y7VLk';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold text-sm">
              FV
            </div>
            <div>
              <h3 className="text-base font-bold leading-tight">Checkout Seguro</h3>
              <p className="text-xs text-teal-200">FONO VISUAL — Atlas Visual de Fonoaudiologia</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-teal-50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Acesso Liberado com Sucesso!</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Enviamos os dados de acesso para <strong className="text-slate-800">{email || 'seu e-mail'}</strong>. Você já pode acessar o {isComplete ? 'Plano Completo' : 'Plano Essencial'}.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left space-y-2 text-xs text-slate-700">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  Resumo da sua compra ({currentPrice}):
                </div>
                {isComplete ? (
                  <>
                    <div>• +100 Materiais Visuais em PDF de Alta Resolução</div>
                    <div>• 10 Módulos Completos de Fonoaudiologia</div>
                    <div>• 3 Bônus Especiais Inclusos</div>
                    <div>• Garantia Incondicional de 7 Dias</div>
                  </>
                ) : (
                  <>
                    <div>• +30 Materiais e Resumos Visuais em PDF</div>
                    <div>• Módulos Fundamentais de Consulta</div>
                    <div>• Bônus: Glossário de 30 Termos da Fonoaudiologia</div>
                    <div>• Garantia Incondicional de 7 Dias</div>
                  </>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors shadow-md cursor-pointer"
              >
                Concluir e Acessar Materiais
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Plan Switcher */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Selecione seu Plano:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('essencial')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPlan === 'essencial'
                        ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-500 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">Plano Essencial</span>
                      <span className="text-[10px] font-normal text-slate-400 line-through">R$ 39</span>
                    </div>
                    <div className="text-base font-extrabold text-slate-900">
                      R$ 10,00
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">+30 materiais</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('completo')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      selectedPlan === 'completo'
                        ? 'border-teal-600 bg-teal-50/60 ring-2 ring-teal-500 shadow-xs'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <div className="absolute top-0 right-0 bg-teal-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl">
                      POPULAR
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-teal-900">Plano Completo</span>
                      <span className="text-[10px] font-normal text-slate-400 line-through">R$ 97</span>
                    </div>
                    <div className="text-base font-extrabold text-teal-800">
                      R$ 27,90
                    </div>
                    <div className="text-[10px] text-teal-700 font-normal">10 Módulos + 3 Bônus</div>
                  </button>
                </div>
              </div>

              {/* Product summary card */}
              <div className="p-3.5 bg-[#FAFBFD] rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wide">
                    {isComplete ? 'Acesso Total (10 Módulos + 3 Bônus)' : 'Acesso Essencial (+30 Materiais)'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isComplete ? 'FONO VISUAL — Atlas Completo' : 'FONO VISUAL — Resumos de Bolso'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through block font-normal">{originalPrice}</span>
                  <span className="text-lg font-extrabold text-teal-800 block">{currentPrice}</span>
                  <span className="text-[10px] text-slate-500 block font-normal">{installmentText}</span>
                </div>
              </div>

              {/* Payment selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'border-teal-600 bg-teal-50/50 text-teal-900 shadow-xs ring-1 ring-teal-500'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-teal-600" />
                  PIX (Instantâneo)
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-teal-600 bg-teal-50/50 text-teal-900 shadow-xs ring-1 ring-teal-500'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-teal-600" />
                  Cartão de Crédito
                </button>
              </div>

              {/* Form fields */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    E-mail para Receber os Materiais
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemplo@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all placeholder:text-slate-400"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Os PDFs e o acesso à área de membros serão enviados para este e-mail.
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm md:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processando com Segurança...
                  </span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>GARANTIR POR {currentPrice}</span>
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  Criptografia 256 bits
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  Garantia de 7 Dias
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-teal-600" />
                  Acesso Imediato
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

