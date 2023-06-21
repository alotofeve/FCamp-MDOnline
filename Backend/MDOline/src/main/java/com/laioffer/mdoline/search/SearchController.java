


@RestController

public class SearchController {
    private final UserService<DoctorEntity, RegisterDoctorBody> doctorService;
    SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    GetMapping("/searchDoctorByName")
    DoctorEntity searchDoctorByName(String firstname,String lastname){
        return searchService.searchDoctorByName(String firstname,String lastname);
    }

    @GetMapping ("/searchDoctorBySpec")
    List<DoctorEntity> searchDoctorBySpec(String spec){
        return searchService.searchDoctorBySpec(String spec);
    }
    @GetMapping ("/searchDoctorByAll")
    List<DoctorEntity> searchDoctorByAll(){
        return searchService.searchDoctorByAll();
    }







}
