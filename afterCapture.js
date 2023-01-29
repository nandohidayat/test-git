const data = {
    "id": "6749663435826677303955",
    "rootId": "6749662579756673803955",
    "reconciliationId": "6749662579756673803955",
    "submitTimeUTC": "2023-01-29T04:25:43Z",
    "merchantId": "ifgtest",
    "applicationInformation": {
        "status": "PENDING",
        "reasonCode": 100,
        "applications": [
            {
                "name": "ics_bill",
                "status": "PENDING",
                "reasonCode": "100",
                "rCode": "1",
                "rFlag": "SOK",
                "reconciliationId": "6749662579756673803955",
                "rMessage": "Request was processed successfully.",
                "returnCode": 1260000
            }
        ]
    },
    "buyerInformation": {},
    "clientReferenceInformation": {
        "code": "cybs_test",
        "applicationName": "REST API",
        "applicationVersion": "1.0",
        "partner": {}
    },
    "consumerAuthenticationInformation": {
        "strongAuthentication": {}
    },
    "deviceInformation": {},
    "installmentInformation": {},
    "fraudMarkingInformation": {},
    "merchantInformation": {
        "merchantDescriptor": {
            "name": "ifgtest"
        }
    },
    "orderInformation": {
        "billTo": {
            "firstName": "JOHN",
            "lastName": "SNOW",
            "address1": "201 S. Division St._1",
            "address2": "Suite 500",
            "locality": "Foster City",
            "administrativeArea": "CA",
            "postalCode": "94404",
            "email": "accept@cybs.com",
            "country": "US",
            "phoneNumber": "6504327113"
        },
        "shipTo": {},
        "amountDetails": {
            "totalAmount": "10.99",
            "currency": "IDR",
            "taxAmount": "0",
            "authorizedAmount": "10.99"
        },
        "shippingDetails": {},
        "invoiceDetails": {},
        "lineItems": [
            {
                "productCode": "default",
                "taxAmount": 0,
                "quantity": 1,
                "unitPrice": 10.99
            }
        ]
    },
    "paymentInformation": {
        "customer": {},
        "paymentInstrument": {},
        "instrumentIdentifier": {},
        "shippingAddress": {},
        "paymentType": {
            "name": "vdcbkmandiri",
            "type": "credit card",
            "method": "VI"
        },
        "card": {
            "suffix": "4242",
            "expirationMonth": "12",
            "expirationYear": "2025",
            "type": "001"
        },
        "invoice": {},
        "accountFeatures": {},
        "fluidData": {}
    },
    "paymentInsightsInformation": {
        "responseInsights": {}
    },
    "processingInformation": {
        "paymentSolution": "Visa",
        "commerceIndicator": "5",
        "commerceIndicatorLabel": "vbv",
        "authorizationOptions": {
            "authType": "O",
            "initiator": {
                "merchantInitiatedTransaction": {}
            }
        },
        "bankTransferOptions": {},
        "japanPaymentOptions": {},
        "fundingOptions": {
            "firstRecurringPayment": false
        },
        "ecommerceIndicator": "5"
    },
    "processorInformation": {
        "processor": {
            "name": "vdcbkmandiri"
        },
        "networkTransactionId": "016153570198200",
        "approvalCode": "831000",
        "responseCode": "00",
        "avs": {
            "code": "Y",
            "codeRaw": "Y"
        },
        "cardVerification": {
            "resultCode": "M"
        },
        "achVerification": {
            "resultCodeRaw": "00"
        },
        "electronicVerificationResults": {},
        "eventStatus": "Pending",
        "retrievalReferenceNumber": "302804195703"
    },
    "pointOfSaleInformation": {},
    "riskInformation": {
        "score": {}
    },
    "recipientInformation": {},
    "senderInformation": {
        "paymentInformation": {
            "customer": {},
            "paymentType": {
                "name": "vdcbkmandiri",
                "type": "credit card",
                "method": "VI"
            },
            "card": {
                "suffix": "4242",
                "expirationMonth": "12",
                "expirationYear": "2025",
                "type": "001"
            },
            "invoice": {},
            "accountFeatures": {},
            "fluidData": {}
        }
    },
    "tokenInformation": {},
    "_links": {
        "self": {
            "href": "https://apitest.cybersource.com/tss/v2/transactions/6749663435826677303955",
            "method": "GET"
        },
        "relatedTransactions": [
            {
                "href": "https://apitest.cybersource.com/tss/v2/transactions/6749662579756673803955",
                "method": "GET"
            }
        ]
    }
}