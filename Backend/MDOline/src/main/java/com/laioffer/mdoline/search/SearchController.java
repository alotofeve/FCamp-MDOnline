package com.laioffer.mdoline.search;

import com.laioffer.mdoline.db.entity.DoctorEntity;
import com.laioffer.mdoline.model.ResponseSearchBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {
    private final SearchService searchService;
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping("/search-doctor-by-name")
    public ResponseSearchBody searchDoctorByName(String firstName, String lastName) {
        return searchService.searchDoctorByName(firstName, lastName);
    }
    @GetMapping ("/search-doctor-by-spec")
    public List<ResponseSearchBody> searchDoctorBySpec(String spec) {
        return searchService.searchDoctorBySpec(spec);
    }
    @GetMapping ("/search-doctor-by-all")
    public List<ResponseSearchBody> searchDoctorByAll() {
        return searchService.searchDoctorByAll();
    }
}
