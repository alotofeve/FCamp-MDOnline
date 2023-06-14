package com.laioffer.mdoline.gateway;

import com.google.cloud.dialogflow.v2.*;
import org.springframework.stereotype.Service;

@Service
public class DialogflowService {

    private final SessionsClient sessionsClient;

    public DialogflowService(SessionsClient sessionsClient) {
        this.sessionsClient = sessionsClient;
    }

    public String sendMessage(String projectId, String sessionId, String message) {
        SessionName session = SessionName.of(projectId, sessionId);
        TextInput.Builder textInput = TextInput.newBuilder().setText(message).setLanguageCode("en-US");
        QueryInput queryInput = QueryInput.newBuilder().setText(textInput).build();
        DetectIntentRequest detectIntentRequest = DetectIntentRequest.newBuilder()
                .setSession(session.toString())
                .setQueryInput(queryInput)
                .build();

        DetectIntentResponse response = sessionsClient.detectIntent(detectIntentRequest);
        return response.getQueryResult().getFulfillmentText();
    }
}