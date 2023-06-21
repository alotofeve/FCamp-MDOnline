


@RestController

public class SearchController {
    private final UserService<DoctorEntity, RegisterDoctorBody> doctorService;
    SearchController(SearchService searchService) {
        this.searchService = searchService;
    }


}