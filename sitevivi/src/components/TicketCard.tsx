import React from 'react';
import Barcode from 'react-barcode';

const TicketCard: React.FC = () => {
  return (
    <div className="relative w-[360px] h-[640px] bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black text-white p-6 rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.05)] border border-white/10 overflow-hidden backdrop-blur-sm">

      {/* Decorative Neon Glow Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 animate-pulse-glow pointer-events-none"></div>

      {/* Header */}
      <div className="space-y-1 z-10 relative">
        <h3 className="text-lg font-bold tracking-wider uppercase text-white/90">🎬 Lar Center</h3>
        <p className="text-sm text-white/50">Av. Otto Baumgart, 500 - Vila Guilherme</p>
        <div className="flex justify-between mt-4 text-sm font-medium">
          <div className="text-center">
            <p className="text-white/40">Data</p>
            <p className="text-white">24/05/25</p>
          </div>
          <div className="text-center">
            <p className="text-white/40">Horário</p>
            <p className="text-white">22:00</p>
          </div>
          <div className="text-center">
            <p className="text-white/40">Sala</p>
            <p className="text-white">02</p>
          </div>
        </div>
      </div>

      {/* Movie Title */}
      <div className="text-center mt-10 z-10 relative">
        <h2 className="text-4xl font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-white to-rose-600 animate-text-glow">
          Premonição 6
        </h2>
        <p className="text-xs text-white/60 mt-2 italic tracking-wide">
          
        </p>
      </div>

      {/* Tickets */}
      <div className="grid grid-cols-1 gap-6 mt-10 z-10 relative">
        {[{ seat: 'G7', code: '716376087697743266981' }, { seat: 'G8', code: '1073760822848001445973' }].map((ticket, i) => (
          <div
            key={i}
            className="bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/10 rounded-xl px-4 py-4 shadow-md text-xs backdrop-blur-md"
          >
            <p className="text-white/70 font-semibold mb-1">
              🎟 Meia Entrada — Assento <span className="text-white font-bold">{ticket.seat}</span>
            </p>
            <div className="flex justify-center mt-2">
  <Barcode
    value={ticket.code}
    format="CODE128"
    width={1.2}
    height={40}
    displayValue={false}
    background="#00000000"
    lineColor="#ffffff"
  />
</div>
<p className="mt-2 text-center tracking-widest text-[10px] text-white/40 font-mono">
  {ticket.code}
</p>

          </div>
        ))}
      </div>

      {/* Decorative Details */}
      <div className="absolute bottom-4 left-4 text-[10px] text-white/30 font-mono tracking-widest">
        ID# A6-RSP-9241
      </div>
      <div className="absolute bottom-4 right-4 text-[10px] text-white/30 font-mono tracking-widest italic">
        Lote 01 / 001
      </div>

      {/* Laser Edge Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse" />
    </div>
  );
};

export default TicketCard;