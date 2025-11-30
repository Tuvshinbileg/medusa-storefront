"use client"

import { Button, Heading, Text } from "@medusajs/ui"
import Modal from "@modules/common/components/modal"
import { QRCodeSVG } from "qrcode.react"
import { useState } from "react"

type QPayUrl = {
  link: string
  logo: string
  name: string
  description: string
}

type QPayData = {
  id: string
  urls: QPayUrl[]
  amount: number
  status: string
  qr_text: string
  qr_image: string
  updated_at: string
  invoice_code: string
  currency_code: string
  qpay_invoice_id: string
  sender_invoice_no: string
}

type QPayModalProps = {
  isOpen: boolean
  onClose: () => void
  qpayData: QPayData | null
  onCheckPayment: () => Promise<void>
  isChecking: boolean
}

const QPayModal = ({
  isOpen,
  onClose,
  qpayData,
  onCheckPayment,
  isChecking,
}: QPayModalProps) => {
  const [selectedBank, setSelectedBank] = useState<QPayUrl | null>(null)

  if (!qpayData) return null

  const handleBankClick = (bank: QPayUrl) => {
    setSelectedBank(bank)
    // Open the bank app link
    window.location.href = bank.link
  }

  return (
    <Modal isOpen={isOpen} close={onClose} size="large">
      <Modal.Title>
        <Heading level="h2" className="text-2xl">
          QPay Payment
        </Heading>
      </Modal.Title>
      <Modal.Body>
        <div className="flex flex-col items-center w-full space-y-4 max-h-[55vh] overflow-y-auto">
          {/* QR Code Section */}
          <div className="flex flex-col items-center space-y-3">
            <Text className="text-lg font-medium">
              Scan QR code with your banking app
            </Text>
            <div className="p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
              <QRCodeSVG
                value={qpayData.qr_text}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <div className="text-center space-y-1">
              <Text className="text-sm text-gray-600">
                Invoice: {qpayData.invoice_code}
              </Text>
              <Text className="text-xl font-bold">
                {qpayData.amount.toLocaleString()} {qpayData.currency_code.toUpperCase()}
              </Text>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center w-full">
            <div className="flex-1 border-t border-gray-300"></div>
            <Text className="px-4 text-gray-500">or select your bank</Text>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Bank Options */}
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {qpayData.urls.map((bank, index) => (
                <button
                  key={index}
                  onClick={() => handleBankClick(bank)}
                  className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                    selectedBank?.name === bank.name
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={bank.logo}
                    alt={bank.name}
                    className="w-12 h-12 object-contain mb-2"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = "none"
                    }}
                  />
                  <Text className="text-xs text-center font-medium">
                    {bank.description}
                  </Text>
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-center space-x-2 pb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <Text className="text-sm text-gray-600">
                Status: {qpayData.status}
              </Text>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-between w-full mt-4 pt-4 border-t">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={onCheckPayment}
            isLoading={isChecking}
            disabled={isChecking}
          >
            Check Payment Status
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default QPayModal
