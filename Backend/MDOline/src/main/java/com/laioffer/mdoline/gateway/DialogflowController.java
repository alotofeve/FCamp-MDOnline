//package com.laioffer.mdoline.gateway;
//
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/dialogflow")
//public class DialogflowController {
//
//    private final DialogflowService dialogflowService;
//
//    public DialogflowController(DialogflowService dialogflowService) {
//        this.dialogflowService = dialogflowService;
//    }
//
//    @PostMapping
//    public String sendMessageToDialogflow(@RequestParam("project_Id") String projectId,
//                                          @RequestParam("session_Id") String sessionId,
//                                          @RequestBody String message) {
//        return dialogflowService.sendMessage(projectId, sessionId, message);
//    }
//}