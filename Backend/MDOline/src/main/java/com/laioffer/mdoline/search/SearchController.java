package com.laioffer.mdoline.search;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.GeneralSearchBody;
import com.laioffer.mdoline.model.ResponseGeneralSearchBody;
import com.laioffer.mdoline.model.ResponseSearchBody;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SearchController {
    private final SearchService searchService;
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping("/search-doctor-by-firstname")
    public List<ResponseSearchBody> seachDoctorByFirstName (@RequestParam("first_name") String firstname){
        return searchService.seachDoctorByFirstname(firstname);
    }
    @GetMapping("/search-doctor-by-lastname")
    public List<ResponseSearchBody> seachDoctorByLastName (@RequestParam("last_name") String lastname){
        return searchService.seachDoctorByLastname(lastname);
    }
    @GetMapping("/search-doctor-by-fullname")
    public List<ResponseSearchBody> searchDoctorByFullName(@RequestParam("first_name") String firstName,
                                                           @RequestParam("last_name") String lastName) {
        return searchService.seachDoctorByFullname(firstName,lastName);
    }
    @GetMapping("/search-doctor-by-name")
    public ResponseSearchBody searchDoctorByName(
            @RequestParam("first_name") String firstName,
            @RequestParam("last_name") String lastName) {
        return searchService.searchDoctorByName(firstName, lastName);
    }
    @GetMapping ("/search-doctor-by-spec")
    public List<ResponseSearchBody> searchDoctorBySpec(@RequestParam("spec") String spec) {
        return searchService.searchDoctorBySpec(spec);
    }
    @GetMapping ("/search-doctor-by-all")
    public List<ResponseSearchBody> searchDoctorByAll() {
        return searchService.searchDoctorByAll();
    }

    @GetMapping("/get-all-specs")
    public List<String> getAllSpecs(){
        return searchService.getAllSpecs();
    }

    @GetMapping("/search")
    public List<ResponseGeneralSearchBody> search(@RequestBody GeneralSearchBody body) {
        if (body.spec() == null) {
            if (body.firstName() == null) {
                return searchService.searchingByLastName(body.lastName());
            } else if (body.lastName() == null) {
                return searchService.searchingByFirstName(body.firstName());
            } else {
                return searchService.searchingByFullName(body.firstName(), body.lastName());
            }
        }
        return null;
    }
    @PostMapping("/search-doctor")
    public List<ResponseGeneralSearchBody> searchDoctor(@RequestBody GeneralSearchBody body) {
        return searchService.searchDoctor(body.firstName(), body.lastName(), body.spec());
    }

    @GetMapping("/get-profile-by-id")
    public ResponseGeneralSearchBody getDoctorProfileById(@RequestParam("id") Long id){
        return searchService.getDoctorProfileById(id);
    }
}
