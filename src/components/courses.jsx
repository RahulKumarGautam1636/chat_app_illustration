const Courses = () => {
    return (
        <section id="courses" style={{marginTop: '15rem'}}>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-md-3">
                        <div class="row">
                            <ul class="nav flex-column nav-pills" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button type="button" id="tabVertical-1" class="nav-link active" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-1" role="tab" aria-controls="tabVertical-pane-1" aria-selected="true">Panel 1</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button type="button" id="tabVertical-2" class="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-2" role="tab" aria-controls="tabVertical-pane-2" aria-selected="false">Panel 2</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button type="button" id="tabVertical-3" class="nav-link" data-bs-toggle="tab" data-bs-target="#tabVertical-pane-3" role="tab" aria-controls="tabVertical-pane-3" aria-selected="false">Panel 3</button>
                            </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col col-12 col-md-9">
                        <div class="tab-content">
                            <div id="tabVertical-pane-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tabVertical-1">

                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button type="button" id="tabFade-1" class="nav-link active" data-bs-toggle="tab" data-bs-target="#tabFade-pane-1" role="tab" aria-controls="tabFade-pane-1" aria-selected="true">Panel 1</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button type="button" id="tabFade-2" class="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-pane-2" role="tab" aria-controls="tabFade-pane-2" aria-selected="false">Panel 2</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button type="button" id="tabFade-3" class="nav-link" data-bs-toggle="tab" data-bs-target="#tabFade-pane-3" role="tab" aria-controls="tabFade-pane-3" aria-selected="false">Panel 3</button>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tabFade-pane-1" class="tab-pane fade show active" role="tabpanel" aria-labelledby="tabFade-1">
                                        <p>Panel 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-pane-2" class="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-2">
                                        <p>Panel 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                    <div id="tabFade-pane-3" class="tab-pane fade" role="tabpanel" aria-labelledby="tabFade-3">
                                        <p>Panel 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                                    </div>
                                </div>
                            </div>

                            <div id="tabVertical-pane-2" class="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-2">
                                <p>Panel 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                            </div>
                            <div id="tabVertical-pane-3" class="tab-pane fade" role="tabpanel" aria-labelledby="tabVertical-3">
                                <p>Panel 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, urna ut pharetra ultricies, augue tellus euismod turpis, vitae semper ipsum augue a velit. Pellentesque id finibus velit. Ut sagittis maximus maximus. In aliquet enim sed turpis mollis ornare. Suspendisse elementum a magna eu luctus. Etiam tincidunt mattis mauris, non lobortis nulla tempor in. Sed lacinia metus viverra, scelerisque enim sed, sollicitudin magna. Sed non augue sit amet nisl tincidunt ultrices. Praesent nec lacus eget tortor ultricies pulvinar. Praesent euismod ut lorem sit amet bibendum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses;