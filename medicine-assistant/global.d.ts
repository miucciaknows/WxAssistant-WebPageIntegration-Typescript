interface Window {
    watsonAssistantChatOptions: {
      integrationID: any;
      region: string;
      serviceInstanceID: any;
      onLoad: (instance: any) => void;
      clientVersion?: string;
    };
  }