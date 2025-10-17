"use client";

import { useState, useEffect } from "react";
import { Copy, RefreshCw, Check, Shield, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";
import { usePasswordGenerator } from "@/hooks/password/usePasswordGenerator";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({
    score: 0,
    label: "Faible",
    color: "bg-red-500",
  });

  const { password, generatePassword } = usePasswordGenerator({
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
  });

  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (pwd.length >= 16) score++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    if (score <= 2) return { score, label: "Faible", color: "bg-red-500" };
    if (score <= 4) return { score, label: "Moyen", color: "bg-yellow-500" };
    return { score, label: "Fort", color: "bg-green-500" };
  };

  useEffect(() => {
    if (password) setStrength(calculateStrength(password));
  }, [password]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast.success("Mot de passe copié avec succès !");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erreur de copie:", err);
    }
  };

  const strengthPercentage = (strength.score / 6) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#27272c] to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
        <div className="bg-gradient-to-r from-[#27272c] to-[#27272c] p-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold text-white">
              Générateur de Mots de Passe
            </h1>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="relative">
            <div className="bg-slate-900/50 border-2 border-slate-700 rounded-xl p-4 font-mono text-xl text-white break-all min-h-[60px] flex items-center">
              {password || "Configurez les options"}
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                onClick={generatePassword}
                className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all hover:scale-110 active:scale-95"
                title="Régénérer"
              >
                <RefreshCw className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={copyToClipboard}
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-110 active:scale-95"
                title="Copier"
                disabled={!password}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Copy className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300">Force du mot de passe:</span>
              <span
                className={`font-semibold ${
                  strength.label === "Fort"
                    ? "text-green-400"
                    : strength.label === "Moyen"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {strength.label}
              </span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${strength.color} transition-all duration-300`}
                style={{ width: `${strengthPercentage}%` }}
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-slate-300 font-medium">Longueur:</label>
              <span className="text-white font-bold text-lg bg-slate-700 px-4 py-1 rounded-lg">
                {length}
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-slate-300 font-semibold mb-3">Options:</h3>
            {[
              {
                label: "Majuscules (A-Z)",
                state: includeUppercase,
                setter: setIncludeUppercase,
              },
              {
                label: "Minuscules (a-z)",
                state: includeLowercase,
                setter: setIncludeLowercase,
              },
              {
                label: "Chiffres (0-9)",
                state: includeNumbers,
                setter: setIncludeNumbers,
              },
              {
                label: "Symboles (!@#$%)",
                state: includeSymbols,
                setter: setIncludeSymbols,
              },
            ].map((option, index) => (
              <label
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={option.state}
                  onChange={(e) => option.setter(e.target.checked)}
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-slate-200">{option.label}</span>
              </label>
            ))}
          </div>
          <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2">
              <AlertCircle className="w-5 h-5" />
              <h3>Conseils de sécurité</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Utilisez un mot de passe unique pour chaque compte.</li>
              <li>• Activez l’authentification à deux facteurs (2FA).</li>
              <li>• Changez vos mots de passe régulièrement.</li>
              <li>• Ne partagez jamais vos mots de passe.</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-700/30">
              <p className="text-xs text-slate-400">
                <strong className="text-blue-300">Astuce:</strong> Utilisez un
                gestionnaire comme{" "}
                <span className="text-blue-300">Bitwarden</span>,{" "}
                <span className="text-blue-300">1Password</span> ou{" "}
                <span className="text-blue-300">KeePass</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
